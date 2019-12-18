export class Action {
    id!: number;
    picture!: string;
    detail!: string;
    date!: Date;
    title!: String;
  
    constructor(input: Action) {
      Object.assign(this, input);
  }
  }