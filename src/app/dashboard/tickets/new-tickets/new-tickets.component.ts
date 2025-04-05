import { AfterViewInit, Component, ElementRef, ViewChild, output, viewChild } from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-tickets',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-tickets.component.html',
  styleUrl: './new-tickets.component.css'
})
export class NewTicketsComponent implements AfterViewInit{
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  // @Output() add = new EventEmitter<{title:string, text:string}>();
  add = output<{title:string, text:string}>(); 

  ngOnInit(){
    console.log('oninit');
    console.log(this.form?.nativeElement);
  }
  ngAfterViewInit(){
      console.log('after view init');
      console.log(this.form?.nativeElement);
  }

  onSubmit(title:string, ticketText: string) {
    // console.dir(titleElement);
    // const enteredTitle = titleElement.value;
    // console.log('Entered title: ' + enteredTitle);
    // console.log(title);
    // console.log(ticketText);
    this.add.emit({title: title, text:ticketText});
    this.form?.nativeElement.reset();
  }

}
