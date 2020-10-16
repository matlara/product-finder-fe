import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    @Input()
    search: string = "";

    @Input()
    products: any;

    constructor() { }

    ngOnInit() { }

    public isSearchPalindrome() {
        if(this.search.length > 2) {
            var re = /[\W_]/g;
            var lowRegStr = String(this.search).toLowerCase().replace(re, '');
            var reverseStr = lowRegStr.split('').reverse().join(''); 
            return reverseStr === lowRegStr;
        }
        else {
            return false;
        }
    }

}
