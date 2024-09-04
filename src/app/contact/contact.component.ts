import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private path:Router)
  {

  }
  
  ngOnInit():void{ 
  }
  onClick()
  {
    this.path.navigateByUrl('contact1')
  }
}
