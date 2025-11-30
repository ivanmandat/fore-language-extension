# IPrxChart.Points

IPrxChart.Points
-


# IPrxChart.Points


## Синтаксис


Points: String;


## Описание


Свойство Points определяет адрес
 диапазона, из которого будут браться наименования точек диаграммы.


## Пример


Для выполнения примера предполагается наличие диаграммы в регламентном
 отчете с идентификатором REGULAR_REPORT_POINTS и данных в ячейках B4:F8,
 A4:A8 и B1:F1.


Подключите системные сборки: Metabase, Report, Tab, Drawing.


	Sub UserProc;

	Var

	    Report: IPrxReport;

	    Chart: IPrxChart;

	    Sheets: IPrxSheets;

	    Sheet: ITabSheet;

	    MB: IMetabase;

	    Style: ITabCellStyle;

	    Arr: array Of integer;

	    i: integer;

	Begin

	    //Подключение к регламентному отчету

	    MB := MetabaseClass.Active;

	    Report := MB.ItemById("REGULAR_REPORT_POINTS").Edit As IPrxReport;

	    Sheets := Report.Sheets;

	    Sheet := (Sheets.Item(0) As IPrxTable).TabSheet;

	    Chart := Sheet.Objects.Item(0).Extension As IPrxChart;

	    Chart.Sheet := Sheets.FindByName("Лист1");

	    //Определение диапазона числовых данных, наименования рядов и точек

	    Chart.Data := "B4:F8";

	    Chart.Series := "A4:A8";

	    Chart.Points := "B1:F1";

	    //Отключение функции "Автоматически изменять диапазоны" данных диаграммы

	    Chart.AutoAdjust := False;

	    //Диапазон таблицы данных, по которым строится диаграмма, закрашивается в заданный цвет

	    Style := Chart.DataRange.Style;

	    Style.BackgroundBrush := New GxSolidBrush.Create(GxColor.FromName("Blue"));

	    //Определение скрытых данных на оси категорий

	    Arr := Chart.ExcludedPoints;

	    Debug.WriteLine("Cкрытые точки: ");

	    For Each i In Arr Do

	        Debug.WriteLine(Chart.PointNameByIndex(i));

	    End For;

	    //Отключение функции "Отображать скрытые данные" диаграммы

	    Chart.IncludeHidden := False;

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


В регламентном отчете будут изменены исходные данные диаграммы.


См. также:


[IPrxChart](IPrxChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
