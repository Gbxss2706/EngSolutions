import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:OrderDetailsService, private scroller: ViewportScroller, private router: Router) { }
  teamData:any;
  ngOnInit(): void {
    this.teamData = this.service.foodDetails;
    this.router.navigate(["/"]);
  }

  goDown2() {
    
    document.getElementById("menu")?.scrollIntoView({behavior: "smooth",
    block: "start",
    inline: "nearest"})
  }

 
}
