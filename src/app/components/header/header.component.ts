import { Component, OnInit } from '@angular/core';
import { UiService } from "../../services/ui.service";
import { Subscription } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string;
  showAddTask: boolean;
  subscription: Subscription;
  private uiService: UiService;
  private router: Router;

  constructor(uiService: UiService, router: Router) {

    this.title = "Task Tracker";
    this.showAddTask = false;
    this.uiService = uiService;
    this.subscription = this.uiService.onToggle().subscribe( value => this.showAddTask = value );
    this.router = router;

  }

  ngOnInit(): void {
  }

  toggleAddTask() {
    
    this.uiService.toggleAddTask();

  }

  hasRoute(route: string): boolean {
    
    return this.router.url === route;
    
  }

}
