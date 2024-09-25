export class StringValidations {
  public static lengthIsLessThanMaxCharacters (
    value: string,
    max: number
  ): boolean {
    return value.length < max
  }
}
