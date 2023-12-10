import { FatManBuilder } from './builder/FatManBuilder';
import { StickManBuilder } from './builder/StickManBuilder';
import { Movement, Person } from './model/Person';

function range(n: number): number[] {
  return [...Array(n).keys()];
}

function generateMovement(): Movement {
  const oneOrZero = Math.round(Math.random());

  return oneOrZero === 0 ? 'left' : 'right';
}

function sleep(timeout: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
}

async function animate(frames: Person[]): Promise<void> {
  for (const frame of frames) {
    frame.draw();
    await sleep(500);
  }
}

export const prototypeApp = {
  main(): void {
    const totalMovements = 300;
    const frames: Person[] = [];
    // const builder = new FatManBuilder();
    const builder = new StickManBuilder();
    let person = builder.build();
    frames.push(person);

    range(totalMovements).forEach(() => {
      const movement = generateMovement();
      person = person.clone();
      person.move(movement);
      frames.push(person);
    });

    animate(frames);
  },
};
