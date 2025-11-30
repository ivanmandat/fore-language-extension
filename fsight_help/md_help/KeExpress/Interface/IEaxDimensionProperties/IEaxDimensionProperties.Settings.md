# IEaxDimensionProperties.Settings

IEaxDimensionProperties.Settings
-


# IEaxDimensionProperties.Settings


## Синтаксис


Settings(Value: [IDimHierarchyInstance](KeDims.chm::/interface/IDimHierarchyInstance/IDimHierarchyInstance.htm)):
 [IEaxHierarchySettings](../IEaxHierarchySettings/IEaxHierarchySettings.htm);


## Параметры


Value. Альтернативная иерархия.


## Описание


Свойство Settings определяет
 настройки указанной альтернативной иерархии.


## Комментарии


Для создания настроек используйте класс [EaxHierarchySettings](../../Class/EaxHierarchySettings/EaxHierarchySettings.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчета
 с идентификатором EAX_DIMPROP, содержащего пользовательскую альтернативную
 иерархию.


Добавьте ссылки на системные сборки: Dimension, Express, Metabase, Pivot,
 Tab.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Grid: IEaxGrid;

	    Pivot: IPivot;

	    PvtHeader: IPivotHeader;

	    PvtDim: IPivotDimension;

	    ViewSettings: IEaxGridViewSettings;

	    HeaderProp: IEaxGridHeaderProperties;

	    DimProp: IEaxDimensionProperties;

	    Hier: IEaxDataAreaHierarchy;

	    Sett: IEaxHierarchySettings;

	    DimSel: IDimSelection;

	    DimEl: String;

	    CellStyle: IEaxDataAreaCellStyle;

	Begin

	    // Получаем текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получаем экспресс-отчет

	    Express := MB.ItemById("EAX_DIMPROP").Edit As IEaxAnalyzer;

	    // Получаем таблицу данных отчета

	    Grid := Express.Grid;

	    // Получаем параметры отображения таблицы данных отчета

	    ViewSettings := Grid.ViewSettings;

	    // Получаем объект, на котором строится таблица данных

	    Pivot := Grid.Pivot;

	    // Получаем боковик таблицы

	    PvtHeader := Pivot.LeftHeader;

	    // Получаем первое измерение в боковике

	    PvtDim := PvtHeader.PivotDim(0);

	    // Получаем настройки отображения первого измерения в боковике

	    HeaderProp := ViewSettings.GetViewSettings(PvtDim As IDataAreaHeaderSettingsBase);

	    DimProp := HeaderProp As IEaxDimensionProperties;

	    // Получаем альтернативную иерархию

	    Hier := Express.DataArea.Hierarchies.Item(0);

	    // Получаем настройки альтернативной иерархии

	    Sett := DimProp.Settings(Hier.Hierarchy);

	    // Изменяем выравнивание заголовка для первого элемента альтернативной иерархии

	    DimSel := PvtDim.DimInstance.CreateSelection;

	    DimSel.SelectAll;

	    DimEl := DimSel.Dimension.Elements.Id(DimSel.Element(0));

	    CellStyle := Sett.CellStyle(DimEl);

	    CellStyle.Header.HorizontalAlignment := TabFormatAlignment.Center;

	    // Сохраняем изменения

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будет изменено оформление заголовка
 для первого элемента альтернативной иерархии.


См. также:


[IEaxDimensionProperties](IEaxDimensionProperties.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
