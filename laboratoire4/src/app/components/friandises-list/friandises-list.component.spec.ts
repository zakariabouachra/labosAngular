import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriandisesListComponent } from './friandises-list.component';

describe('FriandisesListComponent', () => {
  let component: FriandisesListComponent;
  let fixture: ComponentFixture<FriandisesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriandisesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriandisesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
