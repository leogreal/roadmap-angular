import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { UserDetailsComponent } from "./user-details/user-details.component";

@NgModule({
  declarations: [UserDetailsComponent],
  imports: [AngularMaterialModule],
  exports: [UserDetailsComponent],
})
export class ComponentsModule {}
