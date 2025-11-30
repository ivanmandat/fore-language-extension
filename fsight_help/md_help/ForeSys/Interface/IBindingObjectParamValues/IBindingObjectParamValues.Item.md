# IBindingObjectParamValues.Item

IBindingObjectParamValues.Item
-


# IBindingObjectParamValues.Item


## Синтаксис


Item(Index: Integer): String;


## Параметры


Index. Номер параметра.


## Описание


Свойство Item определяет значение
 параметра с указанным номером.


## Комментарии


Нумерация параметров начинается с единицы. При задании значения параметра
 через свойство Item в [строке
 связи](../IBindingValue/IBindingValue.AsString.htm) формируется представление следующего вида: PARAMVALUEх
 = "значение", где «x» - указанный номер параметра, а
 «значение» - значение, заданное для свойства Item.
 Для указания типа данных, который имеет передаваемое значение, перед самим
 значением может быть добавлено одно из значений перечисления [ForeVariantType](../../Enums/ForeVariantType.htm).
 Тип данных и само значение разделяются двоеточием, например, при указании
 PARAMVALUE1 = "4:10" - значение «10» будет передаваться как
 вещественное число.


Свойство Item доступно для использования,
 если свойству [IBindingObjectParamValues.ItemDefined](IBindingObjectParamValues.ItemDefined.htm)
 установлено значение True. При
 изменении свойства Item свойству
 [IBindingObjectParamValues.ItemDefined](IBindingObjectParamValues.ItemDefined.htm)
 автоматически устанавливается значение True.


## Пример


Пример использования приведен в описании свойства [IBindingDimCombo.ParamValues](../IBindingDimCombo/IBindingDimCombo.ParamValues.htm).


См. также:


[IBindingObjectParamValues](ibindingobjectparamvalues.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
