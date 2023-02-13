import {Component} from "@angular/core";
import {CoreModule} from "../core/core.module";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CoreModule
  ],
  template: `
    <app-banner></app-banner>
  `
})
export class HomeComponent {
}
