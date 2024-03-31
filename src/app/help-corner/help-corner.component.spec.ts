import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpCornerComponent } from './help-corner.component';

describe('HelpCornerComponent', () => {
  let component: HelpCornerComponent;
  let fixture: ComponentFixture<HelpCornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpCornerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelpCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
