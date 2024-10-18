import { Component } from '@angular/core';
import { StoryService } from '../story.service';
import { Story } from '../story.model';

@Component({
  selector: 'app-sprint-planner',
  templateUrl: './sprint-planner.component.html'
})
export class SprintPlannerComponent {
  sprintCapacity = 0;
  selectedStories: Story[] = [];

  constructor(private storyService: StoryService) {}

  autoSelectStories() {
    this.selectedStories = this.storyService.autoSelectStories(this.sprintCapacity);
  }

  clearStories() {
    this.storyService.clearStories();
    this.selectedStories = [];
  }
}

