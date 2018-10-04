import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer';
import { DeveloperService } from 'src/app/developer.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
  devs: Developer[];

  constructor(private developerService:DeveloperService) {
   
  }

  getDevelopers(): void {
    this.developerService.getAllDevelopers().subscribe(response => this.devs = response);
  }

  ngOnInit() {
    this.getDevelopers();
  }

}
