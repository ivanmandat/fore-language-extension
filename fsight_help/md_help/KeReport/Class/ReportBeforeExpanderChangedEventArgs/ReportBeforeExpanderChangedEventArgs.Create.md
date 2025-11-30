# ReportBeforeExpanderChangedEventArgs.Create

ReportBeforeExpanderChangedEventArgs.Create
-


# ReportBeforeExpanderChangedEventArgs.Create


## Синтаксис


Create(Report: [IReportBox](../../Interface/IReportBox/IReportBox.htm);
 Sheet: [IPrxSheet](../../Interface/IPrxSheet/IPrxSheet.htm);
 Row: Integer; Column: Integer; State: [TriState](ForeSys.chm::/Enums/TriState.htm);
 Cancel: Boolean);


## Параметры


Report. Компонент, для которого
 генерируется событие;


Sheet. Страница отчета, для
 которой генерируется событие;


Row. Индекс строки, в которой
 расположен экспандер;


Column. Индекс столбца, в котором
 расположен экспандер;


State. Состояние экспандера;


Cancel. Признак запрета смены
 состояния экспандера.


## Описание


Конструктор Create создает аргумент
 события, наступающего перед изменением состояния экспандера в ячейке таблицы.


См. также:


[ReportBeforeExpanderChangedEventArgs](ReportBeforeExpanderChangedEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
