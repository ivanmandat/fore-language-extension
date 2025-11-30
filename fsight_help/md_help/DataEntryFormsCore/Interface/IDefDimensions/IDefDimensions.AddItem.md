# IDefDimensions.AddItem

IDefDimensions.AddItem
-


# IDefDimensions.AddItem


## Синтаксис


AddItem(dimKey: Integer; [indUnical: Integer = -1]):
 [IDefDimension](../IDefDimension/IDefDimension.htm);


## Параметры


dimKey. Ключ справочника в
 репозитории;


indUnical. Ключ показателя,
 с измерения которого будут скопированы настройки.


## Описание


Метод AddItem добавляет в коллекцию
 измерение на базе справочника репозитория с указанным ключом.


## Комментарии


По умолчанию в качестве значения параметра indUnical
 передаётся значение -1, при этом ни какие настройки не копируются.


## Пример


Пример использования приведён в описании конструктора [DataEntryForm.CreateByReport](../../Class/DataEntryForm/DataEntryForm.CreateByReport.htm).


См. также:


[IDefDimensions](IDefDimensions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
