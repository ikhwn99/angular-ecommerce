import { Component } from '@angular/core';
import { FacilityService } from '../../services/facility.service';
import { Facility } from '../../common/facility';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list-table.component.html',
  styleUrl: './facility-list.component.css'
})
export class FacilityListComponent {


  facilities: Facility[] = [];
  constructor(private facilityService: FacilityService){

  }

  ngOnInit(): void{
    this.listFacilities();

  }
  listFacilities() {
    this.facilityService.getFacilityList().subscribe(
      data =>{
        this.facilities = data;
      }
    )
  }

}
