export class Calendar {
    id!: number;
    name!: string;
    detail!: string;
    type!: string;
    guid!: string;
  
    constructor(input: Calendar) {
      Object.assign(this, input);
  }
  }