# IEaxGrid.DrillRangeResult

IEaxGrid.DrillRangeResult
-


# IEaxGrid.DrillRangeResult


## Синтаксис


DrillRangeResult(Range: [ITabRange](TabSheet.chm::/Interface/ITabRange/ITabRange.htm)):
 IEaxDrillRangeResult;


## Параметры


Range. Диапазон ячеек с данными.


## Описание


Метод DrillRangeResult возвращает
 информацию о привязке диапазона ячеек к источнику данных.


## Комментарии


В качестве значения параметра Range
 необходимо передать координаты диапазона ячеек, расположенного в области
 данных таблицы. Диапазон с данными можно получить, используя метод [SpecificRange](IEaxGrid.SpecificRange.htm) с параметром [EaxRangeType.Internal](../../Enums/EaxRangeType.htm). Если
 диапазон ячеек не связан с данными, то метод возвращает значение Null.


## Пример


Использование свойства приведено в примере для [IEaxGrid.DrillRange](IEaxGrid.DrillRange.htm).


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
