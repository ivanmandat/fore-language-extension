# IMsAggregationFilter.AggregationParamID

IMsAggregationFilter.AggregationParamID
-


# IMsAggregationFilter.AggregationParamID


## Синтаксис


AggregationParamID: String;


## Описание


Свойство AggregationParamID
 определяет идентификатор параметра, используемого для задания агрегируемых
 элементов.


## Комментарии


Если свойству задаётся значение, то значения
 свойств [IMsAggregationFilter.AggregationGroup](IMsAggregationFilter.AggregationGroup.htm)
 и [IMsAggregationFilter.AggregationSelection](IMsAggregationFilter.AggregationSelection.htm)
 сбрасываются.


В зависимости от значения свойства [IMsAggregationFilter.UseParamAsGroup](IMsAggregationFilter.UseParamAsGroup.htm)
 параметр рассматривается как отдельный элемент или как группа элементов.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором FC. В контейнере моделирования данной
 базы должна присутствовать метамодель, содержащая параметр AGGR_PARAM.
 Цепочка расчёта метамодели должна содержать модель с идентификатором MODEL_AGGR,
 рассчитываемую методом расширенной агрегации. COUNTRY (страна) - атрибут
 показателей базы, ссылающийся на справочник.


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

    Attributes: IMetaAttributes;

    DictDescr: IMetabaseObjectDescriptor;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем БДВР

    RubrDescr := mb.ItemById("FC");

    Rubr := RubrDescr.Bind As IRubricator;

    msDescr := Rubr.ModelSpace;

    // Получаем модель

    Model := mb.ItemByIdNamespace("MODEL_AGGR", msDescr.Key).Edit As IMsModel;

    // Получаем параметры расчета модели

    Transform := Model.Transform;

    // Получаем метод расчета модели

    Formula := Transform.FormulaItem(0);

    // Получаем параметры метода

    Aggr := Formula.Method As IMsCrossDimensionAggregationTransform;

    // Получаем фильтр агрегации

    FiltesList := Aggr.Filter;

    // Получаем атрибуты справочника

    Attributes := Rubr.Facts.Attributes;

    DictDescr := Attributes.FindById("COUNTRY").ValuesObject;

    // Добавляем фильтр

    Filter := FiltesList.Add(DictDescr.Bind As IDimensionModel);

    Filter.AggregationParamID := "Aggr_Param";

    // Сохраняем изменения

    (Model As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера в модель расширенной агрегации будет
 добавлен новый фильтр: агрегация будет рассчитана для элементов, определяемых
 параметром AGGR_PARAM.


См. также:


[IMsAggregationFilter](IMsAggregationFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
