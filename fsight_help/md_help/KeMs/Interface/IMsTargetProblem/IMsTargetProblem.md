# IMsTargetProblem

IMsTargetProblem
-


# IMsTargetProblem


Сборка: Ms;


## Описание


Интерфейс IMsTargetProblem
 предназначен для настройки параметров расчета целевой задачи.


## Иерархия наследования


           [IMsProblemDetails](../IMsProblemDetails/IMsProblemDetails.htm)


           [IMsBaseOptimizationProblem](../IMsBaseOptimizationProblem/IMsBaseOptimizationProblem.htm)


           [IMsOptimizationProblem](../IMsOptimizationProblem/IMsOptimizationProblem.htm)


           IMsTargetProblem


## Комментарий


Целевая задача состоит в отыскании таких значений управляющих переменных,
 при которых значение целевой функции будет максимально соответствовать
 заданной траектории.


Для настройки параметров расчета целевой задачи должна быть проведена
 [интеграция
 с LPSolve](UiNav.chm::/02_Navigator/CommonSettings/Integration.htm#lpsolve) или задан путь до библиотеки lpsolve55.dll
 с помощью свойства [ISmLPSolveManager.UserLPSolvePath](StatLib.chm::/Interface/ISmLPSolveManager/ISmLPSolveManager.UserLPSolvePath.htm).


Для создания параметров расчета целевой задачи используйте класс [MsTargetProblem](../../Class/MsTargetProblem/MsTargetProblem.htm).
 Для корректной работы созданной задачи её необходимо добавить в коллекцию
 дополнительных параметров задачи. Используйте для этого свойство [IMsProblem.AdditionalDetails](../IMsProblem/IMsProblem.AdditionalDetails.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AutoSearchType](IMsTargetProblem.AutoSearchType.htm)


		 Свойство AutoSearchType
		 определяет тип целевой задачи.


		 ![](../../Property_Image.gif)
		 [Constraints](IMsTargetProblem.Constraints.htm)
		 Свойство Constraints
		 возвращает коллекцию ограничений целевой функции.


		 ![](../../Property_Image.gif)
		 [OptimisticScenario](IMsTargetProblem.OptimisticScenario.htm)
		 Свойство OptimisticScenario
		 определяет сценарий оптимизационной задачи.


		 ![](../../Property_Image.gif)
		 [TargetScenario](IMsTargetProblem.TargetScenario.htm)
		 Свойство TargetScenario
		 определяет сценарий целевой задачи.


		 ![](../../Property_Image.gif)
		 [TrajectoryScenario](IMsTargetProblem.TrajectoryScenario.htm)


		 Свойство TargetScenario
		 определяет сценарий для траектории целевой задачи.


## Свойства, унаследованные от [IMsOptimizationProblem](../IMsOptimizationProblem/IMsOptimizationProblem.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Extremum](../IMsOptimizationProblem/IMsOptimizationProblem.Extremum.htm)
		 Свойство Extremum определяет
		 тип экстремума, который будет искаться при нахождении оптимального
		 значения целевой функции.


		 ![](../../Property_Image.gif)
		 [MaxIterationsCount](../IMsOptimizationProblem/IMsOptimizationProblem.MaxIterationsCount.htm)
		 Свойство MaxIterationsCount
		 определяет максимальное количество итераций, за которое будет
		 определяться оптимальное значение.


		 ![](../../Property_Image.gif)
		 [MethodType](../IMsOptimizationProblem/IMsOptimizationProblem.MethodType.htm)
		 Свойство MethodType
		 определяет метод расчёта задачи.


		 ![](../../Property_Image.gif)
		 [NodesCount](../IMsOptimizationProblem/IMsOptimizationProblem.NodesCount.htm)
		 Свойство NodesCount
		 определяет количество интервалов, на которые будет разбиваться
		 диапазон, заданный для управляющих переменных.


		 ![](../../Property_Image.gif)
		 [Tolerance](../IMsOptimizationProblem/IMsOptimizationProblem.Tolerance.htm)
		 Свойство Tolerance
		 определяет точность расчёта задачи.


		 ![](../../Property_Image.gif)
		 [VariablesCalculationTechnique](../IMsOptimizationProblem/IMsOptimizationProblem.VariablesCalculationTechnique.htm)
		 Свойство VariablesCalculationTechnique
		 определяет механизм оптимизации, используемый для расчёта значений
		 фазовых переменных.


## Свойства, унаследованные от [IMsBaseOptimizationProblem](../IMsBaseOptimizationProblem/IMsBaseOptimizationProblem.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ControlTransform](../IMsBaseOptimizationProblem/IMsBaseOptimizationProblem.ControlTransform.htm)
		 Свойство ControlTransform
		 возвращает параметры расчёта модели, содержащей целевую функцию.


		 ![](../../Property_Image.gif)
		 [ControlVariables](../IMsBaseOptimizationProblem/IMsBaseOptimizationProblem.ControlVariables.htm)
		 Свойство ControlVariables
		 возвращает коллекцию управляющих переменных.


		 ![](../../Property_Image.gif)
		 [CriterionFunction](../IMsBaseOptimizationProblem/IMsBaseOptimizationProblem.CriterionFunction.htm)
		 Свойство CriterionFunction
		 возвращает целевую функцию.


		 ![](../../Property_Image.gif)
		 [CriterionFunctionResults](../IMsBaseOptimizationProblem/IMsBaseOptimizationProblem.CriterionFunctionResults.htm)
		 Свойство CriterionFunctionResults
		 возвращает результат расчёта целевой функции.


		 ![](../../Property_Image.gif)
		 [Level](../IMsBaseOptimizationProblem/IMsBaseOptimizationProblem.Level.htm)
		 Свойство Level
		 определяет уровень календаря, по которому будет осуществляться
		 расчёт задачи.


		 ![](../../Property_Image.gif)
		 [Operands](../IMsBaseOptimizationProblem/IMsBaseOptimizationProblem.Operands.htm)
		 Свойство Operands
		 возвращает коллекцию фазовых переменных.


		 ![](../../Property_Image.gif)
		 [Problem](../IMsBaseOptimizationProblem/IMsBaseOptimizationProblem.Problem.htm)
		 Свойство Problem возвращает
		 задачу моделирования, которая используется при расчёте.


## Свойства, унаследованные от [IMsProblemDetails](../IMsProblemDetails/IMsProblemDetails.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Period](../IMsProblemDetails/IMsProblemDetails.Period.htm)
		 Свойство Period возвращает
		 объект, определяющий параметры периодов прогнозирования и идентификации
		 для задачи моделирования.


См. также:


[Интерфейсы
 сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
