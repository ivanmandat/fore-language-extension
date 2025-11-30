# IReportAfterEditEventArgs.Changed

IReportAfterEditEventArgs.Changed
-


# IReportAfterEditEventArgs.Changed


## Синтаксис


Changed: Boolean;


## Описание


Свойство Changed возвращает
 True, если во время редактирования
 были изменены данные какой-либо ячейки.


## Пример


В рассматриваемом примере предполагается существование объекта ReportBox1
 типа ReportBox.


			Sub ReportBox1OnAfterEdit(Sender: Object; Args: IReportAfterEditEventArgs);

Begin

    If Args.Changed Then

        WinApplication.InformationBox("Данные были изменены");

    End If;

End Sub ReportBox1OnAfterEdit;


При наступлении события, в случае если данные в ячейке были изменены,
 будет выдано соответствующее сообщение.


См. также:


[IReportAfterEditEventArgs](IReportAfterEditEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
