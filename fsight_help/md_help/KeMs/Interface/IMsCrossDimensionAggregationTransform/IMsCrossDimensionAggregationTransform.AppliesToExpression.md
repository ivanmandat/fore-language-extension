# IMsCrossDimensionAggregationTransform.AppliesToExpression

IMsCrossDimensionAggregationTransform.AppliesToExpression
-


# IMsCrossDimensionAggregationTransform.AppliesToExpression


## Синтаксис


		AppliesToExpression: [IExpression](ForeSys.chm::/Interface/IExpression/IExpression.htm);


## Описание


Свойство AppliesToExpression
 определяет выражение для задания компонентов, которые будут агрегироваться
 без учёта обработки пропусков.


## Комментарии


Коллекцию элементов, которые могут быть использованы в выражении, возвращает
 свойство [IMsCrossDimensionAggregationTransform.AppliesToOperands](IMsCrossDimensionAggregationTransform.AppliesToOperands.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором FC. Country и Indicator - атрибуты
 показателей данной базы, ссылающиеся на справочники. В контейнере моделирования
 данной базы должны присутствовать:


	- модель с идентификатором CROSS_DIM_AGGR, рассчитываемая методом
	 расширенной агрегации;


	- метамодель, содержащая параметр Country_Param. Параметр должен
	 ссылаться на тот же справочник, что и атрибут показателей Country.
	 Модель с идентификатором CROSS_DIM_AGGR должна входить в цепочку расчета
	 данной метамодели.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms, Rds.


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

		    strsGen: IMsFormulaStringGenerator;

		    Term: IMsFormulaTerm;

		    selFactory: IDimSelectionSetFactory;

		    SelSet: IDimSelectionSet;

		    Attributes: IMetaAttributes;

		    DictC, DictI: IMetabaseObjectDescriptor;

		    SliceInp: IMsFormulaTransformSlice;

		    Options: IMsCrossDimensionAggregationOptions;

		    FiltesList: IMsAggregationFilterList;

		    Filter: IMsAggregationFilter;

		Begin

		    mb := MetabaseClass.Active;

		    // Получаем БД временных рядов и её
		 контейнер моделирования

		    RubrDescr := mb.ItemById("FC");

		    Rubr := RubrDescr.Bind As IRubricator;

		    msDescr := Rubr.ModelSpace;

		    // Получаем модель

		    Model := mb.ItemByIdNamespace("CROSS_DIM_AGGR", msDescr.Key).Edit As IMsModel;

		    Transform := Model.Transform;

		    Formula := Transform.FormulaItem(0);

		    // Настраиваем параметры расчета агрегации

		    Aggr := Formula.Method As IMsCrossDimensionAggregationTransform;

		    Aggr.AgregationMethod := MsAgregationMethodType.WeightedAverage;

		    selFactory := New DimSelectionSetFactory.Create;

		    SelSet := selFactory.CreateDimSelectionSet;

		    // Получаем атрибуты показателей и справочники, на которые они ссылаются

		    Attributes := Rubr.Facts.Attributes;

		    DictC := Attributes.FindById("COUNTRY").ValuesObject;

		    DictI := Attributes.FindById("INDICATOR").ValuesObject;

		    SelSet.Add(DictC.Open(Null) As IDimInstance);

		    SelSet.Add(DictI.Open(Null) As IDimInstance);

		    // Получаем элемент для выражения расчета агрегации

		    SelSet.Item(0).DeselectAll;

		    SelSet.Item(1).DeselectAll;

		    SelSet.Item(1).SelectElement(1, False);

		    SliceInp := Transform.Inputs.Add(RubrDescr.Bind As IVariableStub).Slices.Add(SelSet);

		    // Задаем выражение для расчета агрегации

		    Term := Aggr.Operands.Add(SliceInp);

		    Aggr.Expression.AsString := "Fill(" + Term.TermToInnerText + ", MsFillMethod.RandomValue)";

		    // Получаем элемент для выражения расчета весов

		    SelSet.Item(1).DeselectAll;

		    SelSet.Item(1).SelectElement(2, False);

		    SliceInp := Transform.Inputs.Add(RubrDescr.Bind As IVariableStub).Slices.Add(SelSet);

		    // Задаем выражение для расчета весов

		    Term := Aggr.WeightsOperands.Add(SliceInp);

		    Aggr.WeightsExpression.AsString := Term.TermToInnerText + "+2";

		    // Получаем элементы для выражения расчета релевантности структуры

		    SelSet.Item(1).DeselectAll;

		    SelSet.Item(1).SelectElement(3, False);

		    SliceInp := Transform.Inputs.Add(RubrDescr.Bind As IVariableStub).Slices.Add(SelSet);

		    // Задаем выражение для расчета релевантости структуры

		    Term := Aggr.CompositionRelevanceOperands.Add(SliceInp);

		    Aggr.CompositionRelevanceExpression.AsString := Term.TermToInnerText + "*2";

		    // Получаем элементы для выражения расчета элементов,
		 которые будут агрегироваться без учета пропусков в данных

		    SelSet.Item(1).DeselectAll;

		    SelSet.Item(1).SelectElement(1, False);

		    SliceInp := Transform.Inputs.Add(RubrDescr.Bind As IVariableStub).Slices.Add(SelSet);

		    // Задаем выражение для расчета элементов,
		 которые будут агрегироваться без учета пропусков в данных

		    Aggr.AppliesToOperands.Add(SliceInp);

		    Aggr.AppliesToExpression.AsString := Term.TermToInnerText;

		    // Задаем фильтр агрегации

		    FiltesList := Aggr.Filter;

		    Filter := FiltesList.Add(DictC.Bind As IDimensionModel);

		    Filter.AggregationParamID := "Country_Param";

		    Filter.UseParamAsGroup := True;

		    // Задаем дополнительные
		 параметры расчета агрегации

		    Options := Aggr.Options;

		    Options.Threshold := 20;

		    Options.Percentile := 50;

		    Options.KeepSegment := True;

		    // Генерируем название модели

		    strsGen := Formula.CreateStringGenerator;

		    strsGen.ShowFullVariableNames := True;

		    Debug.WriteLine("Выражение агрегации: " + strsGen.Execute);

		    // Сохраняем модель

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера будут изменены следующие параметры модели:


	- метод агрегации - взвешенное среднее;


	- задано выражение агрегации;


	- заданы веса агрегации;


	- заданы параметры для расчёта релевантности структуры агрегации;


	- задана фильтрация агрегируемых значений.


В окно консоли будет выведено выражение, по которому рассчитывается
 агрегация, например:


Выражение агрегации: Afghanistan|BCA[t] = Сумма((fill(BCI[t],
 MsFillMethod.RandomValue)) * (BDS[t] + 2)) / Сумма(BDS[t] + 2)


См. также:


[IMsCrossDimensionAggregationTransform](IMsCrossDimensionAggregationTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
