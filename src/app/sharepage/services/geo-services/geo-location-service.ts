import { Injectable } from '@angular/core';
import { NominatimService } from './nominatim-service';
import { GeoIPService } from './geo-ip-info-service';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(private nominatimService: NominatimService, private geoIPService: GeoIPService) { }

  public getCountry(): Promise<string> {
    const defaultCountry = 'CO';
    return new Promise((resolve, reject) => {
      this.getUserLocation().then((location) => {
        this.nominatimService.getCountry(location.lat, location.lng).then((country) => {
          country ? resolve(country) : resolve(defaultCountry)
        }).catch(() => {
          reject('Cant retrieve country from coords')
        });
      }).catch(() => {
        this.geoIPService.getCountry().then((country) => {
          country ? resolve(country) : resolve(defaultCountry)
        }).catch(() => {
          reject('Cant retrieve country from ip address');
        });
      });
    });
  }

  private getUserLocation(): Promise<{ lat: number, lng: number }> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        }, (error) => {
          reject(this.handleError(error));
        });
      } else {
        reject('Geolocation is not supported by this browser.');
      }
    });
  }

  private handleError(error: GeolocationPositionError): string {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        return 'User denied the request for Geolocation.';
      case error.POSITION_UNAVAILABLE:
        return 'Location information is unavailable.';
      case error.TIMEOUT:
        return 'The request to get user location timed out.';
      default:
        return 'An unknown error occurred.';
    }
  }
}
