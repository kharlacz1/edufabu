import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms'

interface DataSearchNode {
  name: string;
  children?: DataSearchNode[];
}

const TREE_DATA: DataSearchNode[] = [
  {
    name: 'Historia',
    children: [
      {name: 'XX wiek'},
      {name: 'XXI wiek'},
    ]
  }, {
    name: 'Historia sztuki',
    children: [
      {
        name: 'Malarstwo',
        children: [
          {name: 'ekspresjonizm'},
          {name: 'impresjonizm'},
        ]
      }, {
        name: 'Rzeźba',
        children: [
          {name: 'ekspresjonizm'},
          {name: 'impresjonizm'},
        ]
      },
    ]
  },
];


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  treeControl = new NestedTreeControl<DataSearchNode>(node => node.children);
  nodeDataSource = new MatTreeNestedDataSource<DataSearchNode>();
  searchForm: string | null | undefined = "";

  reactiveForm = this.formBuilder.group({
    searchFormControl: [''],
    treeFormControl: [''],
  });

  ngOnInit(): void {

  }

  constructor(private formBuilder: FormBuilder) {
    this.nodeDataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: DataSearchNode) => !!node.children && node.children.length > 0;

  searchThis() {
    let a = this.reactiveForm.get('searchFormControl')?.value;
    console.log('a')
    console.log(a)
    this.searchForm = a;
  }

 /* onFormSubmit(data: any): void {
    console.log('this.reactiveForm.get(searchFormControl:');
    let val = this.reactiveForm.get('searchFormControl')?.value;
    alert("Entered Email id : " + data.searchFormControl);
    console.log(val);
  } */

}

