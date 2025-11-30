# IBindingObjectParamValues.Value

IBindingObjectParamValues.Value
-


# IBindingObjectParamValues.Value


## Синтаксис


Value(ItemId: String): String;


## Параметры


ItemId. Идентификатор параметра.


## Описание


Свойство Value определяет значение
 параметра с указанным идентификатором.


## Комментарии


При задании значения параметра через свойство Value
 в [строке
 связи](../IBindingValue/IBindingValue.AsString.htm) формируется представление следующего вида: PARAMID_ident
 = "значение", где «ident» - указанный идентификатор параметра,
 а «значение» - значение, заданное для свойства Value.


Для указания типа данных, который имеет передаваемое значение, перед
 самим значением может быть добавлено одно из значений перечисления [ForeVariantType](../../Enums/ForeVariantType.htm). Тип данных
 и само значение разделяются двоеточием, например, при указании PARAMID_Item
 = "2:True" - значение «True» будет передаваться как строка.


Свойство Value доступно для
 использования, если свойству [IBindingObjectParamValues.ValueDefined](IBindingObjectParamValues.ValueDefined.htm)
 установлено значение True. При
 изменении свойства Value свойству
 [IBindingObjectParamValues.ValueDefined](IBindingObjectParamValues.ValueDefined.htm)
 автоматически устанавливается значение True.


## Пример


Пример использования приведен в описании свойства [IBindingDimCombo.ParamValues](../IBindingDimCombo/IBindingDimCombo.ParamValues.htm).


См. также:


[IBindingObjectParamValues](ibindingobjectparamvalues.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
