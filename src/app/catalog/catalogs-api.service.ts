import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Catalog} from "./models/catalog";

const BASE_URL = 'api/catalogs/';

@Injectable({
  providedIn: 'root'
})
export class CatalogsApiService {
  constructor(private http: HttpClient) {
  }

  createCatalog(catalog: Catalog) {
    return this.http.post(BASE_URL, catalog);
  }

  updateCatalog(catalog: Catalog) {
    return this.http.put(BASE_URL + catalog.id, catalog);
  }

  deleteCatalog(id: number) {
    return this.http.delete(BASE_URL + id);
  }

  getCatalogs() {
    return this.http.get<Catalog[]>(BASE_URL);
  }

  getCatalog(id: number) {
    return this.http.get<Catalog>(BASE_URL + id);
  }
}
