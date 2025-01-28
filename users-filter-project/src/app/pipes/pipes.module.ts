import { NgModule } from "@angular/core";
import { AddressPipe } from "./address.pipe";
import { DashIfEmptyPipe } from "./dash-if-empty.pipe";
import { PhonePipe } from "./phone.pipe";
import { StatusPipe } from "./status.pipe";

const declarationsExports = [
  PhonePipe,
  AddressPipe,
  StatusPipe,
  DashIfEmptyPipe,
];

@NgModule({
  declarations: declarationsExports,
  exports: declarationsExports,
})
export class PipesModule {}
