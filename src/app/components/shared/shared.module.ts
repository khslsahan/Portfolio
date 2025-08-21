import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillBadgeComponent } from '../skill-badge/skill-badge.component';
import { ProjectCardComponent } from '../project-card/project-card.component';

@NgModule({
  declarations: [
    SkillBadgeComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SkillBadgeComponent,
    ProjectCardComponent
  ]
})
export class SharedModule { }
