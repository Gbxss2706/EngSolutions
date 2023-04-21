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
    const nav = document.getElementById('main-navbar');
    const navBtn = document.getElementById('boton');
    const navBtn2 = document.getElementById('boton2');
    const navBtn3 = document.getElementById('boton3');
    const navBtn5 = document.getElementById('boton5');
    const llama = document.getElementById('llama'); 
    var height : number = +document.getElementById("banner")!.offsetHeight;

    window.addEventListener('scroll', () => { 
      if (window.scrollY > height-70) { 
        nav!.style.backgroundColor = 'var(--primary-color)'; 
        navBtn!.style.color = 'var(--quaternary-color)';
        navBtn2!.style.color = 'var(--quaternary-color)';
        navBtn3!.style.color = 'var(--quaternary-color)';
        navBtn5!.style.color = 'var(--quaternary-color)';
        llama!.style.backgroundColor = 'var(--secondary-color)';
        llama!.style.color = 'var(--primary-color)';
      } else {
        nav!.style.backgroundColor = 'transparent';
        navBtn!.style.color = 'var(--quaternary-color)';
        navBtn2!.style.color = 'var(--quaternary-color)';
        navBtn3!.style.color = 'var(--quaternary-color)';
        navBtn5!.style.color = 'var(--quaternary-color)';
        llama!.style.backgroundColor = 'var(--primary-color)';
        llama!.style.color = 'var(--quaternary-color)';
      }
    });
  }

}
