import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Motorcycle } from 'src/models/motorcycle';

@Injectable({
    providedIn: 'root'
})

export class MotorcycleService {
    
    constructor(private httpClient: HttpClient) {}

    private url = 'Motorcycles';

    // Get All Request
    public getAllMotorcycles() : Observable<Motorcycle[]> {
        return this.httpClient.get<Motorcycle[]>(`${environment.apiUrl}/${this.url}`);
    }

    // Put Request to update
    public updateMotorcycle(motorcycle: Motorcycle) : Observable<Motorcycle[]> {
        return this.httpClient.put<Motorcycle[]>(`${environment.apiUrl}/${this.url}`, motorcycle);
    }

    // Post Request to create
    public createMotorcycle(motorcycle: Motorcycle) : Observable<Motorcycle[]> {        
        return this.httpClient.post<Motorcycle[]>(`${environment.apiUrl}/${this.url}`, motorcycle);
    }

    // Delete Request to remove one
    public deleteMotorcycle(motorcycle: Motorcycle) : Observable<Motorcycle[]> {
        return this.httpClient.delete<Motorcycle[]>(`${environment.apiUrl}/${this.url}/${motorcycle.id}`);
    }
}