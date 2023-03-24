import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const nav = document.querySelector('nav');
    const companyTitle = document.getElementById('companyTitle'); // select the header element
    var height : number = +document.getElementById("banner")!.offsetHeight;
    console.log ( window.scrollY)
    window.addEventListener('scroll', () => { // add a scroll event listener to the window
      if (window.scrollY > height-50) { // check if the user has scrolled past 300px
        nav!.style.backgroundColor = 'var(--primary-color)'; // set the background color of the header to red
      } else {
        nav!.style.backgroundColor = 'transparent';
        companyTitle!.style.color = 'white' // set the background color of the header to transparent
      }
    });
  }

}
