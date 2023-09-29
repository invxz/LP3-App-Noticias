import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tecno-detalhe',
  templateUrl: './tecno-detalhe.page.html',
  styleUrls: ['./tecno-detalhe.page.scss'],
})
export class TecnoDetalhePage implements OnInit {
  tecno:any;
  constructor(private route: ActivatedRoute, private router: Router) {

   }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const getNav = this.router.getCurrentNavigation();
      if (getNav?.extras.state){
        this.tecno = getNav.extras.state['paramTecno'];
      }
    });
  }

}
