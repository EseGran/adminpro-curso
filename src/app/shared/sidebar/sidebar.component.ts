import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/shared/services/sidebar.service';

@Component({
  selector: 'admp-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ],
})
export class SidebarComponent implements OnInit {

  constructor(public sidebarService: SidebarService) { }

  ngOnInit(): void {
  }

}
