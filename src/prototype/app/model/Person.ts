export type Movement = 'left' | 'right';

export class Person {
  constructor(
    public line1: string,
    public line2: string,
    public line3: string,
    public line4: string,
    public distanceFromStart: number
  ) {}

  draw(): void {
    console.log('');
    console.log(this.line1);
    console.log(this.line2);
    console.log(this.line3);
    console.log(this.line4);
  }

  move(movement: Movement): void {
    if (movement === 'right' || this.distanceFromStart === 0) {
      this.right();
      return;
    }

    this.left();
  }

  private left(): void {
    this.line1 = this.line1.substring(1);
    this.line2 = this.line2.substring(1);
    this.line3 = this.line3.substring(1);
    this.line4 = this.line4.substring(1);
    this.distanceFromStart--;
  }

  private right(): void {
    this.line1 = ` ${this.line1}`;
    this.line2 = ` ${this.line2}`;
    this.line3 = ` ${this.line3}`;
    this.line4 = `_${this.line4}`;
    this.distanceFromStart++;
  }

  clone(): Person {
    return new Person(
      this.line1,
      this.line2,
      this.line3,
      this.line4,
      this.distanceFromStart
    );
  }
}
