# IPrxFormulaIslands.Add

IPrxFormulaIslands.Add
-


# IPrxFormulaIslands.Add


## Синтаксис


Add: [IPrxFormulaIsland](../IPrxFormulaIsland/IPrxFormulaIsland.htm);


## Описание


Метод Add осуществляет добавление
 области формул.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта с идентификатором REPORT, в котором содержатся целые числа в ячейках
 А0, B0.


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

Begin

    MB := MetabaseClass.Active;

    // Получим регламентный отчёт

    MObj := MB.ItemById("REPORT").Edit;

    Report := MObj As IPrxReport;

    FSheet := Report.ActiveSheet;

    // Получим область формул

    FormulaIs := Report.FormulaIslands;

    // Добавим новую область формул

    Formula := FormulaIs.Add;

    Formula.Sheet := FSheet;

    FSheetTab := FSheet As IPrxTable;

    Table := FSheetTab.TabSheet;

    // Зададим базовую ячейку

    Formula.Origin := Table.Cell(0,2);

    // Зададим диапазон ячеек

    Formula.Range := Table.Cells(0,2,5,7);

    // Зададим формулу

    Formula.Formula := "A0+B0";

    // Сохраним изменения в области формул

    Formula.Save;

    // Вычислим область формул

    Formula.Recalc;

    // Сохраним изменения в отчёте

    MObj.Save;

End Sub UserProc;


После выполнения примера на активном листе регламентного отчета будет
 создана область формул. Базовая ячейка С0, диапазон ячеек C0:H5, формула
 «A0+B0».


См. также:


[IPrxFormulaIslands](IPrxFormulaIslands.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
