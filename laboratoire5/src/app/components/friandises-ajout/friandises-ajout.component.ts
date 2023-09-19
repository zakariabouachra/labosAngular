import { Component, OnInit } from '@angular/core';
import { Friandise } from 'src/app/models/friandise.model';
import { FriandisesService } from 'src/app/services/friandises.service';
import{Router} from '@angular/router'

@Component({
  selector: 'app-friandises-ajout',
  templateUrl: './friandises-ajout.component.html',
  styleUrls: ['./friandises-ajout.component.css']
})
export class FriandisesAjoutComponent implements OnInit {
  ngOnInit(): void {}

  friandise:Friandise={
    brand : '',
    cie:'',
    price:'',
  }
  constructor(private FriandiseService : FriandisesService,
    private router:Router) { }

  saveFriandise(): void {
    const data = {
      brand : this.friandise.brand,
      cie : this.friandise.cie,
      price:this.friandise.price,

    };

    this.FriandiseService.postFrian(data).subscribe({
      next: () => console.log("ajout fait"),
      error:(e) => console.error(e),
      complete:() => this.router.navigate(['/friandises'])
    })
  }

}
