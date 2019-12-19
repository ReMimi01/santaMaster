export class Action {
    id!: number;
    picture!: string;
    detail!: string;
    date!: Date;
  
    constructor(input: Action) {
      Object.assign(this, input);
  }
  }