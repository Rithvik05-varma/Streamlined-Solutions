import { Component } from '@angular/core';

@Component({
  selector: 'app-freelogin',
  templateUrl: './freelogin.component.html',
  styleUrls: ['./freelogin.component.css']
})
export class FreeloginComponent {
  onLogin() {
    throw new Error('Method not implemented.');
    }
    
      user = {
        username:'',
        // email:'',
        password: '',
      };
      registratationsform: any;
      formbuild: any;
    
      onSubmit() {
        console.log(this.user);
        // Add your signup logic here
      }
}
