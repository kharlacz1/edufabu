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
    'id',
    'desc',
    'reference'
  ];

  dataSource: MatTableDataSource<Artifact> = new MatTableDataSource<Artifact>();

  constructor(
    private artifactService: ArtifactService
  ) { }

  ngOnInit() {
    this.dataSource.data = this.artifactService.data;
  }

  addItemToScenario(id: number) {

  }

  addNewTag(id: number) {

  }

}
