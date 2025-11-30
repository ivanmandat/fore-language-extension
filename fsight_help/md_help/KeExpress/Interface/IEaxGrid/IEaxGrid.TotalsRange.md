# IEaxGrid.TotalsRange

IEaxGrid.TotalsRange
-


# IEaxGrid.TotalsRange


## Синтаксис


TotalsRange(LeftHeader:Boolean): [ITabRange](TabSheet.chm::/Interface/ITabRange/ITabRange.htm);


## Параметры


LeftHeader. Определяет, для
 какого типа итогов будет получен диапазон ячеек.


## Описание


Свойство TotalsRange возвращает
 диапазон ячеек таблицы, в котором отображаются [итоги по
 столбцам/строкам](UiAnalyticalArea.chm::/Totals/Calculate_totals.htm).


## Комментарии


Допустимые значения для параметра LeftHeader:


	- True. Будет получен
	 диапазон ячеек, в котором отображены [итоги по
	 строкам](UiAnalyticalArea.chm::/Totals/Calculate_totals.htm);


	- False. Будет получен
	 диапазон ячеек, в котором отображены [итоги по
	 столбцам](UiAnalyticalArea.chm::/Totals/Calculate_totals.htm);


Для получения диапазона ячеек, в котором отображаются элементы измерения,
 используйте [IEaxGrid.DimRange](IEaxGrid.DimRange.htm).


## Пример


Использование свойства приведено в примере для [IEaxGrid.DimRange](IEaxGrid.DimRange.htm).


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
