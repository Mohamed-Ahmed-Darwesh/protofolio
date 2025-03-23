import { isPlatformBrowser, NgIf } from '@angular/common';
import { AfterViewInit, Component, inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { gsap } from 'gsap';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
@Component({
  selector: 'app-home',
  imports: [RouterLink,OverlayBadgeModule,BadgeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit{
  private readonly activatedRoute = inject(ActivatedRoute)
  private readonly pLATFORM_ID = inject(PLATFORM_ID)

  ngAfterViewInit(): void {
    this.routerJump()
    if(isPlatformBrowser(this.pLATFORM_ID)){
      gsap.to(".main-his-box:nth-child(odd)" , {
        x: '50vw',
        duration:1,
        opacity:1,
        scrollTrigger:{
          trigger:".box1",
          start:"top 70%"
        }
    })
    gsap.to(".main-his-box:nth-child(even)" , {
      x: '-50vw',
      duration:1,
      opacity:1,
      scrollTrigger:{
        trigger:".box2",
        start:"top 70%"
      }
  })
    }

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