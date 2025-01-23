import { NgModule } from "@angular/core";
import { AddressPipe } from "./address.pipe";
import { PhonePipe } from "./phone.pipe";

const declarationsExports = [
  PhonePipe,
  AddressPipe,
];

@NgModule({
  declarations: declarationsExports,
  exports: declarationsExports,
})
export class PipesModule {}
