# IEaxGridDimensionSettings.ExpanderPosition

IEaxGridDimensionSettings.ExpanderPosition
-


# IEaxGridDimensionSettings.ExpanderPosition


## Синтаксис


ExpanderPosition: Integer;


## Описание


Свойство ExpanderPosition определяет
 позицию экспандеров для измерений.


## Комментарии


При использовании свойства ExpanderPosition
 положение экспандера изменится на «[Фиксированное](UiAnalyticalArea.chm::/TableView/Layout/Layout_Dim.htm#expanders)».
 В качестве значения указывается номер столбца, в котором будут располагаться
 экспандеры.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором EXP_REP_EP, содержащего табличный визуализатор с данными.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    Report: IEaxAnalyzer;

	    Pivot: IPivot;

	    PivotDim: IPivotDimension;

	    HeadSets: IDataAreaHeaderSettingsBase;

	    Grid: IEaxGrid;

	    DimSettings: IEaxGridDimensionSettings;

	Begin

	    // Получаем текущий репозиторий

	    mb := MetabaseClass.Active;

	    // Получаем экспресс-отчёт

	    Report := mb.ItemById("EXP_REP_EP").Edit As IEaxAnalyzer;

	    // Получаем объект, используемый для построения таблицы данных

	    Pivot := Report.Pivot;

	    // Получаем первое измерение в боковике таблицы

	    PivotDim := Pivot.LeftHeader.PivotDim(0);

	    HeadSets := PivotDim As IDataAreaHeaderSettingsBase;

	    // Получаем таблицу

	    Grid := Report.Grid;

	    // Указываем, что элементы измерения будут отображаться в виде гиперссылок

	    Grid.ViewSettings.HyperlinkAsText := False;

	    // Получаем настройки первого измерения в боковике таблицы

	    DimSettings := Grid.ViewSettings.GetViewSettings(HeadSets) As IEaxGridDimensionSettings;

	    // Задаём позицию экспандера

	    DimSettings.ExpanderPosition := 1;

	    // Задаём позицию отступа

	    DimSettings.HierarchyIndentPosition := 2;

	    // Задаём размер отступа

	    DimSettings.HierarchyIndent := 6;

	    // Сохраняем изменения в отчёте

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера в экспресс-отчёте для измерения боковика
 изменятся позиции экспандера, отступа и размер отступа.


См. также:


[IEaxGridDimensionSettings](IEaxGridDimensionSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
