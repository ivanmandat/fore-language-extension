# IMsAggregationFilterList.Count

IMsAggregationFilterList.Count
-


# IMsAggregationFilterList.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 фильтров в коллекции.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором FC. В контейнере моделирования данной
 базы должна присутствовать модель с идентификатором MODEL_AGGR, рассчитываемая
 методом расширенной агрегации. COUNTRY (страна) - атрибут показателей
 базы, ссылающийся на справочник.


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

	    FiltesList.Clear;

	    Filter := FiltesList.Add(DictDescr.Bind As IDimensionModel);

	    FilterDimension := Filter.FilterDimension As IMetabaseObject;

	    DimInst := FilterDimension.Open(Null) As IDimInstance;

	    Selection := DimInst.CreateSelection;

	    For i := 0 To 5 Do

	        Selection.SelectElement(i, False);

	    End For;

	    Filter.AggregationSelection := Selection;

	    Debug.WriteLine("ФИЛЬТРЫ АГРЕГАЦИИ");

	    For i := 0 To FiltesList.Count - 1 Do

	        Filter := FiltesList.Item(i);

	        Debug.WriteLine("  Наименование фильтра: " + Filter.Name);

	        Debug.WriteLine("  Отметка фильтра: " + Filter.AggregationSelection.ToString);

	    End For;

	    (Model As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера коллекция фильтров модели расширенной
 агрегации будет очищена. Затем в коллекцию будет добавлен новый фильтр:
 рассчитывать агрегацию только для шести первых элементов справочника,
 на который ссылается атрибут COUNTRY. Затем в окно консоли будет выведена
 информация о всех фильтрах модели.


См. также:


[IMsAggregationFilterList](IMsAggregationFilterList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
