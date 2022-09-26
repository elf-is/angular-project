import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() buttonSelected = new EventEmitter<string>();
  displayed = false;
  dropdownItems = [
    {name: 'Save Data', link: '/save'},
    {name: 'Fetch Data', link: '/fetch'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleDisplay(): void {
    this.displayed = !this.displayed;
  }

  onSelect(selected: string): void {
    this.buttonSelected.emit(selected);
  }
}
