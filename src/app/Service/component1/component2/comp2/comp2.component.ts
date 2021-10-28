import { Component, OnInit } from '@angular/core';
import { DatasharingService } from './../../../datasharing.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  Component2Data
  constructor(private dataSharing:DatasharingService) {
    this.dataSharing.SharingData.subscribe((res: any) => {  
      this.Component2Data = res;  
    })  
   }

  ngOnInit(): void {
  }
  onSubmit(data) {  
    this.dataSharing.SharingData.next(data.value);  
  } 
}
