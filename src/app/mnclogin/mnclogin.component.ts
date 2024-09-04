import { Component } from '@angular/core';

@Component({
  selector: 'app-mnclogin',
  templateUrl: './mnclogin.component.html',
  styleUrls: ['./mnclogin.component.css']
})
export class MncloginComponent {
  onLogin() {
    throw new Error('Method not implemented.');
    }
    
      user = {
        // mncname: '',
        username:'',
        password: '',
        mnccode: ''
      };
      registratationsform: any;
      formbuild: any;
    
      onSubmit() {
        console.log(this.user);
        // Add your signup logic here
      }
}
