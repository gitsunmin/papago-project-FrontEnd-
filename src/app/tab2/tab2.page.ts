import { Component } from '@angular/core';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  dataList:any = [];
  constructor(private _commonService:CommonService) {
    this.doDataList();
  }

  doDataList(){
    this._commonService.getList().subscribe(res=>{
      this.dataList = <any>res;
      console.log(this.dataList);
    })
  }
}
