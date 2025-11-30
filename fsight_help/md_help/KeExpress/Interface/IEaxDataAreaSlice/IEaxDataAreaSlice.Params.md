# IEaxDataAreaSlice.Params

IEaxDataAreaSlice.Params
-


# IEaxDataAreaSlice.Params


## Синтаксис


Params: [IEaxDataAreaParams](../IEaxDataAreaParams/IEaxDataAreaParams.htm);


## Описание


Свойство Params возвращает параметры
 среза аналитической области данных.


## Комментарии


Параметры позволяют в формулах использовать не отдельные элементы измерений,
 а какие-либо измерения полностью.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором REPORT. В отчете создана аналитическая область
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

	    DimInst: IDimInstance;

	    Hierarchies: IEaxDataAreaHierarchies;

	    Hierarchy: IEaxDataAreaHierarchy;

	    CustomDim: ICustomDimension;

	    Elements: ICustomDimElements;

	    Attributes: ICustomDimAttributes;

	    Params: IEaxDataAreaParams;

	    Param: IEaxDataAreaParam;

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

	    DimInst := DimS.Dimension;

	    //Параметры среза аналитической области данных

	    Params := DataAreaSlice.Params;

	    //Очистка списка параметров

	    Params.Clear;

	    //Добавление нового параметра

	    Param := Params.AddNew;

	    Param.Hidden := False;

	    Param.Id := "ID1";

	    Param.Name := "Тестовый параметр";

	    Param.LinkedObject := DimInst.MetabaseObject.Object;

	    Param.DataType := DbDataType.Integer;

	    Param.DefaultValue := DimInst.Elements.Elements.Element(0);

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

	    //Создание нового элемента

	    newElIndex := Elements.Add;

	    ElId := Elements.RowCount + 1;

	    //Значения атрибутов для
	 нового элемента

	    Elements.AttributeValueByKey(newElIndex, Attributes.Name.Key) := "Calculated element";

	    Elements.AttributeValueByKey(newElIndex, Attributes.Id.Key) := ElId.ToString;

	    Elements.AttributeValueByKey(newElIndex, Attributes.Order.Key) := ElId;

	    //Применение изменений к измерению с альтернативной иерархией

	    Hierarchies.PushChangesToDimInstance(DimS, CustomDim);

	    newElIndex := DimS.Dimension.Elements.FindById(ElId.ToString);

	    //Формула трансформации для вычисляемого элемента

	    Transform := DataAreaSlice.CalcTransformations.Add(DimSS, DimS, newElIndex);

	    Transform.Enabled := True;

	    Transform.Expression.AsString := '{' + Param.Id + '}';

	    Hierarchies.AddDependant(DimS, hKey, DimSS, ElId.ToString, Transform);

	    //Сохранение

	    Report.MetabaseObject.Save;

	End Sub UserProc;


При выполнении примера будет осуществлена доработка среза аналитической
 области данных:


	- будет добавлен параметр, ссылающийся на измерение REGIONS;


	- для измерения REGIONS будет создана альтернативная иерархия,
	 в которой будет добавлен вычисляемый элемент;


	- для вычисляемого элемента будет задана формула трансформации
	 на базе созданного параметра.


См. также:


[IEaxDataAreaSlice](IEaxDataAreaSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
