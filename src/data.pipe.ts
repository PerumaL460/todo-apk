import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"append",
    pure : true,
    standalone : true
})

export class AppendPipe implements PipeTransform{
    transform( value :any , text: any){
        console.log(value + text);
        return value + text
    }
}