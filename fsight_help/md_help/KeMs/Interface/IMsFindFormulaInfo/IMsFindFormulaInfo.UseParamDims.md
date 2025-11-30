# IMsFindFormulaInfo.UseParamDims

IMsFindFormulaInfo.UseParamDims
-


# IMsFindFormulaInfo.UseParamDims


## Синтаксис


UseParamDims: Boolean;


## Описание


Свойство UseParamDims определяет
 признак учёта параметрических измерений в срезах при поиске.


## Комментарии


Допустимые значения:


	- True. При поиске будут
	 учитываться наборы значений параметров, заданных для измерений в свойстве
	 [IMsFindFormulaInfo.ParametrizedDims](IMsFindFormulaInfo.ParametrizedDims.htm).
	 Будут отбираться только те срезы, для которых заданы те же параметры
	 по тем же измерениям;


	- False. При поиске будут
	 сравниваться отметка среза, формирующего терм, и отметка, заданная
	 в свойстве [IMsFindFormulaInfo.Selection](IMsFindFormulaInfo.Selection.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие алгоритма
 расчёта с идентификатором ALGO. В алгоритме создан и настроен блок расчёта,
 в качестве источника используется куб с идентификатором STD_CUBE. В структуре
 куба имеются измерения с идентификаторами CITY и INDICATOR. В алгоритме
 расчёта на базе указанного куба и измерения INDICATOR создан параметр.


Добавьте ссылки на системные сборки: Algo, Cubes, Dimensions, Metabase,
 Ms. Также добавьте ссылки на сборки, которые [необходимы](KeAlgo.chm::/Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Alg: ICalcAlgorithm;

	    FindInfo: IMsFindFormulaInfo;

	    Factory: IDimSelectionSetFactory;

	    DimSS: IDimSelectionSet;

	Begin

	    Mb := MetabaseClass.Active;

	    Alg := CalcObjectFactory.CreateCalcObject(Mb.ItemById("ALGO"), True) As ICalcAlgorithm;

	    Factory := New DimSelectionSetFactory.Create;

	    DimSS := Factory.CreateDimSelectionSet;

	    DimSS.Add(Mb.ItemById("CITY").Open(Null) As IDimInstance).SelectElement(0, False);

	    // Условия поиска

	    FindInfo := Alg.CreateFormulaFindInfo;

	    FindInfo.Stub := Alg.Stubs.FindByKey(Mb.GetObjectKeyById("STD_CUBE"));

	    FindInfo.Selection := DimSS;

	    FindInfo.UseParamDims := True;

	    FindInfo.ParametrizedDims.FindById("INDICATOR").ParamAttributes.Parameter := Alg.Params.Item(0);

	    // Поиск и просмотр результатов

	    ShowAlgFindResults(Alg.FindFormulas(FindInfo));

	End Sub UserProc;

	Sub ShowAlgFindResults(Results: IAlgoFindFormulaResults);

	Var

	    Result: IAlgoFindFormulaResult;

	    Block: IAlgoCalcBlockFindFormulaResult;

	    Branch: IAlgoBranchCondFindFormulaResult;

	    Expr: IMsBranchConditionExpression;

	    i, c: Integer;

	Begin

	    c := Results.Count;

	    Debug.WriteLine("Найдено формул: " + c.ToString);

	    For i := 0 To c - 1 Do

	        Result := Results.Item(i);

	        If Result Is IAlgoCalcBlockFindFormulaResult Then

	            Block := Result As IAlgoCalcBlockFindFormulaResult;

	            Debug.WriteLine("Block name: " + Block.CalcObject.Name);

	            Debug.WriteLine("Formula key: " + Block.FormulaKey.ToString + " " + Block.ChainModel.Name);

	        Elseif Result Is IAlgoBranchCondFindFormulaResult Then

	            Branch := Result As IAlgoBranchCondFindFormulaResult;

	            Debug.WriteLine("Branch: " + Branch.Branch.Name);

	            Debug.WriteLine("Case: " + Branch.BranchCase.Name);

	            If Branch.BranchCondition Is IMsBranchConditionExpression Then

	                Expr := Branch.BranchCondition As IMsBranchConditionExpression;

	                Debug.WriteLine("Condition: " + Branch.BranchCondition.Key.ToString + " " + Expr.Expression.AsString);

	            End If;

	        End If;

	        Debug.WriteLine("-------");

	    End For;

	End Sub ShowAlgFindResults;


В результате выполнения примера будет осуществлён поиск формул, в которых
 имеются термы, основанные на элементах измерений указанного источника.
 В измерении CITY будет отмечен первый элемент, а для измерения INDICATOR
 будет использована отметка параметра алгоритма расчёта. Информация о найденных
 формулах будет выведена в консоль среды разработки.


См. также:


[IMsFindFormulaInfo](IMsFindFormulaInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
