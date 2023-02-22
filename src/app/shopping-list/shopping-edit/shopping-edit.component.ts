import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/models/ingredient.model';
import { ShoppingListService } from "../../shared/services/shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form', { static: false }) form: NgForm;
  editItem: Ingredient;
  subscription: Subscription;
  isEdit: boolean = false;

  constructor(private shoppingListService: ShoppingListService) {
  }


  ngOnInit(): void {
    this.subscription = this.shoppingListService.ingredientSelected.subscribe((index: number) => {
      this.editItem = this.shoppingListService.getIngredients()[index];
      this.isEdit = true;
      this.form.setValue({
        name: this.editItem.name,
        amount: this.editItem.amount
      });
    });
  }

  onSave(form: NgForm) {
    if (form.valid) {
      if (this.isEdit) {
        this.shoppingListService.updateIngredient(this.editItem, form.value);
      } else {
        const ingredient = new Ingredient(form.value.name, form.value.amount);
        this.shoppingListService.addIngredient(ingredient);
      }
      this.onClear(form);
    }
  }

  onClear(form: NgForm) {
    form.reset();
    this.isEdit = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editItem);
    this.onClear(this.form);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
