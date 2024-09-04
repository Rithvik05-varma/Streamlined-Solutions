import { Component } from '@angular/core';

@Component({
  selector: 'app-startsignup',
  templateUrl: './startsignup.component.html',
  styleUrls: ['./startsignup.component.css']
})
export class StartsignupComponent {
  onLogin() {
    throw new Error('Method not implemented.');
    }
    
      user = {
        startupname: '',
        username:'',
        password: '',
        // startupcode: ''
      };
      registratationsform: any;
      formbuild: any;
    
      onSubmit() {
        console.log(this.user);
        // Add your signup logic here
      }
}
