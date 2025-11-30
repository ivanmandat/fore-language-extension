# IChart.ChartAsImage

IChart.ChartAsImage
-


# IChart.ChartAsImage


## Синтаксис


ChartAsImage: Boolean;


## Описание


Свойство ChartAsImage определяет
 возможность отображения диаграмм в регламентном отчете с использованием
 компонента HighChart.


## Комментарии


По умолчанию свойство находится в значении False.


Если свойство в значении True,
 то диаграммы в веб-приложении отображаются в виде изображений.


Если свойство в значении False,
 то в веб-приложении отображается HighChart-диаграмма.


В интерфейс свойство не выведено.


## Пример


Для выполнения примера предполагается наличие диаграммы в регламентном
 отчете с идентификатором «REGULAR_REPORT». Подключите системные сборки:
 Report, Tab, Chart и Metabase.


			Sub UserProc;

Var

    Report: IPrxReport;

    Chart: IChart;

    Sheet: ITabSheet;

    MB: IMetabase;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REGULAR_REPORT").Edit As IPrxReport;

    Sheet := (Report.Sheets.Item(0) As IPrxTable).TabSheet;

    Chart := Sheet.Objects.Item(0).Extension As IChart;

    Chart.ChartAsImage :=  False;

    (Report As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в веб-приложении в отчете
 будет отображаться HighChart-диаграмма.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
