// @ts-nocheck
class TestObject extends GMObject {
  movement_speed: number;

  changeSpeed (speed: number) {
    this.movement_speed = speed;
  }
}
