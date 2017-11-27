/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApenasListarComponent } from './apenas-listar.component';

describe('ApenasListarComponent', () => {
  let component: ApenasListarComponent;
  let fixture: ComponentFixture<ApenasListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApenasListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApenasListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
