import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  @Input() items: { name: string; link: string }[] = [];
  displayed = false;

  constructor() {}

  ngOnInit(): void {}

  toggleDisplay(): void {
    this.displayed = !this.displayed;
  }
}
