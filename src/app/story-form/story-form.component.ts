import { Component } from '@angular/core';
import { StoryService } from '../story.service';
import { Story } from '../story.model';

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html'
})
export class StoryFormComponent {
  storyName = '';
  storyPoints = 0;

  constructor(private storyService: StoryService) {}

  addStory() {
    const newStory: Story = { name: this.storyName, points: this.storyPoints };
    this.storyService.addStory(newStory);
    this.storyName = '';
    this.storyPoints = 0;
  }
}

