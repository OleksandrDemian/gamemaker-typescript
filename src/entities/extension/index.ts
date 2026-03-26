export interface IGMExtension {
  "$GMExtension": string;
  "%Name": string;
  resourceType: "GMExtension";
  resourceVersion: string;
  name: string;
  author: string;
  description: string;
  extensionVersion: string;
  packageId: string;
  productId: string;
  license: string;
  copyToTargets: number;
  supportedTargets: number;
  exportToGame: boolean;
  hasConvertedCodeInjection: boolean;
  helpfile: string;
  installdir: string;
  optionsFile: string;
  sourcedir: string;
  options: any[];
  IncludedResources: any[];
  files: IGMExtensionFile[];
  parent: IGMExtensionParent;

  // Android Specifics
  androidactivityinject: string | null;
  androidclassname: string;
  androidcodeinjection: string;
  androidinject: string | null;
  androidmanifestinject: string | null;
  androidPermissions: string[];
  androidProps: boolean;
  androidsourcedir: string;
  gradleinject: string | null;

  // iOS Specifics
  iosCocoaPodDependencies: string;
  iosCocoaPods: string;
  ioscodeinjection: string;
  iosdelegatename: string;
  iosplistinject: string | null;
  iosProps: boolean;
  iosSystemFrameworkEntries: any[];
  iosThirdPartyFrameworkEntries: any[];

  // macOS Specifics
  maccompilerflags: string;
  maclinkerflags: string;
  macsourcedir: string;

  // tvOS Specifics
  tvosclassname: string | null;
  tvosCocoaPodDependencies: string;
  tvosCocoaPods: string;
  tvoscodeinjection: string;
  tvosdelegatename: string | null;
  tvosmaccompilerflags: string;
  tvosmaclinkerflags: string;
  tvosplistinject: string | null;
  tvosProps: boolean;
  tvosSystemFrameworkEntries: any[];
  tvosThirdPartyFrameworkEntries: any[];

  // Web Specifics
  HTML5CodeInjection: string;
  html5Props: boolean;

  // Misc
  classname: string;
}

export interface IGMExtensionFile {
  "$GMExtensionFile": string;
  "%Name": string;
  resourceType: "GMExtensionFile";
  resourceVersion: string;
  name: string;
  filename: string;
  origname: string;
  kind: number;
  init: string;
  final: string;
  uncompress: boolean;
  usesRunnerInterface: boolean;
  copyToTargets: number;
  constants: any[];
  functions: any[];
  ProxyFiles: any[];
}

export interface IGMExtensionParent {
  name: string;
  path: string;
}

export interface ICreateExtensionFileProps {
  filename: string;
}
export const createExtensionFile = ({ filename }: ICreateExtensionFileProps): IGMExtensionFile => {
  return {
    "$GMExtensionFile":"v1",
    "%Name":"",
    constants: [],
    copyToTargets: -1,
    filename: filename,
    final: "",
    functions: [],
    init: "",
    kind: 4,
    name: "",
    origname: "",
    ProxyFiles: [],
    resourceType: "GMExtensionFile",
    resourceVersion: "2.0",
    uncompress: false,
    usesRunnerInterface: false
  };
}

export interface ICreateExtensionProps {
  name: string;
  folder: string;
  files: IGMExtensionFile[];
}
export const createExtension = ({ name, folder, files }: ICreateExtensionProps): IGMExtension => {
  return {
    "$GMExtension": "",
    "%Name": name,
    androidactivityinject:null,
    androidclassname:"",
    androidcodeinjection:"",
    androidinject:null,
    androidmanifestinject:null,
    androidPermissions:[],
    androidProps:false,
    androidsourcedir:"",
    author:"",
    classname:"",
    copyToTargets:-1,
    description:"",
    exportToGame:true,
    extensionVersion:"0.0.1",
    files,
    gradleinject: null,
    hasConvertedCodeInjection: true,
    helpfile: "",
    HTML5CodeInjection: "",
    html5Props: false,
    IncludedResources: [],
    installdir: "",
    iosCocoaPodDependencies: "",
    iosCocoaPods: "",
    ioscodeinjection: "",
    iosdelegatename: "",
    iosplistinject: null,
    iosProps: false,
    iosSystemFrameworkEntries: [],
    iosThirdPartyFrameworkEntries: [],
    license: "",
    maccompilerflags: "",
    maclinkerflags: "",
    macsourcedir: "",
    name:  name,
    options: [],
    optionsFile: "options.json",
    packageId: "",
    parent: {
      name: folder,
      path: `folders/${folder}.yy`,
    },
    productId: "",
    resourceType: "GMExtension",
    resourceVersion: "2.0",
    sourcedir: "",
    supportedTargets: -1,
    tvosclassname: null,
    tvosCocoaPodDependencies: "",
    tvosCocoaPods: "",
    tvoscodeinjection: "",
    tvosdelegatename: null,
    tvosmaccompilerflags: "",
    tvosmaclinkerflags: "",
    tvosplistinject: null,
    tvosProps: false,
    tvosSystemFrameworkEntries: [],
    tvosThirdPartyFrameworkEntries: [],
  };
};
