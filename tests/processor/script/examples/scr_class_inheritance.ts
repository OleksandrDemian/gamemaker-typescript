// @ts-nocheck
class Entity {
  name: string;

  constructor(_name: string) {
    this.name = _name;
  }

  sayHi(): void {
    show_debug_message(this.name);
  }
}

class Player extends Entity {
  constructor(name: string) {
    super(name);
  }

  sayHi() {
    super.sayHi();
    show_debug_message("Override sayHi");
  }
}

class EntityTwo {
  sayHi(_name: string): void {
    show_debug_message(_name);
  }
}

class PlayerTwo extends EntityTwo {
  name: string;

  constructor(_name: string) {
    this.name = _name;
  }

  sayHi() {
    super.sayHi(this.name);
  }
}

class EntityThree {
  sayHi(_name: string): void {
    show_debug_message(_name);
  }
}

class PlayerThree extends EntityThree {
  sayHi(name: string): void {
    super.sayHi(string_upper(name));
  }
}
