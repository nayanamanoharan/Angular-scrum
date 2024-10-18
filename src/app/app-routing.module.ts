import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoryFormComponent } from './story-form/story-form.component';
import { StoryListComponent } from './story-list/story-list.component';
import { SprintPlannerComponent } from './sprint-planner/sprint-planner.component';

const routes: Routes = [
  { path: 'add-story', component: StoryFormComponent },
  { path: 'story-list', component: StoryListComponent },
  { path: 'sprint-planner', component: SprintPlannerComponent },
  { path: '', redirectTo: '/add-story', pathMatch: 'full' }, // Redirect to 'add-story' on load
  { path: '**', redirectTo: '/add-story' } // Redirect any unknown path to 'add-story'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

