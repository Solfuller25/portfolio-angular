import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
/*
  contactForm = document.querySelector('#contact-form');
  submitBtn = document.querySelector('#sendEmail');
  nameInput = document.querySelector('#user_name');
  emailInput = document.querySelector('#user_email');
  messageInput = document.querySelector('#message');*/

  sendEmailButton: string = 'Send';

  // Get data from emailJS
  publicKey = '-zUotUEnavSQ_mI4f';
  serviceID = 'service_29o9ode';
  templateID = 'template_e4fluwd';


  //, { publicKey: this.publicKey }
  sendEmail(e: Event) {

    console.log("Sending email");
    console.log(e.target as HTMLFormElement);

    this.sendEmailButton = 'Sending...';

    // Initialize email JS with public key
    emailjs.init(this.publicKey);

    // Send the email
    emailjs.sendForm(this.serviceID, this.templateID, e.target as HTMLFormElement, { publicKey: this.publicKey })
      .then(() => {
        console.log('SUCCESS');
        this.sendEmailButton = 'Message Sent';
      }, (error) => {
        this.sendEmailButton = 'Message Failed';
        console.log('FAILED...', error);
      });
  }

  ngOnInit(): void { 
  }  
}
