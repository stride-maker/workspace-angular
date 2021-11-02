import { ContentChild, ElementRef, ViewChild } from '@angular/core';
import { 
  AfterContentChecked, 
  AfterContentInit, 
  AfterViewChecked, 
  AfterViewInit, 
  Component, 
  DoCheck, 
  Input, 
  OnChanges, 
  OnDestroy, 
  OnInit 
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy {
  // @Input() element: {type: string, name: string, content: string};
  @Input('srvElement') element: {type: string, name: string, content: string};
  @ViewChild('heading', { static:true }) header: ElementRef;
  @ContentChild('contentParagraph', { static:true }) paragraph: ElementRef;
  
  constructor() { 
    console.log("constructor called!")
  }

  ngOnChanges() {
    console.log("ngOnChanges called!")
  }

  ngOnInit(): void {
    console.log("ngOnInit called!")
    console.log("ngOnInit Text Content: " + this.header.nativeElement.textContent)
    console.log("ngOnInit Text Content of paragraph: " + this.paragraph.nativeElement.textContent)
  }

  ngDoCheck() {
    console.log("ngDoCheck called!")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called!")
    console.log("ngAfterContentInit Text Content of paragraph: " + this.paragraph.nativeElement.textContent)
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called!")
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called");
    console.log("ngAfterViewInit Text Content: " + this.header.nativeElement.textContent)
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called!");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called!");
  }
}
