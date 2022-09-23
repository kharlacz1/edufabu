import {Component, Input, OnInit} from '@angular/core';
import {ArtifactService} from '../../services/artifact.service';
import {Artifact} from '../Interfaces/artifact';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public itemLanguages = [
    'Python','TypeScript','C','C++','Java',
    'Go','JavaScript','PHP','Ruby','Swift','Kotlin'
  ]

  searchInput: string = 'p';
  searchText: string = 'Piramida';
  artifact: Artifact[] = [];

  constructor(private service: ArtifactService) {
    // this.artifact = new Artifact(0,"", "", "", "", "");
  }

  ngOnInit(): void {
  }

  search() {

  }

  addItemToScenario(id: number) {

  }

}
