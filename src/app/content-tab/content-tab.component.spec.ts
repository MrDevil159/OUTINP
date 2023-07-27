import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTabComponent } from './content-tab.component';

describe('ContentTabComponent', () => {
  let component: ContentTabComponent;
  let fixture: ComponentFixture<ContentTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentTabComponent]
    });
    fixture = TestBed.createComponent(ContentTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
