# IPrxReport.RemoveEventHandler

IPrxReport.RemoveEventHandler
-


# IPrxReport.RemoveEventHandler


## Синтаксис


RemoveEventHandler(Cookie: Integer);


## Параметры


Cookie - индекс обработчика
 событий.


## Описание


Метод RemoveEventHandler удаляет
 обработчик событий из отчета.


## Пример


Для выполнения следующего примера следует создать модуль (текст приведен
 ниже), затем создать регламентный отчет, для которого созданный ранее
 модуль определить как [обработчик
 событий](UiReport.chm::/desktop/Reports/Event/UiReport_Reports_Event_Module.htm) (указать класс EventsClass). В отчете создать
 две гиперссылки: одна выполняет процедуру «AddEventHandler»,
 другая «RemoveEventHandler».


			Var i: Integer;

Class EventsClass: ReportEvents

    //событие после экспорта отчета

    Public Sub OnAfterExportReport(Report: IPrxReport);

    Begin

        WinApplication.InformationBox("Экспорт отчета «" + Report.Name + "» завершен");

    End Sub OnAfterExportReport;

End Class EventsClass;


Class MyEventsClass: ReportEvents

    //событие перед сохранением отчета

    Public Sub OnBeforeSaveReport(Report: IPrxReport; Var Cancel: Boolean);

    Begin

        If Not WinApplication.ConfirmationBox("Сохранить данные?") Then

        Cancel := True;

        End If;

End Sub OnBeforeSaveReport;

End Class MyEventsClass;


Public Sub AddEventHandler;

Var

    Ev: MyEventsClass;

Begin

    Ev := New MyEventsClass.Create;

    i := PrxReport.ActiveReport.AddEventHandler((Ev As IPrxReportUserEvents));

End Sub AddEventHandler;


Public Sub RemoveEventHandler;

Begin

    PrxReport.ActiveReport.RemoveEventHandler(i);

End Sub RemoveEventHandler;


После нажатия на гиперссылку, выполняющую процедуру «AddEventHandler»,
 для отчета будут использоваться обработчик событий «MyEventsClass».
 Для проверки внести изменения в отчет, сохранить, экспортировать. После
 нажатия на гиперссылку, выполняющую процедуру «RemoveEventHandler»,
 обработчик, добавленный ранее, будет удален.


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
