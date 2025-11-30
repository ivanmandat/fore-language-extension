# IEaxDataAreaSlices.Add

IEaxDataAreaSlices.Add
-


# IEaxDataAreaSlices.Add


## Синтаксис


Add(Type: [EaxDataAreaSliceType](../../Enums/EaxDataAreaSliceType.htm)):
 [IEaxDataAreaSlice](../IEaxDataAreaSlice/IEaxDataAreaSlice.htm);


## Параметры


Type. Тип среза данных.


## Описание


Метод Add создает срез аналитической
 области данных.


## Комментарии


Для очистки коллекции срезов аналитической области данных используйте
 [IEaxDataAreaSlices.Clear](IEaxDataAreaSlices.Clear.htm).


Для получения типа среза аналитической области данных используйте [IEaxDataAreaSlice.Type](../IEaxDataAreaSlice/IEaxDataAreaSlice.Type.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором REPORT. В отчете добавлен источник данных, имеющий
 в своей структуре измерения с идентификаторами CALENDAR и COUNTRY.


Добавьте ссылки на системные сборки: Dimensions, Drawing, Express, System,
 Metabase, Pivot, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    DA: IEaxDataArea;

	    Slice: IEaxDataAreaSlice;

	    Pivot: IPivot;

	    DimSS: IDimSelectionSet;

	    DimS: IDimSelection;

	    DimInst: IDimInstance;

	    View: IEaxGrid;

	    Rect: IGxRect;

	    ViewSets: IEaxGridViewSettings;

	    T_Header, L_Header: IDataAreaHeaderSettingsBase;

	Begin

	    // Получим текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получим регламентный отчет

	    Report := MB.ItemById("REPORT").Edit As IPrxReport;

	    // Получим область данных

	    DA := Report.DataArea;

	    // Добавим срез данных

	    Slice := DA.Slices.Add(EaxDataAreaSliceType.Pivot);

	    Slice.CreateSource;

	    Slice.Execute;

	    // Получим таблицу данных

	    Pivot := (Slice As IEaxDataAreaPivotSlice).Pivot;

	    // Размещаем источник в таблице

	    Pivot.DataSource := Report.DataSources.Item(0).DataSource;

	    // Размещение измерений и установка отметки

	    Pivot.BeginSelectionUpdate;

	    DimSS := Pivot.Selection;

	    For Each DimS In DimSS Do

	        DimInst := DimS.Dimension;

	        If DimInst.Ident = "COUNTRY" Then

	            Pivot.LeftHeader.AddDim(DimInst);

	            // Отметить два первых элемента

	            DimS.SelectElement(0, False);

	            DimS.SelectElement(1, False);

	        Elseif DimInst.Ident = "CALENDAR" Then

	            Pivot.TopHeader.AddDim(DimInst);

	            // Отметить элементы уровня, на котором расположен первый элемент

	            DimS.SelectSiblings(0);

	        Else

	            Pivot.FixedHeader.AddDim(DimInst);

	            // Отметить первый элемент

	            DimS.SelectElement(0, False);

	        End If;

	    End For;

	    Pivot.EndSelectionUpdate;

	    // Табличное представление данных

	    View := Slice.Views.AddByType(EaxObjectType.Grid) As IEaxGrid;

	    View.Pivot := Pivot;

	    View.TabSheet := (Report.ActiveSheet As IPrxTable).TabSheet;

	    Rect := New GxRect.Create(0, 0, 0, 0);

	    View.OutputRect := Rect;

	    // Установим методы вставки

	    ViewSets := View.ViewSettings;

	    T_Header := Pivot.TopHeader As IDataAreaHeaderSettingsBase;

	    (ViewSets.GetViewSettings(T_Header) As IEaxGridHeaderSettings).Behaviour := EaxGridHeaderBehaviour.Insert;

	    L_Header := Pivot.LeftHeader As IDataAreaHeaderSettingsBase;

	    (ViewSets.GetViewSettings(L_Header) As IEaxGridHeaderSettings).Behaviour := EaxGridHeaderBehaviour.Insert;

	    // Сохраним изменения

	    Report.MetabaseObject.Save;

	End Sub UserProc;


При выполнении примера в регламентном отчете будет создан новый срез
 данных. На базе него будет добавлена и размещена на активном листе область
 данных.


См. также:


[IEaxDataAreaSlices](IEaxDataAreaSlices.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
