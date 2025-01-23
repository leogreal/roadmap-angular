import { NgModule } from "@angular/core";
import { AddressPipe } from "./address.pipe";
import { PhonePipe } from "./phone.pipe";
import { StatusPipe } from "./status.pipe";

const declarationsExports = [
  PhonePipe,
  AddressPipe,
  StatusPipe,
];

@NgModule({
  declarations: declarationsExports,
  exports: declarationsExports,
})
export class PipesModule {}
