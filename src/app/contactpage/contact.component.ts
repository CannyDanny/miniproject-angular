import { Component } from '@angular/core';
import { Contactinfo } from './contact-interface';


@Component({
  selector: 'contact',
  templateUrl: './contact.component.html'

})

export class ContactComponent {
  model = new Contactinfo('', '', '', '', '');
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
  active = true;
}
