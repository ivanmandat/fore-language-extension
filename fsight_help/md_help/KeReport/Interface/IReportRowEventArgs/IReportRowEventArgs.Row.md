# IReportRowEventArgs.Row

IReportRowEventArgs.Row
-


# IReportRowEventArgs.Row


## Синтаксис


Row: Integer;


## Описание


Свойство Row возвращает индекс
 строки, по заголовку которой осуществлен щелчок кнопки мыши.


## Пример


В рассматриваемом примере предполагается существование объекта ReportBox1
 типа ReportBox.


			Sub ReportBox1OnRowClick(Sender: Object; Args: IReportRowEventArgs);

Begin

    WinApplication.InformationBox(Args.Row.ToString);

End Sub ReportBox1OnRowClick;


При щелчке кнопкой мыши по заголовку строки будет выдано информационное
 сообщение, содержащее номер данной строки.


См. также:


[IReportRowEventArgs](IReportRowEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
