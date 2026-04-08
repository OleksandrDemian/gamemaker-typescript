// @ts-nocheck
class Player {
  name: string;

  constructor(_name: string) {
    this.name = _name;
  }

  sayHi(): void {
    show_debug_message(this.name);
  }
}

class PlayerMultipleArgs {
  name: string;

  constructor(_name: string, _num: number) {
    this.name = _name;
  }

  sayHi(): void {
    show_debug_message(this.name);
  }
}

class PlayerNoArgs {
  sayHi(): void {
    show_debug_message("Hi!");
  }
}

class PlayerNoArgsTwo {
  sayHi(name: string): void {
    show_debug_message("Hi " + name);
  }
}

class PlayerNoArgsThree {
  name: string;

  constructor() {
    this.name = "Ciaone";
  }

  sayHi(): void {
    show_debug_message("Hi " + this.name);
  }
}
