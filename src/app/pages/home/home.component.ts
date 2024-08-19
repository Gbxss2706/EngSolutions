import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import HomeContent from '../../content/home.json';
import { HomeContentModel } from './models/home-content.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public homeContent!: HomeContentModel;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.internalInit();
  }

  private internalInit(): void{
    this.router.navigate(["/"]);
    this.homeContent = HomeContent;
  }
}
