# IPrxFormulaIsland.Edit

IPrxFormulaIsland.Edit
-


# IPrxFormulaIsland.Edit


## Синтаксис


Edit: [IPrxFormulaIsland](IPrxFormulaIsland.htm);


## Описание


Метод Edit открывает на редактирование
 область формул.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта с идентификатором REPORT, в котором содержится область формул.


Добавьте ссылки на системные сборки: Drawing, Metabase, Report, Tab.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Report: IPrxReport;

	    Sheets: IPrxSheets;

	    FormulaIs: IPrxFormulaIslands;

	    Formula: IPrxFormulaIsland;

	    FSheetTab: IPrxTable;

	    Table: ITabSheet;

	    Range: ITabRange;

	    Style: IPrxCellStyle;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим регламентный отчёт

	    MObj := MB.ItemById("OBJ306221").Edit;

	    Report := MObj As IPrxReport;

	    Sheets := Report.Sheets;

	    // Получим область формул

	    FormulaIs := Report.FormulaIslands;

	    Formula := FormulaIs.Item(0);

	    // Скопируем область формул

	    Formula.Copy(Sheets.Item(Sheets.Count - 1), Formula.Range);

	    // Изменим базовую ячейку области формул

	    Formula := Formula.Edit;

	    FSheetTab := Formula.Sheet As IPrxTable;

	    Table := FSheetTab.TabSheet;

	    Range := Table.Cell(1,0);

	    Formula.Origin := Range;

	    Formula.Formula := "G5";

	    // Применим стиль

	    Style := Formula.Style;

	    Style.BackgroundBrush := New GxSolidBrush.Create(GxColor.FromName("Red"));

	    Style.Font.Bold := TriState.OnOption;

	    Style.Font.Color := New GxColor.CreateRGB(0, 0, 255);

	    // Сохраним изменения в области формул

	    Formula.Save;

	    // Вычислим область формул

	    Formula.Recalc;

	    // Сохраним изменения в отчёте

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будет изменена базовая ячейка области формул
 на ячейку A1, на последнем листе регламентного отчета будет создана копия
 первой области формул, будут заданы параметры оформления и формула.


См. также:


[IPrxFormulaIsland](IPrxFormulaIsland.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
