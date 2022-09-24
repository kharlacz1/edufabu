import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-result-all',
  templateUrl: './result-all.component.html',
  styleUrls: ['./result-all.component.scss']
})
export class ResultAllComponent implements OnInit {

  @Input() searchCriteria : string = "";
  @Input() items: [] = [];
  dataItems: any[] = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'name',
  ];

  constructor(private allDataService: DataService) { }

  ngOnInit(): void {
    this.allDataService.getData().subscribe((data) => {
      this.dataItems.push(data);
      this.dataSource.data.push(data);
      console.log('data:');
      console.log(this.dataItems);
    });
  }

  searchThis(data: any) {
    // this.dataSource = this.newArray
    // console.log(data)
/*    if (data) {
      this.allDataService = this.allDataService.getData().filter(function (ele, i, array) {
        let arrayelement = ele.name.toLowerCase()
        return arrayelement.includes(data)
      })
    } else {
      console.log(this.allDataService.data)
    } */
  }


}
