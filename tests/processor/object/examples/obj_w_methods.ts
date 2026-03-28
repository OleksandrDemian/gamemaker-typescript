// @ts-nocheck
class TestObject extends GMObject {
  movement_speed: number;

  onCreate() {
    this.movement_speed = 3;
  }

  changeSpeed (speed: number) {
    this.movement_speed = speed;
  }
}
