import { Component } from '@angular/core';
import { FormBuilder, Validators, ValidationErrors, AbstractControl, FormGroup } from '@angular/forms';
import { take } from 'rxjs';


interface Data {
  nombre?: number | null ;
  description?: string | null ;
}

interface QuestionsData {
  questionA?: string | null ;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngCours3ReactiveForms';
  questionForm:FormGroup<any>;
  questionData:Data | null = null;


  constructor(private fb: FormBuilder) {
    this.questionForm = this.fb.group({
      nombre: ['', [Validators.required]],
      description: ['',[Validators.required]],
    }, {validators: this.registerValidator});
 
    this.questionForm.valueChanges.subscribe(() => {
      this.questionData = this.questionForm.value;
    });

  }

  // Valider que le nom est present dans le email (c'est pas une bonne validation, mais c'est simplement pour pratiquer!)
  registerValidator(control: AbstractControl): ValidationErrors | null {
    // On récupère les valeurs de nos champs textes
    const nombre = control.get('nombre')?.value;
    const description = control.get('description')?.value;
    let desc = description;
    // On regarde si les champs sont remplis avant de faire la validation
    if (!nombre || !description) {
      return null;
    }
    // On fait note validation
    let formValid:boolean = false;
    if(nombre > 10 || nombre < 0)
    {
      control.get('nombre')?.setErrors({nameInEmail:true});
      console.log(nombre)
    }else{
      control.get('nombre')?.setErrors(null);

    }
     
   
    if(description != ""){
      let tab: string[] = [];
      tab = desc.split(' ');
      let valid = true;
      if(tab.length != nombre)
      {
        control.get('description')?.setErrors({nameInEmail:true});
      }
      else
      {
        tab.forEach(element => {
          /* if(element.length != nombre)
          {
            valid = false;
            return;
          } */
          if(element.length != nombre)
          {
            
            console.log(element)
            control.get('description')?.setErrors({nbLettre:true});
            console.log(tab,length)
          }else {
            control.get('description')?.setErrors(null);
         }
        });
         //element.length != nombre
        
        
      }
     
       
    }

    
    return !formValid? {nameInEmail:true} && {nbLettre:true} :null;
  }


}
