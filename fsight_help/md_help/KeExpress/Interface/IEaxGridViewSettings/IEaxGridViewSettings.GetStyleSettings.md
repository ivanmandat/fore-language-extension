# IEaxGridViewSettings.GetStyleSettings

IEaxGridViewSettings.GetStyleSettings
-


# IEaxGridViewSettings.GetStyleSettings


## Синтаксис


GetStyleSettings(Value: [IDataAreaHeaderStyleSettingsBase](ForeSys.chm::/Interface/IDataAreaHeaderSettingsBase/IDataAreaHeaderSettingsBase.htm)):
 [IEaxDataAreaCellStyle](../IEaxDataAreaCellStyle/IEaxDataAreaCellStyle.htm);


## Параметры


Value. Элемент заголовка, для
 которого необходимо получить настройки стиля оформления.


## Описание


Свойство GetStyleSettings возвращает
 настройки стиля оформления для указанного элемента заголовка.


## Комментарии


В качестве значения параметра Value
 могут указываться следующие элементы:


	- заголовок измерения, описываемого интерфейсом [IPivotDimension](KePivot.chm::/Interface/IPivotDimension/IPivotDimension.htm);


	- заголовок уровня измерения, описываемого интерфейсом [IPivotDimensionLevel](KePivot.chm::/Interface/IPivotDimensionLevel/IPivotDimensionLevel.htm);


	- заголовок области данных, описываемый интерфейсом [IPivotHeader](KePivot.chm::/Interface/IPivotHeader/IPivotHeader.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS_REPORT. Календарное измерение источника имеет
 идентификатор CALENDAR и в отчете расположено по столбцам.


Добавьте ссылки на системные сборки: Drawing, Express, System, Metabase,
 Pivot, Tab.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Pivot: IPivot;

	    PivotDim: IPivotDimension;

	    Grid: IEaxGrid;

	    CellStyle: IEaxDataAreaCellStyle;

	    HeaderStyle: ITabCellStyle;

	    DimKey: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    // Экспресс-отчет

	    Express := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    Pivot := Express.Pivot;

	    // Календарное измерение

	    DimKey := Pivot.Selection.FindById("CALENDAR").Dimension.Key;

	    PivotDim := Pivot.Dimensions.FindByKey(DimKey);

	    Grid := Express.Grid;

	    CellStyle := Grid.ViewSettings.GetStyleSettings(PivotDim As IDataAreaHeaderStyleSettingsBase);

	    // Cтиль оформления

	    HeaderStyle := Grid.Style.TopHeaderStyle;

	    HeaderStyle.Font.Bold := TriState.OnOption;

	    HeaderStyle.BackgroundBrush := New GxSolidBrush.Create(GxColor.FromKnownColor(GxKnownColor.YellowGreen));

	    // Применим стиль

	    CellStyle.Header := HeaderStyle;

	    // Сохраним отчет

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


При выполнении примера будет изменён стиль оформления для ячеек, расположенных
 в заголовке столбцов экспресс-отчета.


См. также:


[IEaxGridViewSettings](IEaxGridViewSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
