import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, NgZorroAntdModule],
})
export class MainModule {}
