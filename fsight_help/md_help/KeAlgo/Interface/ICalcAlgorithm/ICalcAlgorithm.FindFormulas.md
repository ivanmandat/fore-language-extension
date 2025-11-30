# ICalcAlgorithm.FindFormulas

ICalcAlgorithm.FindFormulas
-


# ICalcAlgorithm.FindFormulas


## Синтаксис


FindFormulas(FindInfo: [IMsFormulaInfo](KeMs.chm::/Interface/IMsFormulaInfo/IMsFormulaInfo.htm)):
 [IAlgoFindFormulaResults](../IAlgoFindFormulaResults/IAlgoFindFormulaResults.htm);


## Параметры


FindInfo.
 Параметры поиска.


## Описание


Метод FindFormulas осуществляет
 поиск формул в соответствии с заданными параметрами.


## Комментарии


Для задания критериев поиска используйте свойство [CreateFormulaFindInfo](ICalcAlgorithm.CreateFormulaFindInfo.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGO. В алгоритме создан и настроен блок расчёта,
 в качестве источника используется куб с идентификатором STD_CUBE. В структуре
 куба имеется измерение с идентификатором CITY.


Добавьте ссылки на системные сборки: Algo, Cubes, Dimensions, Metabase,
 Ms. Также добавьте [ссылку
 на сборку](../../Intro/KeAlgo_Programming.htm), необходимую для работы с алгоритмом расчёта.


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

	    FindInfo.VarKind := MsVariableKind.Input;

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


При выполнении примера будет осуществлён поиск формул, в которых имеются
 термы, основанные на элементах измерения указанного источника. В измерении
 CITY будет отмечен первый элемент. Информация о найденных формулах будет
 выведена в консоль среды разработки.


См. также:


[ICalcAlgorithm](ICalcAlgorithm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
