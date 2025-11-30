# IChartSerieBase.DisplayInLegend

IChartSerieBase.DisplayInLegend
-


# IChartSerieBase.DisplayInLegend


## Синтаксис


		DisplayInLegend: Boolean;


## Описание


Свойство DisplayInLegend определяет
 признак отображения ряда в легенде.


## Комментарии


Если значение данного свойства True,
 то ряд будет отображен в легенде, при значении False
 - нет.


По умолчанию свойство имеет значение True.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта с идентификатором «Report». В отчёте на активном листе имеется
 диаграмма. Диаграмма отображает минимум один ряд.


Для выполнения примера добавьте ссылки на системные сборки «Metabase»,
 «Tab», «Chart» и «Report».


					Sub UserProc;

		Var

		    Metabase: IMetabase;

		    MetabaseObject: IMetabaseObject;

		    Report: IPrxReport;

		    Table: IPrxTable;

		    Chart: IChart;

		Begin

		    Metabase := MetabaseClass.Active;

		    MetabaseObject := Metabase.ItemById("Report").Edit;

		    Report := MetabaseObject As IPrxReport;

		    Table := Report.Sheets.Item(0) As IPrxTable;

		    Chart := Table.TabSheet.Objects.Item(0).Extension As IChart;

		    Chart.Series.Item(0).DisplayInLegend := False;

		    Report.MetabaseObject.Save;

		End Sub UserProc;


После выполнения примера в легенде будет скрыт первый ряд.


См. также:


[IChartSerieBase](IChartSerieBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
