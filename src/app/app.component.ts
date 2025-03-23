import { AfterViewInit, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ButtonModule } from 'primeng/button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  private readonly ToastrService = inject(ToastrService)
  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger)
  }

  title = 'Protofolio';
}
