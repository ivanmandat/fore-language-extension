# IPrxReportUserEvents.EventOnBeforeSaveToStateServer

IPrxReportUserEvents.EventOnBeforeSaveToStateServer
-


# IPrxReportUserEvents.EventOnBeforeSaveToStateServer


## Синтаксис


EventOnBeforeSaveToStateServer(Args: [IUiPrxReportEventArgs](../IUiPrxReportEventArgs/IUiPrxReportEventArgs.htm));


## Параметры


Args. Параметр, позволяющий
 работать с параметрами события.


## Описание


Метод EventOnBeforeSaveToStateServer
 реализует событие, наступающее перед сохранением регламентного отчёта
 на сервер состояний.


## Пример


Для выполнения примера предполагается наличие регламентного отчета.
 Подключите модуль в регламентный отчет, в качестве обработчика событий
 выберите подключенный модуль и класс EventsClass.


	Class EventsClass: ReportEvents

	    Public Sub EventOnBeforeSaveToStateServer(Args: IUiPrxReportEventArgs);

	    Begin

	        Debug.WriteLine("На сервер состояний сохранён отчёт: " + Args.Report.Name + ". Дата и время сохранения: " + DateTime.Now.ToString);

	    End Sub EventOnBeforeSaveToStateServer;

	End Class EventsClass;


Каждый раз при сохранении отчёта на сервер состояний соответствующее
 сообщение будет выведено в консоль среды разработки.


См. также:


[IPrxReportUserEvents](IPrxReportUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
