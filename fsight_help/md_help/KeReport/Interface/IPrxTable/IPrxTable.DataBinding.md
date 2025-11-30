# IPrxTable.DataBinding

IPrxTable.DataBinding
-


# IPrxTable.DataBinding


## Синтаксис


DataBinding: [IPrxTableDataBinding](../IPrxTableDataBinding/IPrxTableDataBinding.htm);


## Описание


Свойство DataBinding позволяет
 определить привязку данных ячеек листа отчета.


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

    Range: ITabRange;

    Result: boolean;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REPORT").Bind As IPrxReport;

    DataS := Report.DataSources.Item(0);

    Slice := DataS.Slices.Item(0);

    Sel := Slice.Selection;

    SheetT := Report.Sheets.Item(0) As IPrxTable;

    Range := SheetT.TabSheet.Cells(0, 0, 3, 2);

    Result := SheetT.DataBinding.AttachRange(Range, Slice, Sel);

    If Result Then

        WinApplication.InformationBox("Привязка осуществлена");

    Else

        WinApplication.InformationBox("Привязка не осуществлена");

    End If;

End Sub UserProc;


После выполнения примера будет выдано сообщение в зависимости от результата
 метода.


См. также:


[IPrxTable](IPrxTable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
