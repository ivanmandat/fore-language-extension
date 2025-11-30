# IMsProblemCalculation.CopyFact

IMsProblemCalculation.CopyFact
-


# IMsProblemCalculation.CopyFact


## Синтаксис


CopyFact: Boolean;


## Описание


Свойство CopyFact определяет
 признак копирования данных идентификационного периода измерения фактов
 в измерения по сценариям при выгрузке данных.


## Комментарии


По умолчанию свойству установлено значение False.


Данное свойство доступно только через Fore.


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

    Calculation.CopyFact := True;

    Calculation.Run;

    MObj.Save;

End Sub UserProc;


После выполнения примера будет осуществлен расчёт задачи с идентификатором
 PROBLEM_1. При выгрузке спрогнозированных данных данные идентификационного
 периода измерения фактов будут скопированы по всем сценарным измерениям,
 по которым осуществлялся расчет.


См. также:


[IMsProblemCalculation](IMsProblemCalculation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
