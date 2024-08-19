import { Component, HostListener, OnInit } from '@angular/core';
import { GeolocationService } from '../services/geo-services/geo-location-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private geolocationService: GeolocationService, private router: Router) { }

  ngOnInit(): void {
    this.internalInit();
  }

  private internalInit(): void {
    this.geolocationService.getCountry().then((country) => {
      this.router.navigate(['/' + country])
    });
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const nav = document.getElementById('main-navbar');
    const navBtn = document.getElementById('boton');
    const navBtn2 = document.getElementById('boton2');
    const navBtn3 = document.getElementById('boton3');
    const navBtn5 = document.getElementById('boton5');
    const llama = document.getElementById('llama');
    const logo_image = document.getElementById('id_logo_image');
    var height: number = +document.getElementById("banner")!.offsetHeight;

    window.addEventListener('scroll', () => {
      if (window.scrollY > height - 70) {
        nav!.style.backgroundColor = 'var(--primary-color)';
        navBtn!.style.color = 'var(--quaternary-color)';
        navBtn2!.style.color = 'var(--quaternary-color)';
        navBtn3!.style.color = 'var(--quaternary-color)';
        navBtn5!.style.color = 'var(--quaternary-color)';
        llama!.style.backgroundColor = 'var(--secondary-color)';
        llama!.style.color = 'var(--primary-color)';
        logo_image!.style.height = '8vh';
        logo_image!.style.width = '10vh';
      } else {
        nav!.style.backgroundColor = 'transparent';
        navBtn!.style.color = 'var(--quaternary-color)';
        navBtn2!.style.color = 'var(--quaternary-color)';
        navBtn3!.style.color = 'var(--quaternary-color)';
        navBtn5!.style.color = 'var(--quaternary-color)';
        llama!.style.backgroundColor = 'var(--primary-color)';
        llama!.style.color = 'var(--quaternary-color)';
        logo_image!.style.height = '12vh';
        logo_image!.style.width = '14vh';
      }
    });
  }

  public selectCountry(country: string): void {

  }

}
