# IMsAggregationFilterList.FindByKey

IMsAggregationFilterList.FindByKey
-


# IMsAggregationFilterList.FindByKey


## Синтаксис


FindById(DimKey: Integer): [IMsAggregationFilter](../IMsAggregationFilter/IMsAggregationFilter.htm);


## Параметры


DimKey. Ключ фильтруемого измерения.


## Описание


Метод FindByKey
 осуществляет поиск фильтра в коллекции по ключу фильтруемого измерения.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором FC. В контейнере моделирования данной
 базы должна присутствовать модель с идентификатором MODEL_AGGR, рассчитываемая
 методом расширенной агрегации. COUNTRY - атрибут показателей базы, ссылающийся
 на справочник.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms,
 Rds.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    RubrDescr: IMetabaseObjectDescriptor;

	    Rubr: IRubricator;

	    msDescr: IMetabaseObjectDescriptor;

	    Model: IMsModel;

	    Transform: IMsFormulaTransform;

	    Formula: IMsFormula;

	    Aggr: IMsCrossDimensionAggregationTransform;

	    FiltesList: IMsAggregationFilterList;

	    Filter: IMsAggregationFilter;

	    i: Integer;

	    Attributes: IMetaAttributes;

	    DictDescr: IMetabaseObjectDescriptor;

	    FilterDimension: IMetabaseObject;

	    DimInst: IDimInstance;

	    Selection: IDimSelection;

	Begin

	    mb := MetabaseClass.Active;

	    RubrDescr := mb.ItemById("FC");

	    Rubr := RubrDescr.Bind As IRubricator;

	    msDescr := Rubr.ModelSpace;

	    Model := mb.ItemByIdNamespace("MODEL_AGGR", msDescr.Key).Edit As IMsModel;

	    Transform := Model.Transform;

	    Formula := Transform.FormulaItem(0);

	    Aggr := Formula.Method As IMsCrossDimensionAggregationTransform;

	    FiltesList := Aggr.Filter;

	    Attributes := Rubr.Facts.Attributes;

	    DictDescr := Attributes.FindById("COUNTRY").ValuesObject;

	    Filter := FiltesList.FindByKey(DictDescr.Key);

	    If Filter
	 <> Null Then

	        Debug.WriteLine("Наименование фильтра: " + Filter.Name);

	        Debug.WriteLine("Отметка фильтра: " + Filter.AggregationSelection.ToString);

	    End If;

	End Sub UserProc;


В результате выполнения примера будет произведён поиск фильтра агрегации
 в коллекции модели по ключу фильтруемого измерения. Если фильтр будет
 найден, то информация о нём будет выведена в окно консоли.


См. также:


[IMsAggregationFilterList](IMsAggregationFilterList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
