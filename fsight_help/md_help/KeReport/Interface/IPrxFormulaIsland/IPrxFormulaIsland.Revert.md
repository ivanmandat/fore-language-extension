# IPrxFormulaIsland.Revert

IPrxFormulaIsland.Revert
-


# IPrxFormulaIsland.Revert


## Синтаксис


Revert;


## Описание


Метод Revert отменяет изменения
 в области формул.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта с идентификатором REPORT, в котором содержится область формул.


Добавьте ссылки на системные сборки: Metabase, Report, Tab.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    FormulaIs: IPrxFormulaIslands;

    Formula: IPrxFormulaIsland;

    FSheet: IPrxSheet;

    FSheetTab: IPrxTable;

    Table: ITabSheet;

    Range: ITabRange;

Begin

    MB := MetabaseClass.Active;

    // Получим регламентный отчёт

    MObj := MB.ItemById("REPORT").Edit;

    Report := MObj As IPrxReport;

    // Получим область формул

    FormulaIs := Report.FormulaIslands;

    Formula := FormulaIs.Item(0);

    // Изменим базовую ячейку области формул

    Formula := Formula.Edit;

    FSheet := Formula.Sheet;

    FSheetTab := FSheet As IPrxTable;

    Table := FSheetTab.TabSheet;

    Range := Table.Cell(3,0);

    Formula.Origin := Range;

    // Отменим изменения в области формул

    Formula.Revert;

End Sub UserProc;


После выполнения примера будет изменена базовая ячейка области формул
 на ячейку A3, после этого изменения будут отменены.


См. также:


[IPrxFormulaIsland](IPrxFormulaIsland.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
