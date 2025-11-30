# ITabRange.Address

ITabRange.Address
-


# ITabRange.Address


## Синтаксис


Address: String;


## Описание


Свойство Address возвращает
 адрес диапазона ячеек в строковом виде.


## Комментарии


Если диапазон состоит из одной ячейки, то адрес включает в себя наименование
 столбца и строки, на пересечении которых расположена ячейка (Например,
 А1). Если диапазон состоит более чем из одной ячейки, то адрес включает
 в себя адрес верхней левой и правой нижней ячейки, которые являются границами
 диапазона (Например, А1:D5).


При работе с таблицей, отображаемой в компоненте [TabSheetBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/TabSheetBox.htm)
 или [ReportBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/ReportBox.htm),
 значение, возвращаемое данным свойством, зависит от свойства DisplayNumericColumnNames
 данных компонентов:


	- Если DisplayNumericColumnNames
	 = True, то значение свойства
	 Address формируется в формате
	 R1C1;


	- Если DisplayNumericColumnNames
	 = False, то значение свойства
	 Address формируется в формате
	 A1;


## Пример


Пример использования свойства приведен в описании свойства [ITabFormatFormula.Condition](../ITabFormatFormula/ITabFormatFormula.Condition.htm).


См. также:


[ITabRange](ITabRange.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
