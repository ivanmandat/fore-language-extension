# IChartLabel.HideOnIntersect

IChartLabel.HideOnIntersect
-


# IChartLabel.HideOnIntersect


## Синтаксис


		HideOnIntersect: Boolean;


## Описание


Свойство HideOnIntersect определяет,
 будет ли скрываться подпись при пересечении с другой подписью.


## Комментарии


Допустимые значения:


	- True. Скрывать подпись.


	- False. Не скрывать подпись.


Примечание.
 Настройка доступна только для подписей данных ряда по умолчанию.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT. В отчетё создана диаграмма с идентификатором
 PrxChart1.


Добавьте ссылки на системные сборки: Chart, Drawing, Metabase, Report,
 Tab.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    Report: IPrxReport;

		    Chart: IChart;

		    Serie: IChartSerieBase;

		    SLabel: IChartLabel;

		Begin

		    Mb := MetabaseClass.Active;

		    Report := Mb.ItemById("REPORT").Edit As IPrxReport;

		    Chart := (Report.ActiveSheet As IPrxTable).TabSheet.Objects.Object("PrxChart1").Extension As IChart;

		    // Настройки ряда по умолчанию

		    Serie := Chart.Series.DefaultSerie;

		    // Настройки подписей

		    Serie.LabelsEnabled := True;

		    SLabel := Serie.DefaultLabel;

		    SLabel.Type := ChartLabelType.Simple;

		    SLabel.Position := ChartLabelPosition.BaseInside;

		    SLabel.CustomFormat := "0,00";

		    SLabel.FontColor := GxColor.FromKnownColor(GxKnownColor.Black);

		    SLabel.HideOnIntersect := False;

		    // Сохранение изменений

		    (Report As IMetabaseObject).Save;

		End Sub UserProc;


При выполнении примера для диаграммы будут настроены подписи данных.
 Подписи будут отображаться у основания внутри, для подписей будет определён
 формат данных и цвет. Подписи не будут скрываться, если они пересекаются.


См. также:


[IChartLabel](IChartLabel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
