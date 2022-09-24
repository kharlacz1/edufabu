export class ZachetaArtifact {

  public readonly id: number = 0;
  public readonly type: string = "";
  public readonly attributes: string[] = [];

  public constructor(
    id: number,
    type: string,
    attributes: string[],
  ) {
    this.id = id;
    this.type = type;
    this.attributes = attributes;
  }
}
