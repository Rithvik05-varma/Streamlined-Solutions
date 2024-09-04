import { Component } from '@angular/core';

@Component({
  selector: 'app-mncsingup',
  templateUrl: './mncsingup.component.html',
  styleUrls: ['./mncsingup.component.css']
})
export class MncsingupComponent {
  onLogin() {
    throw new Error('Method not implemented.');
    }
    
      user = {
        mncname: '',
        username:'',
        password: '',
        key: '',
        level:''
      };
      registratationsform: any;
      formbuild: any;
    
      onSubmit() {
        console.log(this.user);
        // Add your signup logic here
      }
}
