import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() projectName: string = '';
  @Input() url: string = '';
  @Input() projectDescription: string = '';
  @Input() techEnvironment: string = '';
}
