import { Component, OnInit } from '@angular/core';
import { DatasharingService } from './../../datasharing.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  Component1Data;
  constructor(private dataSharing:DatasharingService) {
    this.dataSharing.SharingData.subscribe((res: any) => {  
      this.Component1Data = res;  
    }) 
   }

  ngOnInit(): void {
  }
  onSubmit(data) {  
    this.dataSharing.SharingData.next(data.value);  
  }
}
