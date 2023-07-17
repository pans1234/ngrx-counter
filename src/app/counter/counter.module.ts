import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { ButtonsComponent } from "./buttons/buttons.component";
import { counterReducer } from "./counter.reducer";
import { CounterComponent } from "./counter/counter.component";
import { CustomInputComponent } from "./custom-input/custom-input.component";
import { OutputComponent } from "./output/output.component";

const routes : Routes=[
    {
        path : '',
        component : CounterComponent
    }
]

@NgModule({
    declarations:[
        CounterComponent,
        OutputComponent,
        ButtonsComponent,
        CustomInputComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('counterModule' , counterReducer)
    ]
})
export class CounterModule {

}