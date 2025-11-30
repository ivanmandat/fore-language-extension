# IPrxReportClass.ActiveReport

IPrxReportClass.ActiveReport
-


# IPrxReportClass.ActiveReport


## Синтаксис


ActiveReport: [IPrxReport](../IPrxReport/IPrxReport.htm);


## Описание


Свойство ActiveReport возвращает
 объект, содержащий активный регламентный отчет.


## Комментарии


Свойство используется для доступа к регламентному отчёту из макроса.


## Пример


Данный пример является макросом для регламентного отчёта.


Добавьте ссылки на системные сборки: Report, Tab.


			Sub Macro_1;

Var

    Report: IPrxReport;

    Sheet: IPrxSheet;

    SheetTab: IPrxTable;

    Table: ITabSheet;

Begin

    Report := PrxReport.ActiveReport;

    Sheet := Report.ActiveSheet;

    SheetTab := Sheet As IPrxTable;

    Table := SheetTab.TabSheet;

    Table.Cell(0,0).Value := DateTime.Now;

End Sub Macro_1;


После выполнения макроса в ячейку А0 активного листа регламентного отчёта
 будет записана текущая дата и время.


См. также:


[IPrxReportClass](IPrxReportClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
