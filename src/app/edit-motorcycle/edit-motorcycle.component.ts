import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Motorcycle } from 'src/models/motorcycle';
import { MotorcycleService } from 'src/app/services/motorcycle.service';
import { ModelType } from 'src/models/enums/model-type';

@Component({
  selector: 'app-edit-motorcycle',
  templateUrl: './edit-motorcycle.component.html',
  styleUrls: ['./edit-motorcycle.component.css']
})
export class EditMotorcycleComponent {
  @Input() motorcycle?: Motorcycle;
  @Output() motorcyclesUpdated = new EventEmitter<Motorcycle[]>();

  constructor(private motorcycleService : MotorcycleService) {}
  modelTypes = Object.values(ModelType);

  updateMotorcycle(motorcycle: Motorcycle) {
    if(!this.isModelValid(motorcycle))
      return;
    this.motorcycleService.updateMotorcycle(motorcycle).subscribe((motorcycles: Motorcycle[]) => this.motorcyclesUpdated.emit(motorcycles));
  }

  createMotorcycle(motorcycle: Motorcycle) {    
    if(!this.isModelValid(motorcycle))
      return;
    this.motorcycleService.createMotorcycle(motorcycle).subscribe((motorcycles: Motorcycle[]) => this.motorcyclesUpdated.emit(motorcycles));
  }

  deleteMotorcycle(motorcycle: Motorcycle) {
    this.motorcycleService.deleteMotorcycle(motorcycle).subscribe((motorcycles: Motorcycle[]) => this.motorcyclesUpdated.emit(motorcycles));
  }

  private isModelValid(motorcycle: Motorcycle) {
    // Check model name
    if (!this.isStringValid(motorcycle.modelName)) {
      alert('Model name is required');
      return false;
    }

    // Check company
    if (!this.isStringValid(motorcycle.company)) {
      alert('Company is required');
      return false;
    }

    // Check model type
    if (!this.isStringValid(motorcycle.modelType)) {
      alert('Model type is required');
      return false;
    }

    // Check engine power
    if (!this.isNumberValid(motorcycle.enginePower)) {
      alert('Engine power is required and has to be greater than 0');
      return false;
    }

    // Check price
    if (!this.isNumberValid(motorcycle.price)) {
      alert('Price is required and has to be greater than 0');
      return false;
    }
    return true;
  }

  private isStringValid(text: string) {    
    if (!text
      || text.trim().length === 0)     
     return false;   
   return true;
  }

  private isNumberValid(input: number) {
    if (!input 
      || input <= 0)
      return false;    
    return true;
  }
}
