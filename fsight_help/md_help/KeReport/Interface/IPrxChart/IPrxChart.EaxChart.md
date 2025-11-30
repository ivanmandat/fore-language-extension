# IPrxChart.EaxChart

IPrxChart.EaxChart
-


# IPrxChart.EaxChart


## Синтаксис


		EaxChart: [IEaxChart](KeExpress.chm::/Interface/IEaxChart/IEaxChart.htm);


## Описание


Свойство EaxChart определяет
 диаграмму, источником данных которой является аналитическая область данных.


## Комментарии


Для определения типа источника диаграммы используйте свойство [IPrxChart.SourceType](IPrxChart.SourceType.htm).


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «REGULAR_REPORT». На листе отчета размещена аналитическая
 область данных.


Добавьте ссылки на системные сборки Drawing, Express, Metabase, Report,
 Tab.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Report: IPrxReport;

		    Table: IPrxTable;

		    TabObj: ITabObjects;

		    Placement: IGxRectF;

		    prx_chart: IPrxChart;

		    DArea: IEaxDataArea;

		    eax_da: IEaxDataAreaViews;

		    eax_obj: IEaxObject;

		    eax_chart: IEaxChart;

		Begin

		    MB := MetabaseClass.Active;

		    Report := MB.ItemById("REGULAR_REPORT").Edit As IPrxReport;

		    Table := Report.ActiveSheet As IPrxTable;

		    TabObj := Table.TabSheet.Objects;

		    TabObj.Clear;

		    Placement := New GxRectF.Create(10, 10, 150, 100);

		    // Создание новой диаграммы и настройка её параметров

		    prx_chart := TabObj.Add("PrxChart", Placement).Extension As IPrxChart;

		    prx_chart.SourceType := PrxChartSourceType.EaxChart;

		    prx_chart.Name := "Данные за всё время";

		    // Источник данных для диаграммы:

		    DArea := Report.DataArea;

		    eax_da := DArea.Slices.Item(0).Views;

		    eax_obj := eax_da.AddByType(EaxObjectType.Chart);

		    eax_chart := eax_obj As IEaxChart;

		    eax_chart.Visible := True;

		    eax_chart.Enabled := True;

		    prx_chart.EaxChart := eax_chart;

		    (Report As IMetabaseObject).Save;

		End Sub UserProc;


При выполнении примера на лист регламентного отчета будет добавлена
 диаграмма, источником данных которой является аналитическая область данных.


См. также:


[IPrxChart](IPrxChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
