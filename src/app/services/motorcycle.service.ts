import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MotorcycleReceived } from 'src/models/responses/motorcycleReceived';

@Injectable({
    providedIn: 'root'
})

export class MotorcycleService {
    
    constructor(private httpClient: HttpClient) {}

    private url = 'Motorcycles';

    // Get All Request
    public getAllMotorcycles() : Observable<MotorcycleReceived[]> {
        return this.httpClient.get<MotorcycleReceived[]>(`${environment.apiUrl}/${this.url}`);
    }
}