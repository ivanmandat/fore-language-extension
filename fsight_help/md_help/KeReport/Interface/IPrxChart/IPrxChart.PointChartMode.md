# IPrxChart.PointChartMode

IPrxChart.PointChartMode
-


# IPrxChart.PointChartMode


## Синтаксис


PointChartMode: [PrxPointChartMode](../../Enums/PrxPointChartMode.htm);


## Описание


Свойство PointChartMode определяет
 способ передачи данных.


## Комментарии


Свойство используется для точечной диаграммы.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT, в котором присутствует диаграмма и исходные
 данные для диаграммы в ячейках B4:F8, A4:A8 и B1:F1.


Добавьте ссылки на системные сборки: Drawing, Chart, Metabase, Report,
 Tab.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    Table: IPrxTable;

	    TabObj: ITabObject;

	    Chart: IPrxChart;

	    Style: ITabCellStyle;

	Begin

	    // Получаем текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получаем регламентный отчёт

	    Report := MB.ItemById("REPORT").Edit As IPrxReport;

	    // Получаем диаграмму

	    Table := Report.ActiveSheet As IPrxTable;

	    TabObj := Table.TabSheet.Objects.Item(0);

	    Chart := TabObj.Extension As IPrxChart;

	    // Отключаем обновление диграммы

	    Chart.BeginUpdate;

	    // Указываем исходные данные диаграммы

	    Chart.Data := "B4:F8";

	    Chart.Series := "A4:A8";

	    Chart.Points := "B1:F1";

	    Chart.SeriesInRows := False;

	    // Определяем порядок формирования значений для наименования точек диаграммы

	    Chart.PointsSimple := True;

	    Chart.SeriesSimple := True;

	    // Определяем цвет заливки для диапазона, содержащего наименования точек диаграммы

	    Style := Chart.PointsRange.Style;

	    Style.BackgroundBrush := New GxSolidBrush.Create(GxColor.FromName("Green"));

	    // Определяем цвет заливки для диапазона, содержащего наименования рядов диаграммы

	    Style := Chart.SeriesRange.Style;

	    Style.BackgroundBrush := New GxSolidBrush.Create(GxColor.FromName("Red"));

	    // Определяем тип диаграммы

	    (Chart As IChart).Type := ChartType.Points;

	    // Определяем способ передачи данных

	    Chart.PointChartMode := PrxPointChartMode.YXYX;

	    // Применяем обновление

	    Chart.EndUpdate;

	    // Сохраняем отчёт

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будут:


	- изменены исходные данные диаграммы, тип диаграммы;


	- задана заливка для диапазона, содержащего наименования точек
	 диаграммы, порядок формирования значений для наименования точек и
	 способ передачи данных.


См. также:


[IPrxChart](IPrxChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
