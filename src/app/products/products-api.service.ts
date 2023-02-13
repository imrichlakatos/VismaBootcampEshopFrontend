import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Product} from "./models/product";

const BASE_URL = 'api/products/';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  constructor(private http: HttpClient) {
  }

  getProduct() {
    return this.http.get<Product>(BASE_URL);
  }

  deleteProduct(id: number) {
    return this.http.delete(BASE_URL + id);
  }

  updateProduct(product: Product) {
    return this.http.put(BASE_URL + product.id, product);
  }
}
