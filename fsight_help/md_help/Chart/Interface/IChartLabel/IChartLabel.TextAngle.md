# IChartLabel.TextAngle

IChartLabel.TextAngle
-


# IChartLabel.TextAngle


## Синтаксис


		TextAngle: Double;


## Описание


Свойство TextAngle определяет
 угол поворота текста подписи.


## Комментарии


Допустимыми значениями являются 0, 90 и 270.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT. В отчетё создана диаграмма с идентификатором
 PrxChart1.


Добавьте ссылки на системные сборки: Chart, Metabase, Report, Tab.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    Report: IPrxReport;

		    Chart: IChart;

		    Serie: IChartSerieBase;

		    CLabel: IChartLabel;

		Begin

		    Mb := MetabaseClass.Active;

		    Report := Mb.ItemById("REPORT").Edit As IPrxReport;

		    Chart := (Report.ActiveSheet As IPrxTable).TabSheet.Objects.Object("PrxChart1").Extension As IChart;

		    // Настройки ряда по умолчанию

		    Serie := Chart.Series.DefaultSerie;

		    // Настройки подписей

		    Serie.LabelsEnabled := True;

		    CLabel := Serie.DefaultLabel;

		    CLabel.Position := ChartLabelPosition.PeakInside;

		    CLabel.TextAngle := 90;

		    // Сохранение изменений

		    (Report As IMetabaseObject).Save;

		End Sub UserProc;


При выполнении примера для диаграммы будут настроены подписи данных.
 Подписи будут отображаться у вершины внутри ряда и повёрнуты на 90 градусов.


См. также:


[IChartLabel](IChartLabel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
