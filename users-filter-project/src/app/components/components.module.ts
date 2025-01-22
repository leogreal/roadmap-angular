import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { UserFiltersComponent } from "./user-filters/user-filters.component";
import { UserListComponent } from "./user-list/user-list.component";
import { PipesModule } from "../pipes/pipes.module";

const declarationsExports = [
  UserDetailsComponent,
  UserFiltersComponent,
  UserListComponent,
]

@NgModule({
  declarations: declarationsExports,
  imports: [AngularMaterialModule, FormsModule, PipesModule],
  exports: declarationsExports,
})
export class ComponentsModule {}
