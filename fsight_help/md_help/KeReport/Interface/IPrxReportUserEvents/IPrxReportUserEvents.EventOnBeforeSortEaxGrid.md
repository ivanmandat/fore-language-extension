# IPrxReportUserEvents.EventOnBeforeSortEaxGrid

IPrxReportUserEvents.EventOnBeforeSortEaxGrid
-


# IPrxReportUserEvents.EventOnBeforeSortEaxGrid


## Синтаксис


EventOnBeforeSortEaxGrid (Args: [IUiPrxEaxGridCancelEventArgs](../IUiPrxEaxGridCancelEventArgs/IUiPrxEaxGridCancelEventArgs.htm));


## Параметры


Args. Параметр, позволяющий
 работать с параметрами события.


## Описание


Метод EventOnBeforeSortEaxGrid
 реализует событие, происходящее до сортировки данных в аналитической области.


## Комментарии


Метод позволяет переопределить системное событие, которое наступает
 после события [ReportEvents.OnBeforeSortEaxGrid](../../Class/ReportEvents/ReportEvents.OnBeforeSortEaxGrid.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с [подключенным
 модулем](UiReport.chm::/desktop/Reports/Event/UiReport_Reports_Event.htm#event). В качестве обработчика событий должен быть
 указан подключенный модуль и класс Parent.


Добавьте ссылки на системные сборки: Express, Report, Ui.


			Public Class EventsClass: Parent

    Public Sub OnBeforeSortEaxGrid(EaxGrid: IEaxGrid; Var Cancel: Boolean);

    Begin

        //Вызов системного события, переопределенного в классе Parent

        Inherited OnBeforeSortEaxGrid(EaxGrid, Cancel);

    End Sub OnBeforeSortEaxGrid;

    Public Sub OnAfterSortEaxGrid(EaxGrid: IEaxGrid);

    Begin

        //Вызов системного события, переопределенного в классе Parent

        Inherited OnAfterSortEaxGrid(EaxGrid);

    End Sub OnAfterSortEaxGrid;

End Class EventsClass;

Public Class Parent: ReportEvents

    //Переопределение системного события EventOnBeforeSortEaxGrid

    Public Sub EventOnBeforeSortEaxGrid(Args: IUiPrxEaxGridCancelEventArgs);

    Begin

        //Обработка системного события

        WinApplication.InformationBox("Данные аналитической области будут отсортированы");

    End Sub EventOnBeforeSortEaxGrid;

    //Переопределение системного события EventOnAfterSortEaxGrid

    Public Sub EventOnAfterSortEaxGrid(Args: IUiPrxEaxGridEventArgs);

    Begin

        //Обработка системного события

        WinApplication.InformationBox("Данные аналитической области были отсортированы");

    End Sub EventOnAfterSortEaxGrid;

End Class Parent;


В результате выполнения примера в регламентном отчёте перед сортировкой
 и после сортировки данных аналитической области будут выведены информационные
 сообщения.


См.
 также:


[IPrxReportUserEvents](IPrxReportUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
