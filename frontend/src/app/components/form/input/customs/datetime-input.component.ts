import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";

import { InputComponent } from "../input.component";
import { InputErrorMessageComponent } from '../input-error-message.component';

import { BaseCustomComponent, provideControlContainer } from "./base";

import { IconComponent } from "@/components/icon.component";



@Component({
    selector: 'app-datetime-input',
    template: `
    <div class="flex w-full">
    <ng-content select="[slot=start]"/>
     <app-input
     type="datetime-local"
     min="2024-04-17"
     [formControl]="control" [placeholder]="placeholder">
        <!-- <app-icon [icon]="icon" class="text-color" color="" size="20px" strokeWidth="2rem" /> -->

        @if(validateWithProp('required')) {
            <app-input-error-message>
                <!-- {{requiredMessage}} -->
            </app-input-error-message>
        }

          @if(validateWithProp('pattern')) {
            <app-input-error-message>
                <!-- {{patternMessage}} -->
            </app-input-error-message>
        }

     </app-input>
     </div>
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
export class DatetimeInputComponent extends BaseCustomComponent implements OnInit, OnDestroy {
    @Input({ required: true, alias: 'controlKey', }) _key!: string;
    @Input({ required: true }) placeholder!: string;

    override  control = new FormControl('', [Validators.required])

    ngOnInit(): void {
        this.controlOf?.addControl(this._key, this.control);



    }

    ngOnDestroy(): void {
        this.controlOf?.removeControl(this._key);
    }



}