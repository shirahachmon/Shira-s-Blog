Hi everyone, and especially hi future me:)
Some explanation about this code.. 

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

----------------------------------------------------------

----------------------------------------------------------
