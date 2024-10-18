import { Injectable } from '@angular/core';
import { Story } from './story.model';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private stories: Story[] = [];

  addStory(story: Story) {
    if (!this.stories.find(s => s.name === story.name)) {
      this.stories.push(story);
    }
  }

  getStories(): Story[] {
    return this.stories;
  }

  clearStories() {
    this.stories = [];
  }

  autoSelectStories(capacity: number): Story[] {
    let selectedStories: Story[] = [];
    let totalPoints = 0;

    for (let story of this.stories) {
      if (totalPoints + story.points <= capacity) {
        selectedStories.push(story);
        totalPoints += story.points;
      }
    }

    return selectedStories;
  }
}
