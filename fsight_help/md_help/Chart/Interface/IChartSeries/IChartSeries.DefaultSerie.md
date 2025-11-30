# IChartSeries.DefaultSerie

IChartSeries.DefaultSerie
-


# IChartSeries.DefaultSerie


## Синтаксис


		DefaultSerie: [IChartSerieBase](../IChartSerieBase/IChartSerieBase.htm);


## Описание


Свойство DefaultSerie определяет
 настройки ряда данных по умолчанию.


## Комментарии


Настройки ряда по умолчанию используют все новые создаваемые ряды диаграммы,
 а также те ряды, для которых не заданы собственные настройки.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта с идентификатором REPORT. В отчёте на активном листе создана диаграмма.


Добавьте ссылки на системные сборки: Chart, Drawing, Metabase, Report,
 Tab.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    Rep: IPrxReport;

		    Tab: ITabSheet;

		    Chart: IChart;

		    Serie: IChartSerieBase;

		    Shadow: IChartShadow;

		Begin

		    Mb := MetabaseClass.Active;

		    Rep := Mb.ItemById("REPORT").Edit As IPrxReport;

		    Tab := (Rep.ActiveSheet As IPrxTable).TabSheet;

		    Chart := Tab.Objects.Item(0) As IChart;

		    Tab.BeginUpdate;

		    //Настройки ряда по умолчанию

		    Serie := Chart.Series.DefaultSerie;

		    Serie.DefaultLabel.Position := ChartLabelPosition.AutoPlacement;

		    Serie.Is3DBorder := True;

		    Serie.DisplayShadow := True;

		    Shadow := Serie.Shadow;

		    Shadow.Color := GxColor.FromKnownColor(GxKnownColor.DarkGray);

		    Shadow.Direction := New GxPointF.Create(0.5,0.5);

		    Tab.EndUpdate;

		    //Сохранение отчёта

		    (Rep As IMetabaseObject).Save;

		End Sub UserProc;


При выполнении примера будут изменены настройки ряда диаграммы по умолчанию:
 подписи рядов будут располагаться автоматически, будет использоваться
 3D-стиль границ рядов, а также будет отображаться тень для рядов. Все
 ряды диаграммы, для которых не определены собственные настройки, будут
 использовать указанные настройки.


См. также:


[IChartSeries](IChartSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
