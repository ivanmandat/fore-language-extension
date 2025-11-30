# IMsProblemCalculation.DoSaveHistory

IMsProblemCalculation.DoSaveHistory
-


# IMsProblemCalculation.DoSaveHistory


## Синтаксис


DoSaveHistory;


## Описание


Метод DoSaveHistory сохраняет
 историю расчёта [задачи
 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm).


## Комментарии


Сохранение осуществляется независимо от установленного значения свойства
 [SaveData](IMsProblemCalculation.SaveData.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования задачи с идентификатором PROBLEM_1.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Problem: IMsProblem;

    CalcSett: IMsProblemCalculationSettings;

    Calculation: IMsProblemCalculation;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemByIdNamespace("PROBLEM_1", MB.ItemById("KONT_MODEL").Key).Edit;

    Problem := MObj As IMsProblem;

    CalcSett := Problem.CreateCalculationSettings;

    Calculation := Problem.Calculate(CalcSett);

    Calculation.Run;

    Calculation.DoSaveHistory;

    MObj.Save;

End Sub UserProc;


После выполнения примера будет осуществлён расчёт задачи с идентификатором
 PROBLEM_1. История расчёта будет сохранена.


См. также:


[IMsProblemCalculation](IMsProblemCalculation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
