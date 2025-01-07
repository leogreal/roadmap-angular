import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";

const importsExports = [
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
]

@NgModule({
  imports: importsExports,
  exports: importsExports,
})
export class AngularMaterialModule {}
