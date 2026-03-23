declare type Real = number;
declare type Bool = 0 | 1;
// @ts-ignore
declare type String = string;
declare type Any = any;
declare type Undefined = undefined;
declare type ArgumentIdentity = any;
declare type Mixed = any;

interface Struct {
  [k: string | number]: any;
}

interface Array<T> {
  length: number;
  [index: number]: T;
}
