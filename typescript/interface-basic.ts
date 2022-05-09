interface IPerson {
  name:string;
  age?: number;
  readonly id: number;
}

let viking: IPerson = {
  id: 100,
  name: 'viking',
}

// viking.id = 123