# IEaxDataAreaSlice.FilterTransformations

IEaxDataAreaSlice.FilterTransformations
-


# IEaxDataAreaSlice.FilterTransformations


## Синтаксис


FilterTransformations: [IEaxDataAreaTransformations](../IEaxDataAreaTransformations/IEaxDataAreaTransformations.htm);


## Описание


Свойство FilterTransformations
 возвращает коллекцию формул преобразования данных, заданных при [фильтрации](UiAnalyticalArea.chm::/Working_with_table_data/Filtering.htm).


## Комментарии


Формула, которая будет указана в [выражении](../IEaxDataAreaTransformation/IEaxDataAreaTransformation.Expression.htm)
 формулы преобразования, должна возвращать логическое значение. Для включения
 фильтрации по формуле необходимо установить свойствам [Pivot](../IEaxDataAreaPivotSlice/IEaxDataAreaPivotSlice.Pivot.htm).[Filter](KePivot.chm::/Interface/IPivot/IPivot.Filter.htm).[Enable](KePivot.chm::/Interface/IPivotFilterSettings/IPivotFilterSettings.Enabled.htm)
 и [Pivot](../IEaxDataAreaPivotSlice/IEaxDataAreaPivotSlice.Pivot.htm).[Filter](KePivot.chm::/Interface/IPivot/IPivot.Filter.htm).[UseTransformationFilter](KePivot.chm::/Interface/IPivotFilterSettings/IPivotFilterSettings.UseTransformationFilter.htm)
 значение True. Если для ячейки
 по заданной формуле возвращается значение True,
 то ячейка попадает в список фильтруемых и должна быть скрыта, при значении
 False - оставлена видимой. Какие
 именно ячейки будут скрыты зависит от настроек, заданных в других свойствах
 интерфейса [IPivotFilter](KePivot.chm::/Interface/IPivotFilter/IPivotFilter.htm).


## Пример


Для выполнения примера предполагается наличие регламентного отчёта с
 идентификатором REPORT. В отчете создана аналитическая область данных.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    DataArea: IEaxDataArea;

	    DataAreaSlice: IEaxDataAreaSlice;

	    DimSS: IDimSelectionSet;

	    Transforms: IEaxDataAreaTransformations;

	    Transform: IEaxDataAreaTransformation;

	    Filter: IPivotFilter;

	Begin

	    MB := MetabaseClass.Active;

	    Report := MB.ItemById("REPORT").Edit As IPrxReport;

	    DataArea := Report.DataArea As IEaxDataArea;

	    DataAreaSlice := DataArea.Slices.Item(0);

	    //Измерение источника

	    DimSS := DataAreaSlice.Selection;

	    //Получим формулу преобразования для фильтрации

	    Transforms := DataAreaSlice.FilterTransformations;

	    If Transforms.Count > 0 Then

	        Transform := Transforms.Item(0);

	    Else

	        Transform := Transforms.Add(DimSS, Null, -1);

	    End If;

	    //Зададим формулу: фильтровать элементы, по которым значение больше 1000

	    Transform.Enabled := True;

	    Transform.Expression.AsString := "{X[t]} > 1000";

	    //Включим использование фильтрации по формуле

	    Filter := (DataAreaSlice As IEaxDataAreaPivotSlice).Pivot.Filter;

	    Filter.Enabled := True;

	    Filter.Elements := PivotFilterElements.Rows;

	    Filter.UseTransformationFilter := True;

	    //Обновим, чтобы отображались только отфильтрованные данные

	    DataAreaSlice.Views.Item(0).Refresh;

	    //Сохранение

	    Report.MetabaseObject.Save;

	End Sub UserProc;


При выполнении примера в аналитической области будет включена фильтрация
 данных по формуле: будут скрыты строки, в которых значение всех ячеек
 больше 1000.


См. также:


[IEaxDataAreaSlice](IEaxDataAreaSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
