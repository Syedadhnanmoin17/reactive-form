import { R3DelegatedFnOrClassMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  regForm = this.fb.group({
    uname: ['',Validators.required],
    uemail: ['',Validators.required],
    ubio: ['',Validators.required],
    udomain: ['',Validators.required]
  })
  
  ngOnInit(): void {
  }

  val! :any
  onSubmit(){
    console.log(this.regForm.value);
    this.val=this.regForm.value;
  }
}
