import { AfterViewInit, Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


@Component({
  selector: 'app-home',
  imports: [RouterLink , ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit{
  private readonly activatedRoute = inject(ActivatedRoute)
  ngAfterViewInit(): void {
    this.routerJump()
    gsap.registerPlugin(ScrollTrigger)
  }


routerJump():void{
    this.activatedRoute.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
}

}