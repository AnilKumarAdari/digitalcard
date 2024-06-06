export class ErrorDto {
  name: string;
  description: string;

  constructor(data: any) {
    this.name = data.name;
    this.description = data.description;
  }
}
