declare type Real = number;
declare type Bool = boolean;
declare type String = string;
declare type Any = any;
declare type Undefined = undefined;
declare type ArgumentIdentity = any;
declare type Mixed = any;

interface Array<T> {
  length: number;
  [index: number]: T;
}
