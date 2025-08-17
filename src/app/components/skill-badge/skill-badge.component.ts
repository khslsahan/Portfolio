import { Component, Input } from '@angular/core';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-skill-badge',
  templateUrl: './skill-badge.component.html',
  styleUrls: ['./skill-badge.component.scss']
})
export class SkillBadgeComponent {
  @Input() skill!: Skill;
}
