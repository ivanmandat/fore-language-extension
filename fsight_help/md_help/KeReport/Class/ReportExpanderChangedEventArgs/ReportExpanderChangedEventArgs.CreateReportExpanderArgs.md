# ReportExpanderChangedEventArgs.CreateReportExpanderArgs

ReportExpanderChangedEventArgs.CreateReportExpanderArgs
-


# ReportExpanderChangedEventArgs.CreateReportExpanderArgs


## Синтаксис


CreateReportExpanderArgs(Report: [IReportBox](../../Interface/IReportBox/IReportBox.htm);
 Sheet: [IPrxSheet](../../Interface/IPrxSheet/IPrxSheet.htm);
 Row: Integer; Column: Integer; State: [TriState](ForeSys.chm::/Enums/TriState.htm));


## Параметры


Report. Компонент, для которого
 генерируется событие.


Sheet. Страница отчета, для
 которой генерируется событие.


Row. Индекс строки, в которой
 расположен экспандер.


Column. Индекс столбца, в котором
 расположен экспандер.


State. Состояние экспандера.


## Описание


Конструктор CreateReportExpanderArgs
 создает аргумент события, наступающего при изменении состояния экспандера
 в ячейке таблицы.


См. также:


[ReportExpanderChangedEventArgs](ReportExpanderChangedEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
