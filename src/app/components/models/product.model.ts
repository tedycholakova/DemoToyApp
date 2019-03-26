export class ProductModel {
  
  constructor(
              public productType: string,
              public productName: string,
              public price: string,
              public description: string,
              public imageUrl?: string) {}
    
  }