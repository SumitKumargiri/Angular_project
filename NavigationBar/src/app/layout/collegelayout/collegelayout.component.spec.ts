import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegelayoutComponent } from './collegelayout.component';

describe('CollegelayoutComponent', () => {
  let component: CollegelayoutComponent;
  let fixture: ComponentFixture<CollegelayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollegelayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollegelayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
