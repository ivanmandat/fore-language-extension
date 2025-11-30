# IRdsBaseBinding.HasMultipleValues

IRdsBaseBinding.HasMultipleValues
-


# IRdsBaseBinding.HasMultipleValues


## Синтаксис


HasMultipleValues: Boolean;


## Описание


Свойство HasMultipleValues определяет,
 могут ли по данному атрибуту храниться множественные значения.


## Комментарии


Если свойству HasMultipleValues
 установлено значение True, то
 для атрибута будет включена возможность устанавливать множественные значения.
 При этом в параметрах привязка также необходимо определить следующие свойства:


	- [DetailTable](IRdsBaseBinding.DetailTable.htm) или
	 [DetailTableObject](IRdsBaseBinding.DetailTableObject.htm);


	- [KeyField](IRdsBaseBinding.KeyField.htm);


	- [OrderField](IRdsBaseBinding.OrderField.htm);


	- [ValueField](IRdsBaseBinding.ValueField.htm);


	- Mode.


## Пример


Пример использования приведен в описании метода [IRdsLoaderBindings.Add](../IRdsLoaderBindings/IRdsLoaderBindings.Add.htm).


См. также:


[IRdsBaseBinding](IRdsBaseBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
