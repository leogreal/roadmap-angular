import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

const importsExports = [
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatTableModule,
]

@NgModule({
  imports: importsExports,
  exports: importsExports,
})
export class AngularMaterialModule {}
