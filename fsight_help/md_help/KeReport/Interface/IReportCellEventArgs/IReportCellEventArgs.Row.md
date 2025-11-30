# IReportCellEventArgs.Row

IReportCellEventArgs.Row
-


# IReportCellEventArgs.Row


## Синтаксис


Row: Integer;


## Описание


Свойство Row возвращает индекс
 строки, в которой находится ячейка, для которой генерируется событие.


## Пример


В рассматриваемом примере предполагается существование объекта ReportBox1
 типа ReportBox.


			Sub ReportBox1OnCellClick(Sender: Object; Args: IReportCellEventArgs);

Begin

    WinApplication.InformationBox("строка: " + Args.Row.ToString + " столбец: " + Args.Column.ToString);

End Sub ReportBox1OnCellClick;


При щелчке кнопкой мыши по ячейке листа будет выдано информационное
 сообщение, содержащее индекс строки и столбца.


См. также:


[IReportCellEventArgs](IReportCellEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
