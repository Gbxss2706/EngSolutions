import { Component, HostListener, OnInit } from '@angular/core';
import Cards from '../../content/eng-services.json'
import { ServiceCardModel } from './models/service-card.model';

@Component({
  selector: 'app-nuestros-servicios',
  templateUrl: './nuestros-servicios.component.html',
  styleUrls: ['./nuestros-servicios.component.css']
})
export class NuestrosServiciosComponent implements OnInit {

  serviceCards !: ServiceCardModel;
  public isScreenSmall: boolean = window.innerWidth < 1000;

  constructor() { }

  ngOnInit(): void {
    this.internalInit();
  }

  private internalInit(): void{
    this.serviceCards = Cards;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    this.isScreenSmall = window.innerWidth < 1000;
  }
}
