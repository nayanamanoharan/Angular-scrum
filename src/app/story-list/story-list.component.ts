import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';
import { Story } from '../story.model';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html'
})
export class StoryListComponent implements OnInit {
  stories: Story[] = [];

  constructor(private storyService: StoryService) {}

  ngOnInit() {
    this.stories = this.storyService.getStories();
  }
}

