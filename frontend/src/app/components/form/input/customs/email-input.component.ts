import { Component, OnInit, } from "@angular/core";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";

import { InputComponent } from "../input.component";
import { InputErrorMessageComponent } from '../input-error-message.component';


import { BaseCustomComponent, provideControlContainer } from "./base";
import { PATTERNS } from "@/global/patterns.const";

import { ionMail } from "@ng-icons/ionicons";
import { IconComponent } from "@/components/icon.component";



@Component({
    selector: 'app-email-input',
    template: `
     <app-input
     autocomplete="email"
     [formControl]="control"
     placeholder="Correo electrónico">
     <app-icon [icon]="envelopeIcon" color="text" size="24px" strokeWidth="2rem" />
        @if(validateWithProp('required')) {
            <app-input-error-message>
                El correo electrónico es requerido.
            </app-input-error-message>
            }

            @if(validateWithProp('pattern')) {
            <app-input-error-message>
                El correo electrónico es inválido.
            </app-input-error-message>
            }

        

     </app-input>
    `,
    standalone: true,
    viewProviders: [provideControlContainer()],
    styles: `
    :host{
        display: contents;
    }
    `,
    imports: [
        ReactiveFormsModule,
        InputErrorMessageComponent,
        InputComponent,
        IconComponent
    ]
})
export class EmailInputComponent extends BaseCustomComponent implements OnInit {

    override control = new FormControl('', [Validators.required, Validators.pattern(PATTERNS.EMAIL)]);

    protected envelopeIcon = ionMail;

    ngOnInit(): void {
        this.controlOf?.addControl('email', this.control);
    }
}