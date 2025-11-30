# IReportCellChangeEventArgs.Value

IReportCellChangeEventArgs.Value
-


# IReportCellChangeEventArgs.Value


## Синтаксис


Value: Variant;


## Описание


Свойство Value возвращает измененное
 значение ячейки.


## Пример


В рассматриваемом примере предполагается существование объекта ReportBox1
 типа ReportBox.


			Sub ReportBox1OnCellChange(Sender: Object; Args: IReportCellChangeEventArgs);

Begin

    WinApplication.InformationBox(Args.Value As String);

End Sub ReportBox1OnCellChange;


После изменения значения в ячейке будет выдано сообщение, содержащее
 заданное значение.


См. также:


[IReportCellChangeEventArgs](IReportCellChangeEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
