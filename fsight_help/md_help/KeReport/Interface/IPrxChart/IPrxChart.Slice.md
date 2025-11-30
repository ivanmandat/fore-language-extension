# IPrxChart.Slice

IPrxChart.Slice
-


# IPrxChart.Slice


## Синтаксис


Slice : [IPrxSlice](../IPrxSlice/IPrxSlice.htm);


## Описание


Свойство Slice определяет срез,
 который будет использоваться в качестве источника данных для диаграммы.


## Комментарии


Для использования среза в качестве источника необходимо в свойстве [IPrxChart.SourceType](IPrxChart.SourceType.htm) установить
 значение Slice.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT, в котором присутствует диаграмма. В качестве
 источника данных для отчёта используется куб с идентификатором CUBE.


Добавьте ссылки на системные сборки: Chart, Metabase, Report, Tab.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    Table: IPrxTable;

	    TabObj: ITabObject;

	    Chart: IPrxChart;

	    Source: IPrxDataSource;

	    Slices: IPrxSlices;

	Begin

	    // Получаем текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получаем регламентный отчёт

	    Report := MB.ItemById("OBJ379455_COPY1").Edit As IPrxReport;

	    // Получаем диаграмму

	    Table := Report.ActiveSheet As IPrxTable;

	    TabObj := Table.TabSheet.Objects.Item(0);

	    Chart := TabObj.Extension As IPrxChart;

	    // Указываем исходные данные для диаграммы

	    Source := Report.DataSources.FindById("CUBE_SEP");

	    Slices := Source.Slices;

	    Slices.Clear;

	    Slices.Add;

	    Chart.Sheet := Report.Sheets.FindByName("Лист1");

	    Chart.SourceType := PrxChartSourceType.Slice;

	    Chart.Slice := Source.Slices.FindByName("Slice");

	    // Сохраняем отчёт

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в качестве источника данных для диаграммы будет
 использован срез.


См. также:


[IPrxChart](IPrxChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
