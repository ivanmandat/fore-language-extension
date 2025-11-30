# IEaxGrid.DrillCellResult

IEaxGrid.DrillCellResult
-


# IEaxGrid.DrillCellResult


## Синтаксис


DrillCellResult(Row: Integer; Column: Integer):
 IEaxDrillCellResult;


## Параметры


Row. Индекс строки, в которой
 находится ячейка с данными;


Column. Индекс столбца, в котором
 находится ячейка с данными.


## Описание


Метод DrillCellResult возвращает
 информацию о привязке ячейки к источнику данных.


## Комментарии


В качестве значений параметров Row
 и Column необходимо передать
 координаты одной из ячеек, расположенных в области данных таблицы. Диапазон
 с данными можно получить, используя метод [SpecificRange](IEaxGrid.SpecificRange.htm)
 с параметром [EaxRangeType.Internal](../../Enums/EaxRangeType.htm).
 Если ячейка не связана с данными, то метод возвращает значение Null.


## Пример


Использование свойства приведено в примере для [IEaxGrid.DrillCell](IEaxGrid.DrillCell.htm).


См. также:


[IEaxGrid](IEaxGrid.htm)
 | [IEaxGrid.DrillRangeResult](IEaxGrid.DrillRangeResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
