// @ts-nocheck
class Player extends Entity {
  move (dx: number, dy: number) {
    super.move(dx, dy);
  }

  say_hi () {
    super.say_hi();
  }

  mind_own_biz () {
    this.sprite_index = spr_mind_own_biz;
  }
}
