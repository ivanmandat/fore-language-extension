# ICubeMetaExporter.CalendarLevelSet

ICubeMetaExporter.CalendarLevelSet
-


# ICubeMetaExporter.CalendarLevelSet


## Синтаксис


CalendarLevelSet: [DimCalendarLevelSet](KeDims.chm::/Enums/DimCalendarLevelSet.htm);


## Описание


Свойство CalendarLevelSet
 определяет набор календарных динамик, данные по которым должны быть экспортированы.


## Комментарии


Календарные динамики должны быть перечислены с использованием оператора
 Or. Например:


	Sub UserProc;

	Var


	    Exporter: ICubeMetaExporter;

	Begin

	    //...

	    Exporter.CalendarLevelSet := DimCalendarLevelSet.Year Or DimCalendarLevelSet.Quarter;

	    //...

	End Sub UserProc;


Формат дат для каждой используемой динамики задается с помощью свойства
 [ICubeMetaExporterBinding.DateFormatEx](../ICubeMetaExporterBinding/ICubeMetaExporterBinding.DateFormatEx.htm).


## Пример


Использование свойства приведено в примере для [ICubeMetaExporter.AutoPeriod](ICubeMetaExporter.AutoPeriod.htm).


См. также:


[ICubeMetaExporter](ICubeMetaExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
