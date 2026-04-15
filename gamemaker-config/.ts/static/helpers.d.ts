declare type Real = number;
declare type Bool = boolean;
declare type BoolNumber = boolean;
// @ts-ignore
declare type String = string;
declare type Any = any;
declare type Undefined = undefined;
declare type ArgumentIdentity = any;
declare type Mixed = any;

interface Struct {
  [k: string | number]: any;
}

type Partial<T> = {
  [P in keyof T]?: T[P];
}

type Record<K extends keyof any, T> = {
  [P in K]: T;
};

interface Array<T> {
  length: number;
  [index: number]: T;
}
