import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagedetails',
  templateUrl: './pagedetails.component.html',
  styleUrls: ['./pagedetails.component.css']
})
export class PagedetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  pageid: number;
  private sub: any;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.pageid = +params['pageid']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
