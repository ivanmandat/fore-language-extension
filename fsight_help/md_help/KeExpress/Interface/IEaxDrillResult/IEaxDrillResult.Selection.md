# IEaxDrillResult.Selection

IEaxDrillResult.Selection
-


# IEaxDrillResult.Selection


## Синтаксис


Selection: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Описание


Свойство Selection возвращает
 отметку, в соответствии с которой в источнике данных расположены данные.


## Комментарии


В зависимости от того, где получена информация о привязке к данным,
 отметка будет различаться.


Для [ячейки таблицы](../IEaxGrid/IEaxGrid.DrillCellResult.htm)
 или точки диаграммы отметка будет соответствовать единичной точке в матрице
 с данными источника.


Для [диапазонов таблицы](../IEaxGrid/IEaxGrid.DrillRangeResult.htm)
 или рядов диаграммы в отметке по одному или нескольким измерениям будет
 присутствовать множественная отметка. Данная отметка соответствует множеству
 ячеек в матрице с данными источника.


## Пример


Использование свойства приведено в примере для [IEaxGrid.DrillCell](../IEaxGrid/IEaxGrid.DrillCell.htm),
 [IEaxGrid.DrillRange](../IEaxGrid/IEaxGrid.DrillRange.htm).


См. также:


[IEaxDrillResult](IEaxDrillResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
