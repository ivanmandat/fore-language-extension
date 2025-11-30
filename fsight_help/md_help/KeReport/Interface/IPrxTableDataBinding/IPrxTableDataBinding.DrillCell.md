# IPrxTableDataBinding.DrillCell

IPrxTableDataBinding.DrillCell
-


# IPrxTableDataBinding.DrillCell


## Синтаксис


DrillCell(Row: Integer; Column: Integer): [IPrxDrillCellResult](../IPrxDrillCellResult/IPrxDrillCellResult.htm);


## Параметры


Row. Индекс строки;


Column. Индекс столбца.


## Описание


Метод DrillCell возвращает информацию о привязке ячейки к срезу данных, независимо от того, настроена или нет множественная отметка в фиксированных измерениях. Индекс строки и столбца, в которых расположена ячейка, передаются посредством параметров Row и Column.


## Пример


В рассматриваемом примере предполагается существование объекта Report типа IPrxReport.


			Sub UserProc;
Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    SheetT: IPrxTable;

    Drill: IPrxDrillCellResult;
Begin

    SheetT:= Report.Sheets.Item(0) As IPrxTable;

    Drill:= SheetT.DataBinding.DrillCell(12,2);

    If Drill<>Null Then

        WinApplication.InformationBox(Drill.Slice.Name);

    End If;
End Sub UserProc;


После выполнения примера будет выдано сообщение, содержащее наименование среза.


См. также:


[IPrxTableDataBinding](IPrxTableDataBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
