# IPrxTableDataBinding.AttachCell

IPrxTableDataBinding.AttachCell
-


# IPrxTableDataBinding.AttachCell


## Синтаксис


AttachCell(Row: Integer; Column: Integer; Slice:
 [IPrxSlice](../IPrxSlice/IPrxSlice.htm); Selection: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm)):
 Boolean;


## Параметры


Row - строка.


Column - столбец.


Slice - срез источника данных.


Selection - отметка среза.


## Описание


Метод AttachCell осуществляет
 привязку ячейки к срезу данных. Метод возвращает True
 при успешном завершении, False
 - при неудаче.


При вычислении листа привязка сбрасывается.


## Пример


В рассматриваемом примере предполагается существование объекта Report
 типа IPrxReport.


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    SheetT: IPrxTable;

    Slice: IPrxSlice;

    DataS: IPrxDataSource;

    Sel: IDimSelectionSet;

    Result: boolean;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REPORT").Bind As IPrxReport;

    Report.Recalc;

    DataS := Report.DataSources.Item(0);

    Slice := DataS.Slices.Item(0);

    Sel := Slice.Selection;

    SheetT := Report.Sheets.Item(0) As IPrxTable;

    Result := SheetT.DataBinding.AttachCell(0, 0, Slice, Sel);

    If Result Then

        WinApplication.InformationBox("Привязка осуществлена");

    Else

        WinApplication.InformationBox("Привязка не осуществлена");

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
