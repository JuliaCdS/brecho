import { ComponentFixture, TestBed } from '@angular/core/testing';
import { P4Page } from './p4.page';

describe('P4Page', () => {
  let component: P4Page;
  let fixture: ComponentFixture<P4Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(P4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
