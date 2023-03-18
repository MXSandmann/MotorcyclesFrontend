import { Component } from '@angular/core';
import { Subscription } from 'src/models/subscription';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent {

  constructor(private subscriptionService: SubscriptionService) {}

  subscription?: Subscription;
  displaySubscribeForm = false;
  subscribeButtonLabel = '';

  onSubmit(subscription: Subscription) {
    // Check name
    if (!subscription.userName
       || subscription.userName.trim().length === 0) {
      alert('Please enter your name')
      return;
    }

    // Validate user email
    if (!this.isValidEmail(subscription.userEmail)) {
      alert('Please enter a valid email address')
      return;
    }    

    this.subscriptionService.createSubscription(this.subscription).subscribe(response => {
      console.log(`Sent a subscription to api: ${JSON.stringify(this.subscription)}`)
    });
    this.displaySubscribeForm = false;
    alert('Your email address was successfully added and you will be notified!');    
  }

  private isValidEmail(email: string): boolean {
    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  onSubscribeButtonClick() {
    this.displaySubscribeForm = !this.displaySubscribeForm;
    this.subscription = new Subscription();
  }
  getSubscribeButtonLabel() {
    return this.subscribeButtonLabel = this.displaySubscribeForm ? 'Hide subscription form' : 'I want to subscribe!';
  }

}
