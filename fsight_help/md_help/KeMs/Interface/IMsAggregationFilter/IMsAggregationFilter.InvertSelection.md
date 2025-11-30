# IMsAggregationFilter.InvertSelection

IMsAggregationFilter.InvertSelection
-


# IMsAggregationFilter.InvertSelection


## Синтаксис


InvertSelection: Boolean;


## Описание


Свойство InvertSelection определяет
 признак использования инвертированной отметки в фильтре агрегации при
 расчёте [задачи
 моделирования](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_4_Problem/uimodelling_problem.htm).


## Комментарии


Допустимые значения:


	- True. В фильтре агрегации
	 используется инвертированная отметка. Агрегация выполняется по элементам,
	 с которых снята отметка;


	- False. По умолчанию.
	 В фильтре агрегации используется отметка, заданная с помощью свойства
	 [IMsAggregationFilter.AggregationSelection](IMsAggregationFilter.AggregationSelection.htm).


Свойство используется только для моделей вида «[Агрегация
 (расширенная)](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/aggregation/UiModelling_Aggregation_Attr_CrossDim.htm)».


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_MODEL, содержащего задачу моделирования
 с идентификатором PROBLEM. В задаче моделирования должна содержаться метамодель,
 в [цепочке
 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) которой содержится модель с идентификатором
 MODEL. Для модели задайте вид «[Агрегация
 (расширенная)](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/aggregation/UiModelling_Aggregation_Attr_CrossDim.htm)» на панели «[Параметры](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Standart_Model/UiModelling_Panel_Param_Attr.htm)» и
 настройте [фильтр](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/aggregation/UiModelling_Aggregation_Attr_CrossDim.htm#expression)
 на панели «[Спецификация](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/UiModelling_Model_Specification.htm)».


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

    MB: IMetabase;

    RubrDescr, Descr: IMetabaseObjectDescriptor;

    Model: IMsModel;

    Transform: IMsFormulaTransform;

    Formula: IMsFormula;

    FilterList: IMsAggregationFilterList;

    Filter: IMsAggregationFilter;

    Problem: IMsProblem;

    Settings: IMsProblemCalculationSettings;

    Calc: IMsProblemCalculation;

    Aggr: IMsCrossDimensionAggregationTransform;

    Method: IMsMethod;

Begin

    MB := MetabaseClass.Active;

    // Получим контейнер моделирования

    RubrDescr := MB.ItemById("CONT_MODEL");

    Descr := RubrDescr.EditDescriptor;

    // Получим модель

    Model := MB.ItemByIdNamespace("MODEL", Descr.Key).Edit As IMsModel;

    // Получим задачу моделирования

    Problem := MB.ItemByIdNamespace("PROBLEM", Descr.Key).EditTemporary As IMsProblem;

    // Получим параметры модели

    Transform := Model.Transform;

    // Получим метод расчёта модели

    Formula := Transform.FormulaItem(0);

    // Получим параметры метода расчёта модели

    Method := Formula.Method;

    Aggr := Method As IMsCrossDimensionAggregationTransform;

    // Получим фильтры агрегации

    FilterList := Aggr.Filter;

    // Выполним инверсию отметки для первого фильтра

    Filter := FilterList.Item(0);

    Filter.InvertSelection := True;

    // Сохраним внесенные изменения

    (Model As IMetabaseObject).Save;

    // Рассчитаем задачу моделирования

    Settings := Problem.CreateCalculationSettings;

    Calc := Problem.Calculate(Settings);

    Calc.Run;

End Sub UserProc;


В результате выполнения примера будет рассчитана задача моделирования,
 содержащаяся в ней метамодель и модель. При расчёте модели выполняется
 агрегация по заданному фильтру. Для первого измерения фильтра агрегация
 выполняется по инвертированной отметке.


См. также:


[IMsAggregationFilter](IMsAggregationFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
