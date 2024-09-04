import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  constructor(private rote:Router) { }

  ngOnInit(): void {
  }
  onclick(){
  this.rote.navigateByUrl('home')
  }

}
