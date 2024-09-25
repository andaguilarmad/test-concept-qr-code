export class ImageValidation {
  public static isImageUrl (value: string): boolean {
    const imageUrlRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/
    return imageUrlRegex.test(value)
  }
}
