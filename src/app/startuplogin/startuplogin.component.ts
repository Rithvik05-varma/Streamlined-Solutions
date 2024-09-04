import { Component } from '@angular/core';

@Component({
  selector: 'app-startuplogin',
  templateUrl: './startuplogin.component.html',
  styleUrls: ['./startuplogin.component.css']
})
export class StartuploginComponent {
  onLogin() {
    throw new Error('Method not implemented.');
    }
    
      user = {
        // startupname: '',
        username:'',
        password: '',
        startupcode: ''
      };
      registratationsform: any;
      formbuild: any;
    
      onSubmit() {
        console.log(this.user);
        // Add your signup logic here
      }
}
