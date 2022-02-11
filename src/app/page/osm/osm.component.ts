import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import * as L from 'Leaflet';

@Component({
  selector: 'app-osm',
  templateUrl: './osm.component.html',
  styleUrls: ['./osm.component.css']
})
export class OsmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
