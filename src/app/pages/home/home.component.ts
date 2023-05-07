import { Component } from '@angular/core';
import { IRuta, ROUTES_CONFIG } from '@app/constantes/routes.const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  showSideBar: boolean = true;
  rutas: IRuta[] = ROUTES_CONFIG;
  rutaImg: string = '/assets/descargar.jpg';

  toogleSideBar(): void {
    this.showSideBar = !this.showSideBar;
  }
}
