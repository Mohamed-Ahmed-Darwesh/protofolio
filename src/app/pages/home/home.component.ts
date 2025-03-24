import { isPlatformBrowser, NgIf } from '@angular/common';
import { AfterViewInit, Component, inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ToastrService } from 'ngx-toastr';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
@Component({
  selector: 'app-home',
  imports: [RouterLink,OverlayBadgeModule,BadgeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  private readonly activatedRoute = inject(ActivatedRoute)
  private readonly pLATFORM_ID = inject(PLATFORM_ID)
  private readonly toastrService = inject(ToastrService)
  ngAfterViewInit(): void {
    this.routerJump()
    gsap.registerPlugin(ScrollTrigger);
    if(isPlatformBrowser(this.pLATFORM_ID)){
        gsap.to(".box1" , {
        x: '50vw',
        duration:1,
        opacity:1,
        scrollTrigger:{
          trigger:".box1",
          start:"top 70%"
        }
    })
    gsap.to(".box3" , {
      x: '50vw',
      duration:1,
      opacity:1,
      scrollTrigger:{
        trigger:".box3",
        start:"top 70%"
      }
  })
  gsap.to(".box5" , {
    x: '50vw',
    duration:1,
    opacity:1,
    scrollTrigger:{
      trigger:".box5",
      start:"top 70%"
    }
})
gsap.to(".box7" , {
  x: '50vw',
  duration:1,
  opacity:1,
  scrollTrigger:{
    trigger:".box7",
    start:"top 70%"
  }
})
    gsap.to(".box2" , {
      x: '-50vw',
      duration:1,
      opacity:1,
      scrollTrigger:{
        trigger:".box2",
        start:"top 70%"
      }
  })
  gsap.to(".box4" , {
    x: '-50vw',
    duration:1,
    opacity:1,
    scrollTrigger:{
      trigger:".box4",
      start:"top 70%"
    }
})
gsap.to(".box6" , {
  x: '-50vw',
  duration:1,
  opacity:1,
  scrollTrigger:{
    trigger:".box6",
    start:"top 70%"
  }
  })
}}

  ngOnDestroy() {
    ScrollTrigger.getAll().forEach(st => st.kill());
  }
  copyEmail():void{
    navigator.clipboard.writeText("modyman989@gmail.com")
    this.toastrService.success("Email is copied to your clipboard")

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