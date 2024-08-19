import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GeoIPService {

    constructor(private http: HttpClient) { }

    public getCountry(): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                this.http.get('https://ipinfo.io/json?token=c8c22af7f1b14b').subscribe((ipResponse: any) => {
                    if (ipResponse) {
                        resolve(ipResponse.country);
                    }
                    else {
                        reject('cant retrieve geo location from IP');
                    }
                });
            } catch (error) {
                reject(error)
            }

        });
    }
}
