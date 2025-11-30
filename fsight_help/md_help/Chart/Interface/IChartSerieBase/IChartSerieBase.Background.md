# IChartSerieBase.Background

IChartSerieBase.Background
-


# IChartSerieBase.Background


## Синтаксис


		Background: [IChartBackgroundInfo](../IChartBackgroundInfo/IChartBackgroundInfo.htm);


## Описание


Свойство Background определяет
 параметры заливки для ряда данных.


## Комментарии


Тип заливки ряда определяет свойство [Type](../IChartBackgroundInfo/IChartBackgroundInfo.Type.htm).
 Каждому типу соответствует определенный набор свойств интерфейса [IChartBackgroundInfo](../IChartBackgroundInfo/IChartBackgroundInfo.htm).


Применение типа заливки ряда имеет ограничение по типам диаграммы, описанным
 в перечислении [ChartBackgroundType](../../Enums/ChartBackgroundType.htm).


## Пример


Для выполнения примера предполагается наличие гистограммы в регламентном
 отчете с идентификатором «REGULAR_REPORT». Подключите системные сборки:
 Chart, Drawing, Metabase, Report, Tab.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Report: IPrxReport;

		    Sheet: ITabSheet;

		    Chart: IChart;

		    Serie: IChartSerie;

		Begin

		    MB := MetabaseClass.Active;

		    Report := MB.ItemById("REGULAR_REPORT").Edit As IPrxReport;

		    Sheet := (Report.Sheets.Item(0) As IPrxTable).TabSheet;

		    Chart := Sheet.Objects.Item(0).Extension As IChart;

		    Serie := Chart.Series.Item(0);

		    Serie.Background.Type := ChartBackgroundType.Gradient;

		    Serie.Background.Color := GxColor.FromName("Red");

		    Serie.Background.GradientColor := GxColor.FromName("Yellow");

		    (Report As IMetabaseObject).Save;

		End Sub UserProc;


После выполнения примера ряд диаграммы будет закрашен красно-желтым
 градиентом.


См. также:


[IChartSerieBase](IChartSerieBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
