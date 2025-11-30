# IBindingDimCombo.SortDirectionDefined

IBindingDimCombo.SortDirectionDefined
-


# IBindingDimCombo.SortDirectionDefined


## Синтаксис


SortDirectionDefined:
 Boolean;


## Описание


Свойство SortDirectionDefined
 определяет признак наличия параметра «SORTDIRECTION»
 в [строке
 связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Допустимые значения:


	- True. Параметр «SORTDIRECTION» содержится в [строке
	 связи](../IBindingValue/IBindingValue.AsString.htm), описывающей редактор значения;


Примечание.
 При изменении значения параметра «SORTDIRECTION»
 свойство автоматически принимает значение True.


	- False. Параметр «SORTDIRECTION» не содержится в строке
	 связи.


Для определения значения параметра «SORTDIRECTION»
 используйте свойство [IBindingDimCombo.SortDirection](IBindingDimCombo.SortDirection.htm).


## Пример


Использование свойства приведено в примере для [IBindingDimCombo.DataSourceKeyDefined](ibindingdimcombo.datasourcekeydefined.htm).


См. также:


[IBindingDimCombo](ibindingdimcombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
