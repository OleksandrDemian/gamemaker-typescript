// @ts-nocheck
class CollisionObject extends GMObject {
  onCreate() {
    this.hitCount = 0;
  }

  onCollision_obj_enemy() {
    instance_destroy();
  }

  onCollision_obj_pickup() {
    super.onCollision_obj_pickup();
    this.hitCount += 1;
  }
}
