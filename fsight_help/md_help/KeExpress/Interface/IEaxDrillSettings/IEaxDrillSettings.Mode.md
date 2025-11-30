# IEaxDrillSettings.Mode

IEaxDrillSettings.Mode
-


# IEaxDrillSettings.Mode


## Синтаксис


Mode: [EaxDataDrillMode](../../Enums/EaxDataDrillMode.htm);


## Описание


Свойство Mode определяет способ
 изменения отметки в [расшифровке
 элементов измерения](UiAnalyticalArea.chm::/Hyperlinks/Working_with_hyperlinks.htm).


## Комментарии


По умолчанию свойство имеет значение [EaxDataDrillMode.None](../../Enums/EaxDataDrillMode.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта с идентификатором REG_MODE. Источником данных является куб, в котором
 содержится календарное измерение. Отчёт содержит один лист, на котором
 создана аналитическая область данных.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot, Report, Tab.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Rep: IPrxReport;

	    PivSlice: IEaxDataAreaPivotSlice;

	    Pivot: IPivot;

	    HeadSets: IDataAreaHeaderSettingsBase;

	    Grid: IEaxGrid;

	    DimSettings: IEaxGridDimensionSettings;

	    PivotDims: IPivotDimension;

	    DimModel: IDimensionModel;

	    DimIndex: IDimIndex;

	    Attributes: IDimAttributesInstance;

	    Attribute: IDimAttribute;

	    Drill: IEaxDrillSettings;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим регламентный отчёт

	    Rep := MB.ItemById("REG_MOVE").Edit As IPrxReport;

	    // Получим срез данных в качестве области данных таблицы отчёта

	    PivSlice := Rep.DataArea.Slices.Item(0) As IEaxDataAreaPivotSlice;

	    // Получим таблицу данных

	    Pivot := PivSlice.Pivot;

	    // Получим календарное измерение

	    PivotDims := Pivot.Dimensions.Item(1);

	    // Получим структуру измерения

	    DimModel := PivotDims.DimInstance.Dimension;

	    // Получим структуру указанного индекса измерения

	    DimIndex := DimModel.Indexes.Item(0);

	    // Получим коллекцию атрибутов измерения

	    Attributes := PivotDims.DimInstance.Attributes;

	    // Получим структуру указанного атрибута

	    Attribute := Attributes.Item(0).Attribute;

	    // Получим настройки заголовка аналитической области данных

	    HeadSets := PivotDims As IDataAreaHeaderSettingsBase;

	    // Включим настройки расшифровки для указанного представления

	    Grid := (PivSlice As IEaxDataAreaSlice).Views.Item(0) As IEaxGrid;

	    Grid.ViewSettings.HyperlinkAsText := False;

	    DimSettings := Grid.ViewSettings.GetViewSettings(HeadSets) As IEaxGridDimensionSettings;

	    If Not DimSettings.IsDrilled Then

	        DimSettings.Drilled := TriState.OnOption;

	    End If;

	    // Получим настройки расшифровки

	    Drill := DimSettings.Drill;

	    // Укажем лист

	    Drill.SheetKey := Rep.Sheets.Item(0).Key;

	    // Укажем измерение

	    Drill.Dimension := PivotDims;

	    // Установим способ изменения отметки - замена

	    Drill.Mode := EaxDataDrillMode.Replace;

	    // Установим индекс для поиска элементов

	    Drill.DimensionIndex := DimIndex;

	    // Установим атрибут поиска в индексе

	    Drill.DimensionAttribute := Attribute;

	    Drill.DimensionAttributes := "BLOCK_TYPE";

	    // При щелчке по гиперссылке будет осуществлен переход на указанный сайт

	    // Ссылка откроется в новом окне браузера

	    Drill.ActionType := TabHyperlinkActionType.OpenURL;

	    Drill.Action := "www.example.com";

	    Drill.Target := TabHyperlinkTarget.Top;

	    // Выведем в окно консоли ключ среза данных и ключ измерения

	    Debug.WriteLine("Ключ среза данных = " + Drill.SliceKey.ToString);

	    Debug.WriteLine("Ключ измерения = " + Drill.DimensionKey.ToString);

	    // Обновим отчёт и сохраним изменения

	    Rep.Recalc;

	    (Rep As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера:


	- для указанного регламентного отчёта будет использоваться расшифровка
	 элементов измерения;


	- при нажатии по элементу измерения будет осуществляться переход
	 по указанной гиперссылке;


	- в окно консоли выведутся ключи измерения и среза данных.


См. также:


[IEaxDrillSettings](IEaxDrillSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
