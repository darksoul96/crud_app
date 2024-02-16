import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { UserInterface } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'angularClient';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getDataFromService();

    console.log(this.dataService.getData());
  }

  getDataFromService(): void {
    this.dataService.getData()
    .subscribe({
      next: (data: UserInterface) => {
        console.log(data);
      },
      error: () => {
        console.log("error fetching data");
      }
    })
  }
}
