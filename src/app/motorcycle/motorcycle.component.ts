import { Component, OnInit } from '@angular/core';
import { Motorcycle } from 'src/models/motorcycle';
import { MotorcycleService } from '../services/motorcycle.service';

@Component({
  selector: 'app-motorcycle',
  templateUrl: './motorcycle.component.html',
  styleUrls: ['./motorcycle.component.css']
})
export class MotorcycleComponent implements OnInit {
  title = 'Motorcycles'; 
  
  motorcycleToEdit?: Motorcycle;
  motorcycles : Motorcycle[] = [];
   
  constructor(private motorcycleService : MotorcycleService) { }

  ngOnInit(): void {    
    this.motorcycleService.getAllMotorcycles().subscribe((result : Motorcycle[]) => (this.motorcycles = result));
  }

  initNewMotorcycle()
  {
    this.motorcycleToEdit = new Motorcycle();
  }

  editMotorcycle(motorcycle: Motorcycle)
  {
    this.motorcycleToEdit = motorcycle;
  }

  updateMotorcycleList(motorcycles: Motorcycle[])
  {
    this.motorcycles = motorcycles;
  }
}
