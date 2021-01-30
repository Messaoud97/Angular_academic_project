import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForamteursComponent } from './foramteurs.component';

describe('ForamteursComponent', () => {
  let component: ForamteursComponent;
  let fixture: ComponentFixture<ForamteursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForamteursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForamteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
