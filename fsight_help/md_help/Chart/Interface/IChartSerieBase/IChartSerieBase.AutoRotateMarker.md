# IChartSerieBase.AutoRotateMarker

IChartSerieBase.AutoRotateMarker
-


# IChartSerieBase.AutoRotateMarker


## Синтаксис


		AutoRotateMarker: Boolean;


## Описание


Свойство AutoRotateMarker определяет,
 установлен ли на диаграмме автоматический поворот [маркера](UiDiagrams.chm::/Tuning_format/Format_line/Markers_Setup.htm)
 для ряда данных.


## Комментарии


Для использования свойства AutoRotateMarker
 необходимо присвоить значение «TriangleUp»/«TriangleDown»/«Rhombus»
 свойству [IChartMarker.MarkerType](../IChartMarker/IChartMarker.MarkerType.htm)
 или выбрать [тип
 маркера](UiDiagrams.chm::/Tuning_format/Format_line/Markers_Setup.htm#marker_type) «Треугольник»/«Обратный треугольник»/«Ромб»
 на диаграммах:


	- линейная;


	- точечная;


	- лепестковая;


	- ступенчатая.


В зависимости от изменения значений линейного ряда диаграммы угол наклона
 маркера динамически изменяется.


## Пример


Для выполнения
 примера предполагается наличие регламентного отчёта с идентификатором
 «REGULAR_REPORT», в котором содержится линейная диаграмма с двумя рядами
 данных и [маркерами](UiDiagrams.chm::/Tuning_format/Format_line/Markers_Setup.htm)
 в виде треугольника.


В модуле подключите системные сборки: Chart, Metabase, Report, Tab.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    Report: IPrxReport;

		    Sheet: ITabSheet;

		    Chart: IChart;

		Begin

		    // Получим текущий репозиторий
		 и регламентный отчёт

		    Mb := MetabaseClass.Active;

		    Report := MB.ItemById("REGULAR_REPORT").Edit As IPrxReport;

		    // Получим диаграмму
		 отчёта

		    Sheet := (Report.Sheets.Item(0) As IPrxTable).TabSheet;

		    // Установим для
		 рядов данных автоматический поворот маркеров

		    Chart := Sheet.Objects.Item(0).Extension As IChart;

		    Chart.Series.Item(0).AutoRotateMarker := True;

		    Chart.Series.Item(1).AutoRotateMarker := True;

		    // Сохраним регламентный отчёт

		    (Report As IMetabaseObject).Save;

		End Sub UserProc;


После выполнения примера, на диаграмме регламентного отчёта, направление
 маркеров будет зависеть от значений ряда.


См. также:


[IChartSerieBase](IChartSerieBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
