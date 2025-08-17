import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Angular Material Modules - Only essential ones for performance
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

// Components
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { SkillBadgeComponent } from './components/skill-badge/skill-badge.component';

// Services
import { ProjectService } from './services/project.service';
import { ThemeService } from './services/theme.service';
import { PerformanceService } from './services/performance.service';
import { AosOptimizerService } from './services/aos-optimizer.service';
import { ConsoleMonitorService } from './services/console-monitor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    AboutMeComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
    NavigationComponent,
    ProjectCardComponent,
    SkillBadgeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule
  ],
  providers: [
    ProjectService,
    ThemeService,
    PerformanceService,
    AosOptimizerService,
    ConsoleMonitorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
