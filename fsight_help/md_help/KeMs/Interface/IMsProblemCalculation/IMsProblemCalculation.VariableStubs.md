# IMsProblemCalculation.VariableStubs

IMsProblemCalculation.VariableStubs
-


# IMsProblemCalculation.VariableStubs


## Синтаксис


VariableStubs: [IVariableStubList](KeCubes.chm::/Interface/IVariableStubList/IVariableStubList.htm);


## Описание


Свойство VariableStubs возвращает
 коллекцию переменных, данные которых используются при расчёте [задачи
 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm).


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    Problem: IMsProblem;

    CalcSett: IMsProblemCalculationSettings;

    Calculation: IMsProblemCalculation;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    Problem := MB.ItemByIdNamespace("PROBLEM_1", MB.ItemById("KONT_MODEL").Key).Bind As IMsProblem;

    CalcSett := Problem.CreateCalculationSettings;

    Calculation := Problem.Calculate(CalcSett);

    For i := 0 To Calculation.VariableStubs.Count - 1 Do

        Debug.WriteLine((Calculation.VariableStubs.Item(i) As IMetabaseObject).Name);

    End For;

End Sub UserProc;


После выполнения примера в консоль будет выведен список входных и выходных
 переменных, данные которых будут использоваться при расчёте задачи с идентификатором
 PROBLEM_1.


См. также:


[IMsProblemCalculation](IMsProblemCalculation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
