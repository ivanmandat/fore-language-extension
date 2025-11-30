# IMsDetermAggregationTransform.AggregationExpr

IMsDetermAggregationTransform.AggregationExpr
-


# IMsDetermAggregationTransform.AggregationExpr


## Синтаксис


		AggregationExpr: [IExpression](ForeSys.chm::/Interface/IExpression/IExpression.htm);


## Описание


Свойство AggregationExpr
 возвращает выражение агрегации.


## Комментарии


Для задания выражения, используемого для расчёта порога агрегации, используйте
 свойство [IMsDetermAggregationTransform.CompositionRelevanceExpr](IMsDetermAggregationTransform.CompositionRelevanceExpr.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего модель «Агрегация (базовая)»
 с идентификатором MODEL_DETERM_AGGR.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    ModelCont: IMetabaseObjectDescriptor;

		    Model: IMsModel;

		    Transform: IMsFormulaTransform;

		    Formula: IMsFormula;

		    DetermAggregation: IMsDetermAggregationTransform;

		    TermInfo: IMsFormulaTermInfo;

		    Stub: IVariableStub;

		    TransformVar: IMsFormulaTransformVariable;

		    SelectionFact: IDimSelectionSetFactory;

		    SelectionAgr, SelectionW, SelectionRel: IDimSelectionSet;

		    i: Integer;

		    DimI: IDimInstance;

		    Slice: IMsFormulaTransformSlice;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем контейнер моделирования

		    ModelCont := mb.ItemById("MS");

		    // Получаем модель

		    Model := mb.ItemByIdNamespace("MODEL_DETERM_AGGR", ModelCont.Key).Edit As IMsModel;

		    // Получаем параметры модели

		    Transform := Model.Transform;

		    Formula := Transform.FormulaItem(0);

		    Formula.Kind := MsFormulaKind.DetermAggregation;

		    DetermAggregation := Formula.Method As IMsDetermAggregationTransform;

		    // Создаем отметки для формирования выражений агрегации

		    Stub := (ModelCont.Bind As IMsModelSpace).DefaultObject.Bind As IVariableStub;

		    SelectionFact := New DimSelectionSetFactory.Create;

		    SelectionAgr := SelectionFact.CreateDimSelectionSet;

		    SelectionW := SelectionFact.CreateDimSelectionSet;

		    SelectionRel := SelectionFact.CreateDimSelectionSet;

		    For i := 0 To Stub.DimensionCount - 1 Do

		        DimI := (Stub.Dimension(i) As IMetabaseObject).Open(Null) As IDimInstance;

		        SelectionAgr.Add(DimI);

		        SelectionAgr.Item(i).SelectElement(i, False);

		        SelectionW.Add(DimI);

		        SelectionW.Item(i).SelectElement(i + 1, False);

		        SelectionRel.Add(DimI);

		        SelectionRel.Item(i).SelectElement(i + 2, False);

		    End For;

		    // Задаем выражение агрегации

		    TermInfo := Transform.CreateTermInfo;

		    TransformVar := Transform.Inputs.Add(Stub);

		    Slice := TransformVar.Slices.Add(SelectionAgr);

		    TermInfo.Slice := Slice;

		    DetermAggregation.AggregationExpr.AsString := TermInfo.TermInnerText;

		    // Задаем выражение весов

		    TransformVar := Transform.Inputs.Add(Stub);

		    Slice := TransformVar.Slices.Add(SelectionW);

		    TermInfo.Slice := Slice;

		    DetermAggregation.WeightsExpr.AsString := TermInfo.TermInnerText;

		    // Задаем выражение для расчета порога агрегации

		    TransformVar := Transform.Inputs.Add(Stub);

		    Slice := TransformVar.Slices.Add(SelectionRel);

		    TermInfo.Slice := Slice;

		    DetermAggregation.CompositionRelevanceExpr.AsString := TermInfo.TermInnerText;

		    // Сохраняем модель

		    (Model As IMetabaseObject).Save;

		    // Выводим название моделируемой переменной

		    Debug.WriteLine("Моделируемая переменная: " + DetermAggregation.Result.TermToText);

		End Sub UserProc;


В результате выполнения примера для модели будет задано выражение агрегации,
 выражение для расчёта порога агрегации и выражение для задания весов агрегации.
 В окно консоли будет выведено наименование моделируемой переменной.


См. также:


[IMsDetermAggregationTransform](IMsDetermAggregationTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
