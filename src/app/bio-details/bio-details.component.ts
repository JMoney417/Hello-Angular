import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer';
import { ActivatedRoute } from '@angular/router';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-bio-details',
  templateUrl: './bio-details.component.html',
  styleUrls: ['./bio-details.component.css']
})
export class BioDetailsComponent implements OnInit {
  dev:Developer;
  constructor(private activatedRoute:ActivatedRoute, private developerService:DeveloperService) {
    this.dev = developerService.getDeveloperById(this.activatedRoute.snapshot.params['id']);
   }

  ngOnInit() {
  }

}
