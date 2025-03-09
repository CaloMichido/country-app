import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {debounceTime, Subject, Subscription} from 'rxjs';

@Component({
  selector: 'shared-search-box',
  standalone: false,
  templateUrl: './search-box.component.html',
  styles: ``,
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  ngOnDestroy() {
    console.log('SearchBoxComponent ngOnDestroy');
    this.debouncerSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.debouncerSubscription=this.debouncer.
    pipe(
      debounceTime(500),
    ).subscribe(debouncer => {
      this.onDebounce.emit(debouncer);
    })
  }


@Input() initialValue: string = '';

@Input()
public placeHolder: string="";

@Output()
public onValue= new EventEmitter<string>;

@Output()
public onDebounce= new EventEmitter<string>;

emitValue( Values: string):void {
  this.onValue.emit(Values);
}


onKeyPress ( searchTerm: string){
  this.debouncer.next(searchTerm);
}
}
