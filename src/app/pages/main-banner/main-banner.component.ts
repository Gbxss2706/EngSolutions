import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.css']
})
export class MainBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToWhoAreWe() {
    document.getElementById("quienesSomos")?.scrollIntoView({behavior: "smooth",
    block: "start",
    inline: "nearest"})
  }

  goToServices(){
    document.getElementById("nuestrosServicios")?.scrollIntoView({behavior: "smooth",
    block: "start",
    inline: "nearest"})
  }
}
