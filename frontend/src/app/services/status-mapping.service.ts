import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusMappingService {

  statusMapping: { [key: string]: { text: string, icon: string, class: string } } = {
    'confirmed': { text: 'Confirmé', icon: 'check_circle', class: 'confirmed' },
    'pending': { text: 'À organiser', icon: 'event', class: 'to-organize' },
    'canceled': { text: 'Annulé', icon: 'cancel', class: 'canceled' },
    'searching': { text: 'En recherche de place', icon: 'hourglass_empty', class: 'pending' }
  };

  getStatusInfo(status: string) {
    return this.statusMapping[status] || this.statusMapping['searching'];
  }
}
