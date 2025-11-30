# Настройка среза данных, области данных, аналитической области данных

Настройка среза данных, области данных, аналитической области данных
-


# Настройка среза данных, области данных, аналитической области данных


В регламентном отчёте существуют различные типы областей данных:


	- [Область
	 данных](UiReport.chm::/desktop/AreaData/UiReport_AreaData.htm). Устаревший тип таблицы с данными,
	 построенный на основе среза данных. Используется только в инструменте
	 продукта «Форсайт. Аналитическая платформа»
	 «[Отчёты](UIReport.chm::/UiReport_purpose.htm)»
	 и рассчитывается только с помощью формул;


	- [Табличный визуализатор](UiAnalyticalArea.chm::/Table.htm).
	 Новый тип таблицы с данными, построенной на основе среза. В отличие
	 от области данных используется во всех инструментах отчётности и рассчитывается
	 методами моделирования. Для работы используйте интерфейс [IEaxGrid](keexpress.chm::/interface/ieaxgrid/ieaxgrid.htm);


	- Аналитическая область данных.
	 Объект, включающий источники, срезы, визуализаторы, трансформации,
	 валидации отчёта. Используется во всех инструментах отчётности. Для
	 работы используйте интерфейс [IEaxDataArea](keexpress.chm::/interface/ieaxdataarea/ieaxdataarea.htm).


## Настройка среза данных и области данных


Рассмотрим пример добавления в регламентный отчёт среза данных для ранее
 добавленного [источника данных](KeReport_Programming_Source.htm),
 на котором будет построена область данных.


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта с идентификатором REPORT_INTRO.


Добавьте ссылки на системные сборки: Metabase, Report, Tab.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Report: IPrxReport;

	    DtSources: IPrxDataSources;

	    DtSource: IPrxDataSource;

	    Slices: IPrxSlices;

	    Slice: IPrxSlice;


	    DataIsland: IPrxDataIslands;

	    DI: IPrxDataIsland;

	    Range: ITabRange;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("REPORT_INTRO").Edit;

	    Report := MObj As IPrxReport;

	    // Добавим срез

	    DtSources := Report.DataSources;

	    DtSource := DtSources.Item(0);

	    Slices := DtSource.Slices;

	    Slice := Slices.Add;


	    Slice.Execute;

	    // Добавим области данных

	    DataIsland := Report.DataIslands;

	    DI := DataIsland.Add;

	    // Выберем лист отчёта

	    DI.Sheet := Report.Sheets.Item(0);

	    // Определим срез, являющийся источником для области данных

	    DI.Slice := DtSource.Slices.Item(0);

	    // Определим диапазон ячеек, в котором расположена область данных

	    Range := Report.ParseCell(DI.Sheet.Name+"!A0").Range;

	    DI.Range := Range;

	    MObj.Save;

	End Sub UserProc;


В результате выполнения примера для источника данных регламентного отчёта
 будет добавлен срез, на основании добавленного среза будет построена область
 данных и размещена на указанном листе.


## Настройка аналитической области данных, среза данных и табличного визуализатора


Рассмотрим пример настройки в регламентном отчёте аналитической области
 данных, среза и табличного визуализатора.


Для выполнения примера в репозитории необходимо наличие:


	- регламентного отчёта с идентификатором REPORT;


	- куба с идентификатором CUBE_SEP, содержащего пять измерений.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Drawing, Express,
 Matrix, Metabase, Pivot, Report, Tab.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    DA: IEaxDataArea;

	    Slice: IEaxDataAreaSlice;

	    DtSource: IPrxDataSource;

	    Pivot: IPivot;

	    CubeInst: ICubeInstance;

	    View: IEaxObject;

	    Sheet: IPrxSheet;

	    Table: ITabSheet;

	    Grid: IEaxGrid;

	    Style: IEaxTableStyle;

	    Rect: IGxRect;

	    ViewSets: IEaxGridViewSettings;

	    T_Header, L_Header: IDataAreaHeaderSettingsBase;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим регламентный отчёт

	    Report := MB.ItemById("REPORT").Edit As IPrxReport;

	    // Получим аналитическую
	 область данных

	    DA := Report.DataArea;

	    DA.Clear;

	    Report.DataSources.Clear;

	    // Добавим срез данных

	    Slice := DA.Slices.Add(EaxDataAreaSliceType.Pivot);

	    Slice.CreateSource;

	    // Получим основу для таблицы

	    Pivot := (Slice As IEaxDataAreaPivotSlice).Pivot;

	    // Получим источник

	    CubeInst := MetabaseClass.Active.ItemById("CUBE_SEP").Open(Null) As ICubeInstance;

	    // Разместим источник в основе для таблицы

	    Pivot.DataSource := CubeInst.Destinations.DefaultDestination As IMatrixDataSource;

	    DtSource := Report.DataSources.Add(Pivot.DataSource);

	    // Установим в отметку измерений элементы

	    Pivot.Selection.Item(0).SelectElement(0, False);

	    Pivot.Selection.Item(1).SelectLevel(0);

	    Pivot.Selection.Item(2).SelectElement(0, False);

	    Pivot.Selection.Item(3).SelectChildren(1, False);

	    Pivot.Selection.Item(4).SelectElement(0, False);

	    // Установим измерения в заголовки таблицы

	    Pivot.TopHeader.AddDim(Pivot.DimItem(1)); // Календарь

	    Pivot.LeftHeader.AddDim(Pivot.DimItem(3)); // Территориальные образования

	    Pivot.FixedHeader.AddDim(Pivot.DimItem(2)); // СЭП

	    Pivot.FixedHeader.AddDim(Pivot.DimItem(0)); // Факты

	    Pivot.FixedHeader.AddDim(Pivot.DimItem(4)); // Типы данных

	    // Создадим представление таблицы

	    Report.Sheets.Remove(1);

	    View := Slice.Views.AddByType(EaxObjectType.Grid);

	    Grid := View As IEaxGrid;

	    Grid.Pivot := Pivot;

	    // Добавим лист и поместим на него таблицу

	    Sheet := Report.Sheets.Add("Лист2");

	    Table := (Sheet As IPrxTable).TabSheet;

	    Grid.TabSheet := Table;

	    // Установим оформление таблицы

	    Style := Grid.Style;

	    Style.TableStyle.AssignPredefined(TabTablePredefinedStyle.ExtBlue);

	    // Установим диапазон таблицы

	    Rect := New GxRect.Create(0, 3, 0, 3);

	    (View As IEaxGrid).OutputRect := Rect;

	    // Установим методы вставки

	    ViewSets := Grid.ViewSettings;

	    T_Header := Grid.Pivot.TopHeader As IDataAreaHeaderSettingsBase;

	    (ViewSets.GetViewSettings(T_Header) As IEaxGridHeaderSettings).Behaviour := EaxGridHeaderBehaviour.Insert;

	    L_Header := Grid.Pivot.LeftHeader As IDataAreaHeaderSettingsBase;

	    (ViewSets.GetViewSettings(L_Header) As IEaxGridHeaderSettings).Behaviour := EaxGridHeaderBehaviour.Insert;

	    // Обновим отчёт и сохраним изменения

	    Report.Recalc;

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера в регламентном отчёте будет добавлен
 источник данных, в аналитической области будет создан новый срез
 данных и по нему построена таблица на втором листе отчёта.


См. также:


[Общие
 принципы программирования с использованием сборки Report](KeReport_Programming.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
