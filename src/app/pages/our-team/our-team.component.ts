import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {
  teamData:any;
  constructor(private service:OrderDetailsService) { 
    this.teamData = this.service.foodDetails;
  }

  ngOnInit(): void {
  }

}
