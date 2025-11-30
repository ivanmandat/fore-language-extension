# IReportBeforeEditEventArgs.Cancel

IReportBeforeEditEventArgs.Cancel
-


# IReportBeforeEditEventArgs.Cancel


## Синтаксис


Cancel: Boolean;


## Описание


Свойство Cancel определяет,
 будет ли осуществляться переход в режим редактирования ячейки таблицы.


## Комментарии


Если свойство установлено в True -
 переход в режим редактирования запрещен.


## Пример


В рассматриваемом примере предполагается существование объекта ReportBox1
 типа ReportBox.


			Sub ReportBox1OnBeforeEdit(Sender: Object; Args: IReportBeforeEditEventArgs);

Begin

    Args.Cancel := True;

End Sub ReportBox1OnBeforeEdit;


Редактировать ячейки отчета запрещено.


См. также:


[IReportBeforeEditEventArgs](IReportBeforeEditEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
