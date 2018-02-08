import { NgModule } from '@angular/core';
import { TrimHtmlPipe } from './trim-html/trim-html';
@NgModule({
	declarations: [TrimHtmlPipe],
	imports: [],
	exports: [TrimHtmlPipe]
})
export class PipesModule {}
