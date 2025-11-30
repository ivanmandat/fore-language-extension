# IEaxDataAreaSliceProperties.UseCustomDimensionNamingAttribute

IEaxDataAreaSliceProperties.UseCustomDimensionNamingAttribute
-


# IEaxDataAreaSliceProperties.UseCustomDimensionNamingAttribute


## Синтаксис


UseCustomDimensionNamingAttribute(DimKey: Integer):
 Boolean;


## Параметры


DimKey. Ключ измерения.


## Описание


Свойство UseCustomDimensionNamingAttribute
 определяет, будут ли для элементов измерения использоваться пользовательские
 наименования.


## Комментарии


Допустимые значения:


	- True. Для элементов
	 измерения будут использоваться пользовательские наименования;


	- False. Для составления
	 наименований элементов измерения будут использоваться атрибуты справочника.


## Пример


Для выполнения примера предполагается наличие экспресс-отчета с идентификатором
 EXPRESS. В экспресс-отчете имеется источник данных, содержащий измерение
 с идентификатором D_TO.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    SelSet: IDimSelectionSet;

	    DimSel: IDimSelection;

	    DataArea: IEaxDataArea;

	    AreaSlice: IEaxDataAreaSlice;

	    Properties: IEaxDataAreaSliceProperties;

	    Key: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим отметку, по которой строится таблица

	    SelSet := Express.Pivot.Selection;

	    DimSel := SelSet.FindById("D_TO");

	    // Получим аналитическую область данных

	    DataArea := Express.DataArea;

	    // Получим срез источника данных

	    AreaSlice := DataArea.Slices.Item(0);

	    // Получим свойства среза источника данных

	    Properties := AreaSlice.Properties;

	    Key := DimSel.Dimension.Key;

	    Properties.UseCustomDimensionNamingAttribute(Key) := True;

	    // Сохраним отчет

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера для элементов указанного измерения будут
 использоваться пользовательские наименования.


См. также:


[IEaxDataAreaSliceProperties](IEaxDataAreaSliceProperties.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
