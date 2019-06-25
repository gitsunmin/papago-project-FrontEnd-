import { Component } from '@angular/core';
import { CommonService } from '../common/common.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
// ko	한국어
// en	영어
// ja	일본어
// zh-CN	중국어 간체
// zh-TW	중국어 번체
// vi	베트남어
// id	인도네시아어
// th	태국어
// de	독일어
// ru	러시아어
// es	스페인어
// it	이탈리아어
// fr	프랑스어
export class Tab1Page {
  source:string ='';
  target:string ='';
  text:string = ''; 
  resDiv:string ='';
  langCodeList = ['ko','en','ja','zh-CN','zh-TW','vi','id','th','de','ru','es','it','fr'];

  constructor(private _commonservice:CommonService,
    private _router:Router) {}

  doTranslation(){
    if(!this.source){
      alert("source를 입력 해 주세요 .");
      return ;
    }
    if(!this.target){
      alert("target을 입력 해 주세요.");
      return ; 
    }
    if(!this.text){
      alert("text를 입력 해 주세요 . ");
      return ; 
    }
    this._commonservice.doTranslation(this.source,this.target,this.text).subscribe(res=>{
      var response = JSON.parse(res);
      this.resDiv = response["TH_RESPONSE"];
    })
  }

  goHome(){
    this._router.navigateByUrl('/');
  }

}
