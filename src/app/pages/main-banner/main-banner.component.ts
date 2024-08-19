import { Component, Input, OnInit } from '@angular/core';
import { HomeContentModel } from '../home/models/home-content.model';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.css']
})
export class MainBannerComponent implements OnInit {

  @Input() homeContent!: HomeContentModel;
  public homeTitle!: string;
  public subTitle!: string;

  constructor() { }

  ngOnInit(): void {
    this.internalInit();
  }

  public goToWhoAreWe(): void {
    document.getElementById("quienesSomos")?.scrollIntoView({behavior: "smooth",
    block: "start",
    inline: "nearest"})
  }

  public goToServices(): void {
    document.getElementById("nuestrosServicios")?.scrollIntoView({behavior: "smooth",
    block: "start",
    inline: "nearest"})
  }

  private internalInit(): void{
    const country = window.location.host.split(".")[0];
    this.getHomeTitle(country);
  }

  private getHomeTitle(country: string): void {
    const homeTitle = this.homeContent.title;
    if (this.homeContent && homeTitle) {
      const foundTitle = homeTitle.find(title => title.countries.includes(country));
      this.homeTitle = foundTitle ? foundTitle.mainText : homeTitle[0].mainText;
      this.subTitle = foundTitle ? foundTitle.subText : homeTitle[0].subText
    }
  }
  
}
