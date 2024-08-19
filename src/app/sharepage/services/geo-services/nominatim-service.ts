import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NominatimService {

    constructor(private http: HttpClient) { }

    public getCountry(lat: number, lng: number): Promise<string> {
        const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;
        return this.http.get<any>(url).toPromise().then(response => {
            return response.address && response.address.country ? response.address.country : null;
        });
    }
}
