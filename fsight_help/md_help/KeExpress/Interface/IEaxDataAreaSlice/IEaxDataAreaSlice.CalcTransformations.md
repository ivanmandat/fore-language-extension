# IEaxDataAreaSlice.CalcTransformations

IEaxDataAreaSlice.CalcTransformations
-


# IEaxDataAreaSlice.CalcTransformations


## Синтаксис


CalcTransformations: [IEaxDataAreaTransformations](../IEaxDataAreaTransformations/IEaxDataAreaTransformations.htm);


## Описание


Свойство CalcTransformations
 возвращает коллекцию формул преобразования данных, заданных для [вычисляемых
 элементов](UiAnalyticalArea.chm::/Work_with_dimensions/Edited_elements.htm).


## Комментарии


Вычисляемые элементы создаются в [конструируемом
 справочнике](../IEaxDataAreaHierarchy/IEaxDataAreaHierarchy.CustomDimension.htm) отдельной альтернативной иерархии. Альтернативная иерархия
 должна быть [создана](../IEaxDataAreaHierarchies/IEaxDataAreaHierarchies.Add.htm)
 для того измерения, в котором необходимо использовать вычисляемые элементы.
 Для каждого вычисляемого элемента в коллекции CalcTransformations
 создаётся собственная формула преобразования данных, по которой будут
 вычисляться значения.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта с идентификатором REPORT. В отчете создана аналитическая область
 данных, среди измерений источника имеется измерение с идентификатором
 REGIONS.


Добавьте ссылки на системные сборки: Dal, Dimensions, Express, Metabase,
 Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    DataArea: IEaxDataArea;

	    DataAreaSlice: IEaxDataAreaSlice;

	    DimSS: IDimSelectionSet;

	    DimS: IDimSelection;

	    Hierarchies: IEaxDataAreaHierarchies;

	    Hierarchy: IEaxDataAreaHierarchy;

	    CustomDim: ICustomDimension;

	    Elements: ICustomDimElements;

	    Attributes: ICustomDimAttributes;

	    NameAttribute: ICustomDimAttribute;

	    Transform: IEaxDataAreaTransformation;

	    hKey, newElIndex, ElId: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Report := MB.ItemById("REPORT").Edit As IPrxReport;

	    DataArea := Report.DataArea As IEaxDataArea;

	    DataAreaSlice := DataArea.Slices.Item(0);

	    //Измерение источника

	    DimSS := DataAreaSlice.Selection;

	    DimS := DimSS.FindById("REGIONS");

	    //Создадим вычисляемый элемент на базе созданного параметра

	    Hierarchies := DataArea.Hierarchies;

	    //Уникальный ключ иерархии

	    hKey := Hierarchies.CreateKey(DataAreaSlice.Key, DimS.Dimension.Key);

	    //Получим альтернативную иерархию по ее ключу

	    Hierarchy := Hierarchies.FindByKey(hKey);

	    //Если иерархия не найдена по ключу, то создадим её

	    If Hierarchy = Null Then

	        Hierarchy := Hierarchies.Add(DataAreaSlice, DimS, hKey);

	    End If;

	    //Получим измерение фактов

	    CustomDim := Hierarchy.CustomDimension;

	    //Получим элементы и индексы атрибутов измерения фактов

	    Elements := CustomDim.Elements;

	    Attributes := CustomDim.Attributes;

	    NameAttribute := Attributes.Name;

	    //Создание нового элемента

	    newElIndex := Elements.Add;

	    ElId := Elements.RowCount + 1;

	    //Значения атрибутов для нового элемента

	    Elements.AttributeValueByKey(newElIndex, NameAttribute.Key) := "Calculated element";

	    Elements.AttributeValueByKey(newElIndex, Attributes.Id.Key) := ElId.ToString;

	    Elements.AttributeValueByKey(newElIndex, Attributes.Order.Key) := ElId;

	    //Применение изменений к измерению с альтернативной иерархией

	    Hierarchies.PushChangesToDimInstance(DimS, CustomDim);

	    newElIndex := DimS.Dimension.Elements.FindById(ElId.ToString);

	    //Формула трансформации для вычисляемого элемента

	    Transform := DataAreaSlice.CalcTransformations.Add(DimSS, DimS, newElIndex);

	    Transform.Enabled := True;

	    Transform.Expression.AsString := '{' + Elements.AttributeValueByKey(0, NameAttribute.Key) + "[t]}+{" + Elements.AttributeValueByKey(1, NameAttribute.Key) + "[t]}";

	    Hierarchies.AddDependant(DimS, hKey, DimSS, ElId.ToString, Transform);

	    //Сохранение

	    Report.MetabaseObject.Save;

	End Sub UserProc;


При выполнении примера будет осуществлена доработка среза аналитической
 области данных:


	- для измерения REGIONS будет создана альтернативная иерархия,
	 в которой будет добавлен вычисляемый элемент;


	- для вычисляемого элемента будет задана формула трансформации,
	 по которой будут суммироваться значения двух первых элементов измерения.


См. также:


[IEaxDataAreaSlice](IEaxDataAreaSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
