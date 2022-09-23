export class Artifact {

  public readonly id: number = 0;
  public readonly name: string = "";
  public readonly author: string = "";
  public readonly desc: string = "";
  public readonly reference: string = "";
  public readonly img: string = "";

  public constructor(
    id: number,
    name: string,
    author: string,
    desc: string,
    reference: string,
    img: string,
  ) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.desc = desc;
    this.reference = reference;
    this.img = img;
  }
}
