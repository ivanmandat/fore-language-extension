# IReportCellContentChangeEventArgs.Cancel

IReportCellContentChangeEventArgs.Cancel
-


# IReportCellContentChangeEventArgs.Cancel


## Синтаксис


Cancel: Boolean;


## Описание


Свойство Cancel определяет:
 отменять ли изменения, сделанные в ячейке таблицы. Если значение данного
 свойства True, то изменения, произведенные
 в ячейке таблицы, будут отменены. По умолчанию значение свойства Cancel - False.


## Пример


Для выполнения примера данную процедуру необходимо назначить в качестве
 обработчика события [OnChangeCellContent](../../Class/ReportBox/ReportBox.OnChangeCellContent.htm)
 (изменение содержимого в ячейке таблицы) для компонента ReportBox с идентификатором
 «ReportBox1».


			Sub ReportBox1OnChangeCellContent(Sender: Object; Args: IReportCellContentChangeEventArgs);

Begin

    Args.Cancel := True;

End Sub ReportBox1OnChangeCellContent;


После выполнения примера, изменения, производимые в ячейках таблицы,
 будут отменяться. Таким образом, ввод значений в таблицу станет невозможным.


См. также:


[IReportCellContentChangeEventArgs](IReportCellContentChangeEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
