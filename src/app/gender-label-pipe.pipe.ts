import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
name: 'genderLabelPipe'
})
export class GenderLabelPipePipe implements PipeTransform {
transform(name: string, gender: any): string {
if(gender == 0){
return 'Mr. '+name;
}
return 'Miss. '+name;
}}