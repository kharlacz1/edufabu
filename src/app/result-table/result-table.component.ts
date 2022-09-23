import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Artifact} from '../Interfaces/artifact';
import {ArtifactService} from '../../services/artifact.service';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss']
})
export class ResultTableComponent implements OnInit {

  displayedColumns: string[] = [
    'name',
    'img',
    'author',
   /* 'desc'
    'reference' */
  ];

  dataSource: MatTableDataSource<Artifact> = new MatTableDataSource<Artifact>();

  constructor(
    private artifactService: ArtifactService
  ) { }

  ngOnInit() {
    console.log('this.artifactService.data:')
    console.log(this.artifactService.data)
    this.dataSource.data = this.artifactService.data;
  }

  public concateInnerHTML(path: string): string | null {
    if(path){
      let front = "<img src='./assets/img/";
      let result = front + path + ".jpg'>";
      console.log('result:')
      console.log(result)
      return result;
    }
    return null;
  }

}
