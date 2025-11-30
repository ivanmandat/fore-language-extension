# IMsAggregationFilterList.MoveTo

IMsAggregationFilterList.MoveTo
-


# IMsAggregationFilterList.MoveTo


## Синтаксис


MoveTo(FromIndex: Integer; ToIndex: Integer);


## Параметры


FromIndex. Индекс позиции фильтра,
 который необходимо переместить;


ToIndex. Индекс позиции, в
 которую необходимо переместить фильтр.


## Описание


Метод MoveTo
 перемещает фильтр в коллекции.


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

	        FiltesList.MoveTo(0, FiltesList.Count - 1);

	    End If;

	   (Model As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера, если модель содержит фильтры, то первый
 фильтр агрегации будет перемещён в конец коллекции.


См. также:


[IMsAggregationFilterList](IMsAggregationFilterList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
