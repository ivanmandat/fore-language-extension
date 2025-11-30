# IMsAggregationFilterList.Remove

IMsAggregationFilterList.Remove
-


# IMsAggregationFilterList.Remove


## Синтаксис


Remove(Index: Integer): Boolean;


## Параметры


Index. Индекс фильтра в коллекции.


## Описание


Метод Remove
 удаляет фильтр из коллекции по его индексу.


## Комментарии


Если фильтр удалён успешно, то метод возвращает
 значение True, если нет - то False.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором FC. В контейнере моделирования данной
 базы должна присутствовать модель с идентификатором MODEL_AGGR, рассчитываемая
 методом расширенной агрегации.


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
	 > 1 Then

	        FiltesList.Remove(0);

	    End If;

	   (Model As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера, если модель содержит фильтры, то первый
 фильтр агрегации будет удалён из коллекции.


См. также:


[IMsAggregationFilterList](IMsAggregationFilterList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
