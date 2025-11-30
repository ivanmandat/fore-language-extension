# IPrxDrillCellResult.Selection

IPrxDrillCellResult.Selection
-


# IPrxDrillCellResult.Selection


## Синтаксис


Selection: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Описание


Свойство Selection возвращает
 отметку среза, являющегося источником данных для ячейки.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта с идентификатором REPORT, в котором содержится область данных,
 привязанная к ячейке B1. В срезе данных должно содержаться измерение с
 идентификатором CALENDAR.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Report, Tab.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    Sheet: IPrxSheet;

    Drill: IPrxDrillCellResult;

    SheetTab: IPrxTable;

    Data: IPrxTableDataBinding;

    Sel: IDimSelectionSet;

    DimSel: IDimSelection;

Begin

    MB := MetabaseClass.Active;

    // Получим регламентный отчёт

    MObj := MB.ItemById("REPORT").Edit;

    Report := MObj As IPrxReport;

    // Получим активный лист отчёта

    Sheet := Report.ActiveSheet;

    Sheet.Recalc;

    SheetTab := Sheet As IPrxTable;

    // Получим информацию о привязке ячейки B1 к срезу данных

    Data := SheetTab.DataBinding;

    Drill := Data.DrillCell(1,1);

    // Выведем в консоль количество элементов в отметке измерения с идентификатором CALENDAR

    Sel := Drill.Selection;

    DimSel := Sel.FindById("CALENDAR");

    Debug.WriteLine(DimSel.SelectedCount);

End Sub UserProc;


После выполнения примера в консоль будет выведено количество отмеченных
 элементов измерения с идентификатором CALENDAR.


См. также:


[IPrxDrillCellResult](IPrxDrillCellResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
