# IPrxTableDataBinding.DetachCell

IPrxTableDataBinding.DetachCell
-


# IPrxTableDataBinding.DetachCell


## Синтаксис


DetachCell(Row: Integer; Column: Integer): Boolean;


## Параметры


Row - строка.


Column - столбец.


## Описание


Метод DetachCell осуществляет
 отвязку ячейки от данных среза.


## Комментарии


Метод возвращает True при успешном
 завершении, False - при неудаче.


## Пример


В рассматриваемом примере предполагается существование объекта Report
 типа IPrxReport.


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    SheetT: IPrxTable;

    Result: Boolean;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REPORT").Bind As IPrxReport;

    SheetT := Report.Sheets.Item(0) As IPrxTable;

    Result := SheetT.DataBinding.DetachCell(12, 2);

    If Result Then

        WinApplication.InformationBox("Отвязка осуществлена");

    Else

        WinApplication.InformationBox("Отвязка не осуществлена");

    End If;

End Sub UserProc;


После выполнения примера будет выдано сообщение, в зависимости от результата
 метода.


См. также:


[IPrxTableDataBinding](IPrxTableDataBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
