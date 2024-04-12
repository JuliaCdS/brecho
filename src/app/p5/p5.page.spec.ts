import { ComponentFixture, TestBed } from '@angular/core/testing';
import { P5Page } from './p5.page';

describe('P5Page', () => {
  let component: P5Page;
  let fixture: ComponentFixture<P5Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(P5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
