# ReportRangeInsertEventArgs.Create

ReportRangeInsertEventArgs.Create
-


# ReportRangeInsertEventArgs.Create


## Синтаксис


Create(Report: [IReportBox](../../Interface/IReportBox/IReportBox.htm),

       Sheet: [IPrxSheet](../../Interface/IPrxSheet/IPrxSheet.htm),

       Range: [ITabRange](TabSheet.chm::/Interface/ITabRange/ITabRange.htm),

       Direction: [TabDeleteShiftDirection](TabSheet.chm::/Enums/TabDeleteShiftDirection.htm));


## Параметры


Report. Параметры компонента
 среды разработки [ReportBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/ReportBox.htm);


Sheet. Параметры листа регламентного
 отчета;


Range. Параметры диапазона
 ячеек таблицы;


Direction. Способ, который
 использовался при удалении диапазона ячеек.


## Описание


Конструктор Create создает аргумент
 события, возникающего при добавлении диапазонов/строк/столбцов.


## Комментарии


Для создания аргумента события, возникающего при удалении диапазонов/строк/столбцов
 используйте конструктор [ReportRangeDeleteEventArgs.Create](../ReportRangeDeleteEventArgs/ReportRangeDeleteEventArgs.Create.htm).


См. также:


[ReportRangeInsertEventArgs](ReportRangeInsertEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
