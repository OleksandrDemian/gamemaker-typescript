const chokidar = require("chokidar");
const ts = require("typescript");
const fs = require("node:fs");
const path = require("node:path");

// Map TS method → GameMaker event file
const EVENT_MAP = {
  create: "Create_0.gml",
  step: "Step_0.gml",
  draw: "Draw_0.gml",
  destroy: "Destroy_0.gml",
};

function compileTS(file) {
  if (!path.basename(file).match(new RegExp("^ctr_.+\.ts$"))) {
    return;
  }

  const source = fs.readFileSync(file, "utf-8");

  const result = ts.transpileModule(source, {
    compilerOptions: {
      target: ts.ScriptTarget.ES5,
      module: ts.ModuleKind.CommonJS,
      useDefineForClassFields: false,
    },
  });

  const outFile = file.replace(".ts", ".js");
  fs.writeFileSync(outFile, result.outputText);

  processController(outFile, file);
}

// Load module + extract controller
function processController(jsFile, originalTsFile) {
  delete require.cache[require.resolve(path.resolve(jsFile))];

  const mod = require(path.resolve(jsFile));

  const ControllerClass = findControllerClass(mod);
  if (!ControllerClass) {
    console.warn("No controller class found in", jsFile);
    return;
  }

  const methods = getMethods(ControllerClass);

  generateGMFiles(originalTsFile, ControllerClass.name, methods);
}

// Find exported class
function findControllerClass(mod) {
  // Prefer default export
  if (typeof mod === "function") return mod;
  if (typeof mod.default === "function") return mod.default;

  // fallback: first function export
  return Object.values(mod).find(v => typeof v === "function");
}

// Get methods WITHOUT calling constructor
function getMethods(ControllerClass) {
  let methods = new Set();
  let currentProto = ControllerClass.prototype;

  // Traverse up the prototype chain until we hit Object.prototype
  while (currentProto && currentProto !== Object.prototype) {
    const propertyNames = Object.getOwnPropertyNames(currentProto);

    propertyNames.forEach(name => {
      // We only care about functions that aren't the constructor
      if (name !== 'constructor' && typeof currentProto[name] === 'function') {
        methods.add(name);
      }
    });

    // Move up to the next parent in the chain
    currentProto = Object.getPrototypeOf(currentProto);
  }

  return Array.from(methods);
}

// Generate GameMaker files
function generateGMFiles(tsFile, className, methods) {
  const baseName = path.basename(tsFile, ".ts"); // ctr_player_controller
  const objName = baseName.replace("ctr_", "obj_");

  const objDir = path.join(process.cwd(), objName);
  if (!fs.existsSync(objDir)) fs.mkdirSync(objDir, { recursive: true });

  methods.forEach(method => {
    const eventFile = EVENT_MAP[method];
    if (!eventFile) return;

    const outPath = path.join(objDir, eventFile);

    let content = "";

    if (method === "create") {
      content = `
controller = new ${className}();
controller.create();
`.trim();
    }
    else if (method === "step") {
      content = `
if (!instance_exists(controller)) {
  controller = new ${className}();
  controller.create();
}
controller.step();
`.trim();
    }
    else {
      content = `controller.${method}();`;
    }

    fs.writeFileSync(outPath, content);
    console.log("Generated:", outPath);
  });
}

// Watch files
chokidar
  .watch("./", { ignoreInitial: false, ignored: new RegExp('/^(?!.*\.ts$).*$/') })
  .on("add", compileTS)
  .on("change", compileTS);

console.log("Watching ctr_*.ts...");
