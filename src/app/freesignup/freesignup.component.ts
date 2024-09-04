import { Component } from '@angular/core';

@Component({
  selector: 'app-freesignup',
  templateUrl: './freesignup.component.html',
  styleUrls: ['./freesignup.component.css']
})
export class FreesignupComponent {
  onLogin() {
    throw new Error('Method not implemented.');
    }
    
      user = {
        username:'',
        email:'',
        password: '',
      };
      registratationsform: any;
      formbuild: any;
    
      onSubmit() {
        console.log(this.user);
        // Add your signup logic here
      }
}
