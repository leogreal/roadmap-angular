import { NgModule } from "@angular/core";
import { PhonePipe } from "./phone.pipe";

const declarationsExports = [
  PhonePipe,
];

@NgModule({
  declarations: declarationsExports,
  exports: declarationsExports,
})
export class PipesModule {}
