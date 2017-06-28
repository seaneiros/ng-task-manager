export class Task {

  private _id: string;

  constructor(private _title: string, private _description: string, private _deadline: number) {
    const salt: string = (Math.random() * 1000).toFixed();
    this._id = `T-${Date.now()}-${salt}`;
  }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get deadline(): number {
    return this._deadline;
  }

  set deadline(value) {
    this._deadline = value;
  }

}
