import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusMappingService {

  private statusMapping: { [key: string]: { icon: string, class: string } } = {
    'confirmé': { icon: 'check_circle', class: 'confirmed' },
    'a organiser': { icon: 'event', class: 'to-organize' },
    'annulé': { icon: 'cancel', class: 'canceled' },
    'recherche de place': { icon: 'hourglass_empty', class: 'pending' }
  };

  getStatusInfo(status: string) {
    if (!status) return this.statusMapping['recherche de place'];
    const normalizedStatus = status.trim().toLowerCase();
    return this.statusMapping[normalizedStatus] || this.statusMapping['recherche de place'];
  }
}
