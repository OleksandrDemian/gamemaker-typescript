// @ts-nocheck
class Base extends GMObject {
  name: string;

  onDrawGui(): void {
    const _xx = this.x;
    let _yy = this.y - 40;
    const x = this.x;

    // Draw Shadow
    draw_set_color(c_black);
    draw_text(_xx + 2, _yy + 2, this.name);

    // Draw Main Text
    draw_set_color(c_white);
    draw_text(_xx, _yy, this.name);
  }
}