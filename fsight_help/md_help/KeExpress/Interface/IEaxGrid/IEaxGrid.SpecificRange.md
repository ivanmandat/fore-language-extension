# IEaxGrid.SpecificRange

IEaxGrid.SpecificRange
-


# IEaxGrid.SpecificRange


## Синтаксис


SpecificRange(RangeType: [EaxRangeType](../../Enums/EaxRangeType.htm)):
 [ITabRange](TabSheet.chm::/Interface/ITabRange/ITabRange.htm);


## Параметры


RangeType. Тип составной части
 таблицы экспресс-отчёта.


## Описание


Свойство SpecificRange возвращает
 диапазон ячеек, соответствующий заданной части таблицы.


## Комментарии


Свойство возвращает значение Null,
 если указанная часть таблицы не существует. Например, при получении диапазона
 [EaxRangeType.Pareto](../../Enums/EaxRangeType.htm), свойство
 вернёт Null, если анализ Парето
 не применялся в таблице.


## Пример


Использование свойства приведено в примерах для [IEaxGrid.DrillCell](IEaxGrid.DrillCell.htm),
 [IEaxGrid.DrillRange](IEaxGrid.DrillRange.htm).


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
