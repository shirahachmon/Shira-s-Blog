
----------------------------------------------------------
Font awsome:
----------------------------------------------------------

There are two options to add some icon into your page, the first is just to write in the html file:
    <i class="fa fa-arrow-left"></i>
And the second:
    <fa-icon [icon]="faApplePay"></fa-icon> in the html file
    And in the ts file: 
    1. Adding import: 
import {faApplePay } from '@fortawesome/free-brands-svg-icons';
And below the ngoninit: faApplePay=faApplePay;

Question: Why to use the second option? It is more complex and slower option......? So, the answer is that wih this option you can add more icons to your angular app, from what i tried.. 

    <i class="fa fa-sort-down"></i>
    <i class="fa fa-user"></i>
    <i class="fa fa-lock"></i>  
    <i class="fa fa-envelope"></i>  
    <i class="fa fa-arrow-left"></i>

    <fa-icon [icon]="faCoffee"></fa-icon>
    <fa-icon [icon]="faAws"></fa-icon>
    <fa-icon [icon]="faYoutube"></fa-icon>
    <fa-icon [icon]="faApplePay"></fa-icon>
    <fa-icon [icon]="faCcApplePay"></fa-icon>
    <fa-icon [icon]="faAddressCard"></fa-icon>
    <fa-icon [icon]="fa9"></fa-icon>
    
    in ts:
        import { faCoffee, faAddressCard, fa9} from '@fortawesome/free-solid-svg-icons';
        import { faAws, faYoutube,faApplePay,faCcApplePay } from '@fortawesome/free-brands-svg-icons';

        faCoffee = faCoffee;
        faAws = faAws;
        faYoutube = faYoutube;
        faApplePay=faApplePay;
        faCcApplePay=faCcApplePay;
        faAddressCard=faAddressCard;
        fa9=fa9;

----------------------------------------------------------

----------------------------------------------------------
