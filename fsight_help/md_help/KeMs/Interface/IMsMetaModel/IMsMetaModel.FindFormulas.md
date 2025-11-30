# IMsMetaModel.FindFormulas

IMsMetaModel.FindFormulas
-


# IMsMetaModel.FindFormulas


## Синтаксис


FindFormulas(FindInfo: [IMsFindFormulaInfo](../IMsFindFormulaInfo/IMsFindFormulaInfo.htm)):
 [IMsFindFormulaResults](../IMsFindFormulaResults/IMsFindFormulaResults.htm);


## Параметры


FindInfo. Параметры поиска.


## Описание


Метод FindFormulas осуществляет
 поиск формул в соответствии с заданными параметрами.


## Комментарии


Для задания условий поиска используйте свойство [CreateFormulaFindInfo](IMsMetaModel.CreateFormulaFindInfo.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором MS. В качестве источника данных для контейнера
 выступает куб с идентификатором STD_CUBE. В структуре куба имеется измерение
 с идентификатором CITY. В контейнере имеется задача моделирования с идентификатором
 PROBLEM.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Problem: IMsProblem;

	    MetaModel: IMsMetaModel;

	    VarStub: IVariableStub;

	    FindInfo: IMsFindFormulaInfo;

	    Factory: IDimSelectionSetFactory;

	    DimSS: IDimSelectionSet;

	Begin

	    Mb := MetabaseClass.Active;

	    Problem := Mb.ItemByIdNamespace("PROBLEM", Mb.GetObjectKeyById("MS")).Bind As IMsProblem;

	    MetaModel := Problem.MetaModel;

	    VarStub := Mb.ItemById("STD_CUBE").Bind As IVariableStub;

	    Factory := New DimSelectionSetFactory.Create;

	    // Отметка элемента, который будет искаться в термах формул

	    DimSS := Factory.CreateDimSelectionSet;

	    DimSS.Add(Mb.ItemById("CITY").Open(Null) As IDimInstance).SelectElement(0, False);

	    // Условия поиска

	    FindInfo := MetaModel.CreateFormulaFindInfo;

	    FindInfo.Stub := VarStub;

	    FindInfo.Selection := DimSS;

	    FindInfo.VarKind := MsVariableKind.Input;

	    // Поиск и просмотр результатов

	    ShowMsFindResults(MetaModel.FindFormulas(FindInfo));

	End Sub UserProc;

Sub ShowMsFindResults(Results: IMsFindFormulaResults);

Var

    Result: IMsFindFormulaResult;

    Model: IMsFindFormulaResultModel;

    Branch: IMsFindFormulaResultBranchCondition;

    Expr: IMsBranchConditionExpression;

    i, c: Integer;

Begin

    c := Results.Count;

    Debug.WriteLine("Найдено формул: " + c.ToString);

    For i := 0 To c - 1 Do

        Result := Results.Item(i);

        Select Case Result.Type

            Case MsCalculationChainEntryType.Model: Debug.WriteLine("-Model-");

            Case MsCalculationChainEntryType.Branch: Debug.WriteLine("-Branch-");

        End Select;

        If Result Is IMsFindFormulaResultModel Then

            Model := Result As IMsFindFormulaResultModel;

            If Not IsNull(Model.ChainMetamodel) Then

                Debug.WriteLine("Model parernt: " + Model.ChainMetamodel.Name);

            End If;

            Debug.WriteLine("Model: " + Model.ChainEntry.Name);

        Elseif Result Is IMsFindFormulaResultBranchCondition Then

            Branch := Result As IMsFindFormulaResultBranchCondition;

            If Not IsNull(Branch.ChainMetamodel) Then

                Debug.WriteLine("Branch parernt: " + Branch.ChainMetamodel.Name);

            End If;

            Debug.WriteLine("Branch: " + Branch.ChainEntry.Name);

            Debug.WriteLine("Case: " + Branch.BranchCase.Name);

            If Branch.BranchCondition Is IMsBranchConditionExpression Then

                Expr := Branch.BranchCondition As IMsBranchConditionExpression;

                Debug.WriteLine("Condition: " + Branch.BranchCondition.Key.ToString + " " + Expr.Expression.AsString);

            End If;

        End If;

        Debug.WriteLine("-------");

    End For;

End Sub ShowMsFindResults;


При выполнении примера будет осуществлён поиск формул, в которых имеются
 термы, основанные на первом элементе измерения CITY источника данных контейнера
 моделирования. Информация о найденных формулах будет выведена в консоль
 среды разработки.


См. также:


[IMsMetaModel](IMsMetaModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
