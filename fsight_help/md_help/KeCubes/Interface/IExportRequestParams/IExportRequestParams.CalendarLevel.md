# IExportRequestParams.CalendarLevel

IExportRequestParams.CalendarLevel
-


# IExportRequestParams.CalendarLevel


## Синтаксис


CalendarLevel: [DimCalendarLevel](KeDims.chm::/Enums/DimCalendarLevel.htm);


## Описание


Свойство CalendarLevel определяет уровень детализации данных.


## Комментарии


Если свойство принимает значение [DimCalendarLevel.None](KeDims.chm::/Enums/DimCalendarLevel.htm), то данные будут экспортироваться со всех календарных уровней.


Примечание. Экспорт данных со всех календарных уровней возможен, если элементы календаря расположены построчно, т.е. [IExportRequestParams.ByColumns](IExportRequestParams.ByColumns.htm) = False.


## Пример


Использование свойства приведено в примере для [IExportRequestParams.Bindings](IExportRequestParams.Bindings.htm).


См. также:


[IExportRequestParams](IExportRequestParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
