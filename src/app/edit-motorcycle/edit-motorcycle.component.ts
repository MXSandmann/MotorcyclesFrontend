import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Motorcycle } from 'src/models/motorcycle';
import { MotorcycleService } from 'src/app/services/motorcycle.service';

@Component({
  selector: 'app-edit-motorcycle',
  templateUrl: './edit-motorcycle.component.html',
  styleUrls: ['./edit-motorcycle.component.css']
})
export class EditMotorcycleComponent implements OnInit {
  @Input() motorcycle?: Motorcycle;
  @Output() motorcyclesUpdated = new EventEmitter<Motorcycle[]>();

  constructor(private motorcycleService : MotorcycleService) {}

  ngOnInit(): void {
    
  }

  updateMotorcycle(motorcycle: Motorcycle)
  {
    this.motorcycleService.updateMotorcycle(motorcycle).subscribe((motorcycles: Motorcycle[]) => this.motorcyclesUpdated.emit(motorcycles));
  }

  createMotorcycle(motorcycle: Motorcycle)
  {
    console.log(`--> creaiting new model: ${JSON.stringify(motorcycle)}`)
    this.motorcycleService.createMotorcycle(motorcycle).subscribe((motorcycles: Motorcycle[]) => this.motorcyclesUpdated.emit(motorcycles));
  }

  deleteMotorcycle(motorcycle: Motorcycle)
  {
    this.motorcycleService.deleteMotorcycle(motorcycle).subscribe((motorcycles: Motorcycle[]) => this.motorcyclesUpdated.emit(motorcycles));
  }
}
