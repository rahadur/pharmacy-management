import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const SHARD_MODULES = [FormsModule, ReactiveFormsModule];

@NgModule({
  imports: [...SHARD_MODULES],
  exports: [...SHARD_MODULES],
})
export class ShardModule {}
