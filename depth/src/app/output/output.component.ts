import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../home/home.component';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
  @Output('panelClosed') panelClosed = new EventEmitter<boolean>();
  @Output() changeName = new EventEmitter<string>();
  @Output() user = new EventEmitter<User>();
  handlePanelState() {
    this.panelClosed.emit(false);
    this.changeName.emit("Anil");
    this.user.emit({
      "name" : "pallavi",
      "education" : "B.ED",
    })
  }
}
