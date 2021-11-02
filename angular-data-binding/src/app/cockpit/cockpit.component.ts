import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  //newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput : HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
    // this.serverCreated.emit({
    //   serverName: this.newServerName,
    //   serverContent: this.newServerContent
    // });
  }

  onAddBlueprint(nameInput : HTMLInputElement) {
    // this.blueprintCreated.emit({
    //   serverName: this.newServerName,
    //   serverContent: this.newServerContent
    // });
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
