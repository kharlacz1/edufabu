import { Pipe, PipeTransform } from '@angular/core';
import {Artifact} from '../app/Interfaces/artifact';

@Pipe({ name: 'searchByName' })
export class SearchByNamePipe implements PipeTransform {
  transform(artifacts: Artifact[], searchText: string) {
    return artifacts.filter(a=>a?.name.indexOf(searchText) !== -1);
      //artifact =&amp;gt; artifact.name.indexOf(searchText) !== -1);
  }
}
