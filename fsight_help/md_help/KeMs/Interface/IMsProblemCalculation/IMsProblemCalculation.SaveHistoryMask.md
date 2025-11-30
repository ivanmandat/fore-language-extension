# IMsProblemCalculation.SaveHistoryMask

IMsProblemCalculation.SaveHistoryMask
-


# IMsProblemCalculation.SaveHistoryMask


## Синтаксис


SaveHistoryMask: [MsCalculationHistorySet](../../Enums/MsCalculationHistorySet.htm);


## Описание


Свойство SaveHistoryMask определяет
 параметры ведения журнала расчёта [задачи
 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm).


## Комментарии


На значение данного свойства влияет свойство [IMsProblemCalculation.SaveHistory](IMsProblemCalculation.SaveHistory.htm).
 Если свойству [IMsProblemCalculation.SaveHistory](IMsProblemCalculation.SaveHistory.htm)
 установить значение True, то SaveHistoryMask примет значение
 [MsCalculationHistorySet.Full](../../Enums/MsCalculationHistorySet.htm).


Значение данного свойства также влияет на свойство [IMsProblemCalculation.SaveHistory](IMsProblemCalculation.SaveHistory.htm).
 Если для значения SaveHistoryMask
 установить любой тип [MsCalculationHistorySet](../../Enums/MsCalculationHistorySet.htm),
 кроме [MsCalculationHistorySet.None](../../Enums/MsCalculationHistorySet.htm),
 то [IMsProblemCalculation.SaveHistory](IMsProblemCalculation.SaveHistory.htm)
 автоматически принимает значение True.
 Если в качестве значения SaveHistoryMask
 установить [MsCalculationHistorySet.None](../../Enums/MsCalculationHistorySet.htm),
 то [IMsProblemCalculation.SaveHistory](IMsProblemCalculation.SaveHistory.htm)
 принимает значение False.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором KONT_MODEL. В данном контейнере должна
 содержаться задача с идентификатором PROBLEM_1.


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

    Calculation.SaveHistory := True;

    Calculation.SaveHistoryMask := MsCalculationHistorySet.Log;

    Calculation.Run;

    MObj.Save;

End Sub UserProc;


После выполнения примера будет осуществлён расчёт задачи с идентификатором
 PROBLEM_1. История расчёта будет сохранена только в виде журнала.


См. также:


[IMsProblemCalculation](IMsProblemCalculation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
