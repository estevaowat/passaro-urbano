import { Component, OnInit } from '@angular/core';
import { OfertasServices } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasServices]
})
export class HomeComponent implements OnInit {
  public ofertas: Oferta[]
  constructor(private ofertasServices: OfertasServices) { }

  ngOnInit() {
    //this.ofertas = this.ofertasServices.getOfertas()

    this.ofertasServices.getOfertas()
      .then((ofertas: Oferta[]) => {
            this.ofertas = ofertas
      })
      .catch((param: any) => {
      })  
  }
}
