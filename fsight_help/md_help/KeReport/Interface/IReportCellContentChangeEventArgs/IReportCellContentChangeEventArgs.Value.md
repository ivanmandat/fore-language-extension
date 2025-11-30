# IReportCellContentChangeEventArgs.Value

IReportCellContentChangeEventArgs.Value
-


# IReportCellContentChangeEventArgs.Value


## Синтаксис


Value: Variant;


## Описание


Свойство Value определяет значение
 в ячейке таблицы.


## Пример


Для выполнения примера данную процедуру необходимо назначить в качестве
 обработчика события [OnChangeCellContent](../../Class/ReportBox/ReportBox.OnChangeCellContent.htm)
 (изменение содержимого в ячейке таблицы) для компонента ReportBox с идентификатором
 «ReportBox1».


			Sub ReportBox1OnChangeCellContent(Sender: Object; Args: IReportCellContentChangeEventArgs);

Begin

    If Args.Type = TabCellContentChange.Formula Then

        WinApplication.InformationBox("Была введена формула: " + Args.Value);

    End If;

End Sub ReportBox1OnChangeCellContent;


Если при изменении значения в ячейке таблицы была введена или изменена
 формула, то будет показано информационное сообщение с текстом данной формулы.


См. также:


[IReportCellContentChangeEventArgs.Value](IReportCellContentChangeEventArgs.Value.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
