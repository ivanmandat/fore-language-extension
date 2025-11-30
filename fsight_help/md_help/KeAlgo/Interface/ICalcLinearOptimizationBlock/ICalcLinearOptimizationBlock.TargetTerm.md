# ICalcLinearOptimizationBlock.TargetTerm

ICalcLinearOptimizationBlock.TargetTerm
-


# ICalcLinearOptimizationBlock.TargetTerm


## Синтаксис


TargetTerm: [IMsFormulaTerm](KeMs.chm::/Interface/IMsFormulaTerm/IMsFormulaTerm.htm);


## Описание


Свойство TargetTerm возвращает
 параметры элементов выражений (термов), используемых в целевой функции.


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM. В алгоритме расчёта создан и настроен
 [блок
 линейной оптимизации](CalculationAlgorithm.chm::/Desktop/Linear_optimization_block/Linear_optimization_block.htm).


Добавьте ссылки на системные сборки: Algo, Cubes, Dimensions, Metabase,
 Ms. Также добавьте ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Algo, CalcBlock: ICalcObject;

	    List: ICalcObjectsList;

	    CalcAlgo: ICalcAlgorithm;

	    LinearBlock: ICalcLinearOptimizationBlock;

	    TargetTerm: IMsFormulaTerm;

	    TargetTermInfo: IMsFormulaTermInfo;

	    StubSel: IStubSelection;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Получим список объектов алгоритма расчёта

	    List := CalcAlgo.Items;

	    // Получим первый блок линейной оптимизации

	    CalcBlock := List.Item(0);

	    LinearBlock := CalcBlock As ICalcLinearOptimizationBlock;

	    // Проверяем признак соответствия источника данных целевой функции

	    If LinearBlock.IsValidStub(LinearBlock.StubOut) Then

	        Debug.WriteLine("Источник данных соответствует целевой функции.");

	    Else

	        Debug.WriteLine("Источник данных не соответствует целевой функции.");

	    End If;

	    // Проверяем параметры термов, используемых в целевой функции

	    Debug.WriteLine("Параметры термов, используемые в целевой функции.");

	    TargetTerm := LinearBlock.TargetTerm;

	    // Проверяем настройки параметров терма

	    Debug.WriteLine("Настройки параметров термов.");

	    Debug.WriteLine("Ключ терма: " + targetTerm.Key.ToString);

	    Debug.WriteLine("Наименование среза: " + TargetTerm.Slice.Name);

	    StubSel := LinearBlock.StubResult;

	    TargetTermInfo := LinearBlock.TargetTermInfo;

	    Debug.WriteLine("Дата, на которую будут браться данные из указанного среза переменной при использовании данного терма: " + TargetTermInfo.Date.ToString);

	    Debug.WriteLine("Выражение: '" + StubSel.Term.TermToText + "'");

	    ShowSelectionSet("Отметка источника данных: ", StubSel.SelectionSet);

	    ShowSelectionSet("Отметка источника данных (с учётом параметров): ", StubSel.GetRealSelectionSet);

	    ShowSelectionSet("Отметка в срезе выражения: ", StubSel.Term.Slice.Selection);

	    Debug.WriteLine("Изменяем целевую функцию.");

	    FillTargetFunction(LinearBlock);

	    StubSel.RefreshSelection;

	    ShowSelectionSet("Отметка в срезе выражения: ", StubSel.Term.Slice.Selection);

	End Sub UserProc;


	Sub ShowSelectionSet(begMsg: String; SelectionSet: IDimSelectionSet);

	Var

	    s: String;

	    i: Integer;

	Begin

	    s := "";

	    For i := 0 To SelectionSet.Count - 1 Do

	        s := s + "[" + SelectionSet.Item(i).ToString + "]" + (i = SelectionSet.Count - 1 ? "" : ",");

	    End For;

	    Debug.WriteLine(begMsg + s);

	End Sub ShowSelectionSet;


	Sub FillTargetFunction(LinearBlock: ICalcLinearOptimizationBlock);

	Var

	    oneDimension: IDimensionModel;

	    oneDimensionInstance: IDimInstance;

	    sel: IDimSelection;

	    iteratorDim: IMsDimIteratorDimension;

	    i, cnt: Integer;

	Begin

	    cnt := LinearBlock.StubOut.DimensionCount;

	    For i := 1 To cnt - 1 Do

	        oneDimension := LinearBlock.StubOut.Dimension(i);

	        If Not oneDimension.IsCalendar Then

	            oneDimensionInstance := ((oneDimension As IMetabaseObjectDescriptor).Open(Null) As IDimInstance);

	            // Факты нельзя добавить в целевую функцию

	            If oneDimensionInstance.Ident <> "FACTS" Then

	                sel := LinearBlock.TargetFunction.FindByKey(oneDimensionInstance.Key);

	                If sel = Null Then

	                    LinearBlock.TargetFunction.Add(oneDimensionInstance);

	                    // Необходимо убрать эти измерения из итератора

	                    iteratorDim := linearBlock.Iterator.Dimensions.FindByKey(oneDimensionInstance.Key);

	                    CopyFromIterToTerm(iteratorDim, linearBlock);

	                    LinearBlock.Iterator.Dimensions.RemoveByKey(iteratorDim.Dimension.Key);

	                End If;

	            End If;

	        End If;

	    End For;

	End Sub FillTargetFunction;


	Sub CopyFromIterToTerm(dimIter: IMsDimIteratorDimension; linearBlock: ICalcLinearOptimizationBlock);

	Var

	    dimParam: IMsParametrizedDimension;

	    sel: IDimSelection;

	Begin

	    sel := linearBlock.TargetFunction.FindByKey(dimIter.Dimension.Key);

	    If sel <> Null Then

	        sel.DeselectAll;

	    End If;

	    dimParam := linearBlock.TargetTerm.Slice.ParametrizedDimensions.FindByKey(dimIter.Dimension.Key);

	    dimParam.Aggregation.AggregateAll := False;

	    dimParam.ParamAttributes.Parameter := Null;

	    If dimIter.Filter.ParameterAsSelection <> Null Then

	        dimParam.ParamAttributes.Parameter := linearBlock.Params.FindById(dimIter.Filter.ParameterAsSelection.Id);

	    Else

	        If dimIter.Filter.Selection = Null Then

	            dimParam.Aggregation.AggregateAll := True;

	        Else

	            sel := linearBlock.TargetFunction.FindByKey(dimIter.Dimension.Key);

	            dimIter.Filter.Selection.CopyTo(sel, True);

	        End If;

	    End If;

	    CopyAdvFilter(dimIter.Filter.AdvancedFilter, dimParam.Aggregation.AdvancedFilter);

	End Sub CopyFromIterToTerm;


	Sub CopyAdvFilter(advFilterSource, advFilterTarget: IMsDimIteratorAdvancedFilter);

	Var

	    sourceItem, targetItem: IMsDimIteratorAdvancedFilterCondition;

	    i, cnt: Integer;

	Begin

	    advFilterTarget.Clear;

	    cnt := advFilterSource.Count;

	    For i := 0 To cnt - 1 Do

	        sourceItem := advFilterSource.Item(i);

	        targetItem := advFilterTarget.Add;

	        targetItem.Attribute := sourceItem.Attribute;

	        targetItem.Inversed := sourceItem.Inversed;

	        targetItem.Operator_ := sourceItem.Operator_;

	        targetItem.ParamAttributes.Parameter := sourceItem.ParamAttributes.Parameter;

	        targetItem.Value := sourceItem.Value;

	    End For;

	End Sub CopyAdvFilter;


При выполнении примера в консоль среды разработки будет выведена информация
 о термах, используемых в целевой функции. После этого целевая функция
 будет изменена: если какие-либо измерения приёмника не были включены в
 целевую функцию, то они будут добавлены в неё. Настройки фильтрации и
 расширенный фильтр измерений будут сохранены.


См. также:


[ICalcLinearOptimizationBlock](ICalcLinearOptimizationBlock.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
