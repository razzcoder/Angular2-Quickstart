import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
 <user></user>
  `,
})

export class AppComponent  { 
	name = 'Rajat Singh Bhadauria';
	email ='rajatsbhadauria@gmail.com' ;
	address = {
		street:'11/399, Vikas Nagar',
		city:'Lucknow',
		state:'Uttar Pradesh'
	}
}
