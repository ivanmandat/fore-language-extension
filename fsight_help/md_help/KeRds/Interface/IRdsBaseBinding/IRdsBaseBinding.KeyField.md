# IRdsBaseBinding.KeyField

IRdsBaseBinding.KeyField
-


# IRdsBaseBinding.KeyField


## Синтаксис


KeyField: String;


## Описание


Свойство KeyField определяет
 поле таблицы с множественными значениями, которое будет связано с полем
 источника данных [Field](IRdsBaseBinding.Field.htm).


## Комментарии


Данное свойство актуально, если свойству [HasMultipleValues](IRdsBaseBinding.HasMultipleValues.htm)
 установлено значение True. Таблица,
 в которой хранятся множественные значения атрибута, задается в свойстве
 [DetailTable](IRdsBaseBinding.DetailTable.htm) или [DetailTableObject](IRdsBaseBinding.DetailTableObject.htm).


## Пример


Пример использования приведен в описании метода [IRdsLoaderBindings.Add](../IRdsLoaderBindings/IRdsLoaderBindings.Add.htm).


См. также:


[IRdsBaseBinding](IRdsBaseBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
