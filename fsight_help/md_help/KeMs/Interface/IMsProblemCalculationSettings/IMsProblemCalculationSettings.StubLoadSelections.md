# IMsProblemCalculationSettings.StubLoadSelections

IMsProblemCalculationSettings.StubLoadSelections
-


# IMsProblemCalculationSettings.StubLoadSelections


## Синтаксис


StubLoadSelections: [IMsStubLoadSelectionValues](../IMsStubLoadSelectionValues/IMsStubLoadSelectionValues.htm);


## Описание


Свойство StubLoadSelections
 возвращает коллекцию отметок в источниках данных, используемую для загрузки
 данных при расчёте задачи.


## Комментарии


Использование данного свойства позволяет избежать загрузки данных, которые
 не участвуют в расчетах. Таким образом, сократится время расчета.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащим задачу моделирования с
 идентификатором PROBLEM_FILTER. Метамодель, рассчитываемая данной задачей,
 должна содержать несколько элементов в цепочке расчета.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    MsKey: Integer;

	    Problem: IMsProblem;

	    CalcSettings: IMsProblemCalculationSettings;

	    StubLoadSel: IMsStubLoadSelectionValues;

	    StubLoadSelVal: IMsStubLoadSelectionValue;

	    Stub: IVariableStub;

	    SelSet: IDimSelectionSet;

	    i: Integer;

	    DimInst: IDimInstance;

	    Sel: IDimSelection;

	    Calculation: IMsProblemCalculation;

	Begin

	    mb := MetabaseClass.Active;

	    // Получаем ключ контейнера моделирования

	    MsKey := mb.GetObjectKeyById("MS");

	    // Получаем задачу моделирования

	    Problem := mb.ItemByIdNamespace("PROBLEM_FILTER", MsKey).Edit As IMsProblem;

	    // Получаем параметры расчета задачи

	    CalcSettings := Problem.CreateCalculationSettings;

	    // Получаем параметры отметки в источниках данных для загрузки при расчете задачи

	    StubLoadSel := CalcSettings.StubLoadSelections;

	    // Очищаем отметку

	    StubLoadSel.Clear;

	    // Получаем первый источник данных, использующийся задачей моделирования

	    Stub := Problem.VariableStubs(MsVariableKind.All).Item(0);

	    // Задаем отметку в источнике данных для загрузки при расчете задачи

	    StubLoadSelVal := StubLoadSel.Add(Stub.Key);

	    // Выводим наименование источника данных

	    Debug.WriteLine("Наименование источника данных: " + mb.Item(StubLoadSelVal.StubKey).Name);

	    SelSet := StubLoadSelVal.SelectionSet;

	    SelSet.Clear;

	    For i := 0 To Stub.DimensionCount - 1 Do

	        DimInst := (Stub.Dimension(i) As IMetabaseObject).Open(Null) As IDimInstance;

	        Sel := SelSet.Add(DimInst);

	        Sel.SelectElement(1, True);

	        Sel.SelectElement(3, True);

	    End For;

	    // Выполняем расчет задачи

	    Calculation := Problem.Calculate(CalcSettings);

	    Calculation.Run;

	End Sub UserProc;


В результате выполнения примера задача моделирования будет рассчитана
 с учетом заданной отметки для загрузки в источниках данных.


См. также:


[IMsProblemCalculationSettings](IMsProblemCalculationSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
