import { ComponentFixture, TestBed } from '@angular/core/testing';
import { P3Page } from './p3.page';

describe('P3Page', () => {
  let component: P3Page;
  let fixture: ComponentFixture<P3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(P3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
