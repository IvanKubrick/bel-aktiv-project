import { Component } from '@angular/core';

import { License } from './license.model';

@Component({
  selector: 'app-licenses',
  templateUrl: './licenses.component.html',
  styleUrls: ['./licenses.component.scss']
})
export class LicensesComponent {
  public licenses: License[] = [
    {
      title: 'Аттестат соответствия',
      imgSrc: 'assets/img/certificate-1.jpg'
    },
    {
      title: 'Аттестат соответствия',
      imgSrc: 'assets/img/certificate-2.jpg'
    }
  ];
}
