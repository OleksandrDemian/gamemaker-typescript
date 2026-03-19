import ts from "typescript";

export const transpileOptions: ts.TranspileOptions = {
  compilerOptions: {
    target: ts.ScriptTarget.ES5,
    module: ts.ModuleKind.CommonJS,
    useDefineForClassFields: false,
  },
};
