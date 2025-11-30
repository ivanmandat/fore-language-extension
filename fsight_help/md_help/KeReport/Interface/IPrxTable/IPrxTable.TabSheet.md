# IPrxTable.TabSheet

IPrxTable.TabSheet
-


# IPrxTable.TabSheet


## Синтаксис


TabSheet: [ITabSheet](TabSheet.chm::/Interface/ITabSheet/ITabSheet.htm);


## Описание


Свойство TabSheet позволяет
 получить таблицу листа отчета.


## Пример


В рассматриваемом примере предполагается существование объекта Report
 типа IPrxReport.


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    SheetT: IPrxTable;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REPORT").Bind As IPrxReport;

    SheetT := Report.Sheets.Item(0) As IPrxTable;

    SheetT.TabSheet.CellValue(0, 0) := Report.DataSources.Count;

End Sub UserProc;


После выполнения примера в ячейке будет отображено количество источников
 данных регламентного отчета.


См. также:


[IPrxTable](IPrxTable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
