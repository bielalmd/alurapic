import { templateJitUrl } from "@angular/compiler";
import { Component, Input } from "@angular/core";

@Component({
    selector: 'ap-photo', // uma boa pratica é pre fixar os componentes que foram ser criados (ap-photo)
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {
    
    @Input() description = '';
    
    @Input() url = '' //imbaund propriets/ aceita receber valor da forma declarativa do componente
}