import { HttpClient } from '@angular/common/http';
import { HtmlParser } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Subscription } from 'src/models/subscription';

@Injectable({
    providedIn: 'root'
})

export class SubscriptionService {
    constructor(private httpClient: HttpClient) {}

    private url = 'Subscriptions'

    // Post Request to create a subscription
    public createSubscription(subscription: Subscription) {
        return this.httpClient.post(`${environment.apiUrl}/${this.url}`, subscription)
    }
}