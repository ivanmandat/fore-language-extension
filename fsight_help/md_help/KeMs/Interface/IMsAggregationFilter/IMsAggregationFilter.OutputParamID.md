# IMsAggregationFilter.OutputParamID

IMsAggregationFilter.OutputParamID
-


# IMsAggregationFilter.OutputParamID


## Синтаксис


		OutputParamID: String;


## Описание


Свойство OutputParamID определяет
 параметр, в который будет выгружаться отметка фильтра в каждой итерации
 расчёта.


## Комментарии


Для задания отметки используйте свойство [IMsAggregationFilter.AggregationSelection](IMsAggregationFilter.AggregationSelection.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором TSDB, содержащей во внутреннем контейнере
 моделирования метамодель с идентификатором METAMODEL. Данная метамодель
 должна содержать в цепочке расчёта модель расширенной агрегации с идентификатором
 MODEL. Модель должна содержать фильтр агрегации.


Добавьте ссылки на системные сборки: Cubes, Dal, Metabase, Ms


					Sub UserProc;

		Var

		    mb: IMetabase;

		    Rubr: IRubricator;

		    ms: IMetabaseObjectDescriptor;

		    MetaModel: IMsMetaModel;

		    Params: IMsModelParams;

		    Param: IMsModelParam;

		    Model: IMsModel;

		    Trans: IMsFormulaTransform;

		    Aggr: IMsCrossDimensionAggregationTransform;

		    Filter: IMsAggregationFilter;

		Begin

		    mb := MetabaseClass.Active;

		    Rubr := mb.ItemById("TSDB").Bind As IRubricator;

		    ms := Rubr.ModelSpace;

		    MetaModel := mb.ItemByIdNamespace("METAMODEL", ms.Key).Edit As IMsMetaModel;

		    Params := MetaModel.Params;

		    Params.Clear;

		    Param := Params.Add;

		    Param.DataType := DbDataType.String;

		    Param.DefaultValue := "";

		    Param.Name := "Selection";

		    Param.ID := "Selection";

		    (MetaModel As IMetabaseObject).Save;

		    Model := mb.ItemByIdNamespace("MODEL", ms.Key).Edit As IMsModel;

		    Trans := Model.Transform;

		    Aggr := Trans.FormulaItem(0).Method As IMsCrossDimensionAggregationTransform;

		    Filter := Aggr.Filter.Item(0);

		    Filter.OutputParamID := "Selection";

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера в метамодель добавлен строковый параметр
 SELECTION, в который будет выгружаться отметка фильтра в каждой итерации
 расчёта.


См. также:


[IMsAggregationFilter](IMsAggregationFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
