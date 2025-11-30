# IMsAggregationFilterList.RemoveByKey

IMsAggregationFilterList.RemoveByKey
-


# IMsAggregationFilterList.RemoveByKey


## Синтаксис


RemoveByKey(DimKey: Integer): Boolean;


## Параметры


DimKey. Ключ фильтруемого измерения.


## Описание


Метод RemoveByKey
 удаляет фильтр из коллекции по ключу фильтруемого измерения.


## Комментарии


Если фильтр удалён успешно, то метод возвращает
 значение True, если нет - то False.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
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

	    If FiltesList.Count
	 > 0 Then

	        Attributes := Rubr.Facts.Attributes;

	       DictDescr := Attributes.FinById("COUNTRY").ValuesObject;

	       FiltesList.RemoveByKey(DictDescr.Key);

	    End If;

	End Sub UserProc;


В результате выполнения примера, если модель содержит фильтры, то фильтр
 агрегации для указанного измерения будет удалён из коллекции.


См. также:


[IMsAggregationFilterList](IMsAggregationFilterList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
