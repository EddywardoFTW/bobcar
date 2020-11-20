import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../include/car'

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  @Input() rentalType: string | undefined;

  @Input() price: number | undefined;

  @Input() availability: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
