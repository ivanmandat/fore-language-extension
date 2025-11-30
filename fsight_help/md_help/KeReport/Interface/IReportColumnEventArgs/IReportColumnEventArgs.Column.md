# IReportColumnEventArgs.Column

IReportColumnEventArgs.Column
-


# IReportColumnEventArgs.Column


## Синтаксис


Column: Integer;


## Описание


Свойство Column возвращает индекс
 столбца, для которого было сгенерировано событие.


## Пример


В рассматриваемом примере предполагается существование объекта ReportBox1
 типа ReportBox.


			Sub ReportBox1OnColumnClick(Sender: Object; Args: IReportColumnEventArgs);

Begin

    WinApplication.InformationBox(Args.Column.ToString);

End Sub ReportBox1OnColumnClick;


При нажатии на заголовок столбца будет выдано информационное сообщение,
 содержащее номер данного столбца.


См. также:


[IReportColumnEventArgs](IReportColumnEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
