import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
title = 'Uni';
title1 = 'Knowledge'
title2 = 'University Of Geneva'
  constructor() { }

  ngOnInit() {
  }

}
