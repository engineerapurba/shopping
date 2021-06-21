export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;

  constructor(id, name, description = '', price = 0, imageUrl = 'https://www.google.com/search?q=rubik+cube&sxsrf=ALeKk013lKvG4KmVZvjlxcJ9K9Ku3prTrA:1624205041470&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjz06eky6bxAhWX8XMBHdrACqUQ_AUoAXoECAIQAw&biw=1366&bih=657#imgrc=nz0Zd_FKpUTTRM') {
    this.id = id
    this.name = name
    this.description = description
    this.price = price
    this.imageUrl = imageUrl
  }
}
