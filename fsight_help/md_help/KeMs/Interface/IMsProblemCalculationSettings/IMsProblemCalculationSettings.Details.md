# IMsProblemCalculationSettings.Details

IMsProblemCalculationSettings.Details
-


# IMsProblemCalculationSettings.Details


## Синтаксис


Details: Variant;


## Описание


Свойство Details определяет
 тип рассчитываемой целевой задачи.


## Комментарии


Если в свойстве Details содержится
 объект типа:


	- [IMsTargetProblem](../IMsTargetProblem/IMsTargetProblem.htm).
	 Будет рассчитана задача оптимального управления. Задача состоит в
	 отыскании таких значений управляющих переменных, при которых будет
	 выполнено условие оптимизации значения целевой функции;


	- [IMsForecastingProblem](../IMsForecastingProblem/IMsForecastingProblem.htm).
	 Будет рассчитана задача прогнозирования. Модели, входящие в задачу,
	 рассчитываются последовательно в каждой точке сценария: сначала рассчитываются
	 все модели по первой точке сценария, затем происходит расчет всех
	 моделей по второй точке сценария и так далее.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS», содержащего целевую задачу с идентификатором
 «TARGET_PROBLEM».


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    mb: IMetabase;

    MsKey: Integer;

    Problem: IMsProblem;

    CalcSettings: IMsProblemCalculationSettings;

    Calculation: IMsProblemCalculation;

    TargetProblem: IMsTargetProblem;

Begin

    mb := MetabaseClass.Active;

    // Получаем ключ контейнера моделирования

    MsKey := mb.GetObjectKeyById("MS");

    // Получаем целевую задачу

    Problem := mb.ItemByIdNamespace("TARGET_PROBLEM", MsKey).Bind As IMsProblem;

    // Создаем параметры расчета задачи

    CalcSettings := Problem.CreateCalculationSettings;

    // Получаем параметры целевой задачи

    TargetProblem := Problem.AdditionalDetails.Item(0) As IMsTargetProblem;

    // Указываем тип рассчитываемой задачи

    CalcSettings.Details := TargetProblem;

    // Выполняем расчет задачи

    Calculation := Problem.Calculate(CalcSettings);

    Calculation.Run;

End Sub UserProc;


В результате выполнения примера будет рассчитана задача оптимального
 управления.


См. также:


[IMsProblemCalculationSettings](IMsProblemCalculationSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
