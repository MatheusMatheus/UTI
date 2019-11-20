import {Component, Input, OnInit} from '@angular/core';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-mensagens-erro',
  templateUrl: './mensagens-erro.component.html',
  styleUrls: ['./mensagens-erro.component.css']
})
export class MensagensErroComponent implements OnInit {

  @Input('model') ngModel: NgModel;

  constructor() { }

  ngOnInit() {
  }

}
