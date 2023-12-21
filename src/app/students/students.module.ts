import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsPageComponent } from './students-page/students-page.component';
import { AnotherComponent } from './another/another.component';
import { RoundedDirective } from './rounded.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StudentsPageComponent, AnotherComponent, RoundedDirective],
  imports: [CommonModule, FormsModule],
  exports: [StudentsPageComponent],
})
export class StudentsModule {}
