# IChartDateAxisSettings.Max

IChartDateAxisSettings.Max
-


# IChartDateAxisSettings.Max


## Синтаксис


Max: DateTime;


## Описание


Свойство Max определяет
 максимальное значение на оси дат.


## Комментарии


Свойство доступно и может быть сохранено только для оси Х. Свойство
 Max учитывается, если выполняются
 условия:


	- свойство [IChartAxis.AxisType](../IChartAxis/IChartAxis.AxisType.htm)
	 должно принимать значение [ChartAxisType.DateAxis](../../Enums/ChartDateAxisUnit.htm);


	- свойство [IChartAxis.AutoMin](../IChartAxis/IChartAxis.AutoMin.htm)
	 должно принимать значение False.


## Пример


Для выполнения примера в репозитории необходимо наличие регламентного
 отчета с идентификатором «REGULAR_REPORT_AXISTYPE». Данный отчет должен
 содержать только линейную диаграмму с данными.

Подключите системные сборки: Chart, Metabase, Report, Tab.


	Sub Userproc;

	Var

	    mb: IMetaBase;

	    regrep: IPrxReport;

	    chart: IChart;

	    sheet: IPrxSheet;

	    table: ITabSheet;

	    objects: ITabObjects;

	    axis1: IChartAxis;

	    settings: IChartDateAxisSettings;

	Begin

	    // Открываем регламентный отчет для редактирования

	    mb := MetabaseClass.Active;

	    regrep := mb.ItemById("Regular_Report_AxisType").Edit As IPrxReport;

	    // Получаем диаграмму из регламентного отчета

	    sheet := regrep.Activesheet;

	    table := sheet.Table;

	    objects := table.Objects;

	    chart := objects.Item(0).Extension As IChart;

	    // Получаем ось Х

	    axis1 := chart.AxisX;

	    // Представим ось Х с подписями в виде дат

	    axis1.AxisType := ChartAxisType.DateAxis;

	    // Редактируем ось дат

	    settings := axis1.DateAxisSettings;

	    // Отменим автоматическую подстановку максимального и минимального значений

	    axis1.AutoMin := False;

	    axis1.AutoMax := False;

	    // Задаем минимальное значение оси дат

	    settings.Min := DateTime.Parse("02.03.2014");

	    // Задаем максимальное значение оси дат

	    settings.Max := DateTime.Parse("04.05.2014");

	    // Задаем отображение по месяцам на оси дат

	    settings.BaseUnit := ChartDateAxisUnit.Month;

	    // Задаем точку оси дат, в которой ее будет пересекать основная ось значений

	    settings.CrossAxisPositionValue := DateTime.Parse("04.04.2014");

	    //Задаем точку оси дат, с которой начинаются основные деления

	    settings.MajorTickStartAt := DateTime.Parse("01.04.2014");

	    // Задаем интервал между основными делениями

	    settings.MajorTickUnitInterval := 3;

	    // Задаем интервал между промежуточными делениями

	    settings.MinorTickUnitInterval := 1;

	    // Задаем единицы измерения основных делений

	    settings.MajorTickUnit := ChartDateAxisUnit.Month;

	    // Задаем единицы измерения промежуточных делений

	    settings.MinorTickUnit := ChartDateAxisUnit.Days;

	    // Задаем способ агрегации по среднему значению элементов оси дат

	    settings.CategoryPointCollapse := DateCategoryPointCollapseType.Total;

	    // Сохраняем изменения

	    (regrep As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера увидим, что:


	- Ось Х стала осью дат.


	- Установились заданные минимальное и максимальное значения оси
	 дат.


	- Данные на оси дат отображаются по месяцам.


	- Ось дат пересекается с осью Y в заданной точке.


	- Основные деления начинаются с заданной точки на оси дат.


	- Изменился интервал между основными делениями оси дат.


	- Изменился интервал между промежуточными делениями оси дат.


	- Для основных делений на оси дат в качестве единиц измерения
	 используются месяцы.


	- Для промежуточных делений на оси дат в качестве единиц измерения
	 используются дни.


	- Используется способ агрегации «Сумма» и дневные данные просуммируются
	 для месячной динамики.


См. также:


[IChartDateAxisSettings](IChartDateAxisSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
