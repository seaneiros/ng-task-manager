export class Task {

  private _id: string;

  constructor(private _title: string = '', private _description: string = '', private _deadline: number = Date.now(), private _isActive: boolean = true) {
    const salt: string = (Math.random() * 1000).toFixed();
    this._id = `T-${Date.now()}-${salt}`;
  }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get deadline(): number {
    return this._deadline;
  }

  set deadline(value: number) {
    this._deadline = value;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  set isActive(value: boolean) {
    this._isActive = value;
  }

}
