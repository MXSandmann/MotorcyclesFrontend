import { Component, OnInit } from '@angular/core';
import { MotorcycleReceived } from 'src/models/responses/motorcycleReceived';
import { MotorcycleService } from '../services/motorcycle.service';

@Component({
  selector: 'app-motorcycle',
  templateUrl: './motorcycle.component.html',
  styleUrls: ['./motorcycle.component.css']
})
export class MotorcycleComponent implements OnInit {
  motorcycleRecieved: MotorcycleReceived[] = [];
  title = 'Motorcycles';
  displayMotorcyclesOverview = false;
  buttonLabel = '';
   
  constructor(private motorcycleService : MotorcycleService) { }

  ngOnInit(): void {
    console.log('--> sending request on api to get all models')
    this.motorcycleService.getAllMotorcycles().subscribe((result : MotorcycleReceived[]) => (this.motorcycleRecieved = result));
  }

  onButtonClick()
  {
    this.displayMotorcyclesOverview = !this.displayMotorcyclesOverview;
  }

  getButtonLabel()
  {
    return this.buttonLabel = this.displayMotorcyclesOverview? 'Hide motorcycles overview' : 'Show motorcycles overview';
  }

}
