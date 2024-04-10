/**Returns the size of the Img in the url
 * 
 * @param url url of the picture
 * @returns Image object
 */


export function getMeta (url : string) :Promise<HTMLImageElement> {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img : HTMLImageElement= new Image();
    img.onload = () => resolve(img);
    img.onerror = (err) => reject(err);
    img.src = url;
  })
}