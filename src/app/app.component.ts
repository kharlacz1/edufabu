import { Component } from '@angular/core';
import {DataService} from '../services/data.service';
import {MatTableDataSource} from "@angular/material/table";
import {Artifact} from "./Interfaces/artifact";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EduFab';
  zachetaDataSource: MatTableDataSource<any> = new MatTableDataSource<any>();


  constructor(private dataService: DataService) {
    this.dataService.getData()
      .subscribe((response) => {
        console.log('response');
        console.log('response');
        console.log('response:');
        console.log(response);
        this.zachetaDataSource.data.push(response);
        console.log(this.zachetaDataSource.data);
      });
  }

}
