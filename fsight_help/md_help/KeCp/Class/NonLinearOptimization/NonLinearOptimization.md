# NonLinearOptimization

NonLinearOptimization
-


# NonLinearOptimization


## Описание


Класс NonLinearOptimization
 содержит свойства и методы нелинейной оптимизации.


## Комментарий


Для использования свойств и методов нелинейной оптимизации должна быть
 проведена [интеграция
 с LPSolve](UiNav.chm::/02_Navigator/CommonSettings/Integration.htm#lpsolve) или задан путь до библиотеки lpsolve55.dll
 с помощью свойства [ISmLPSolveManager.UserLPSolvePath](StatLib.chm::/Interface/ISmLPSolveManager/ISmLPSolveManager.UserLPSolvePath.htm).


## Свойства, унаследованные от [ICpNonLinearOptimization](../../Interface/ICpNonLinearOptimization/ICpNonLinearOptimization.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CallbackCycle](../../Interface/ICpNonLinearOptimization/ICpNonLinearOptimization.CallbackCycle.htm)


		 Свойство CallbackCycle
		 определяет обработчик, используемый для расчета управляющих переменных.


		 ![](../../Property_Image.gif)
		 [Constraints](../../Interface/ICpNonLinearOptimization/ICpNonLinearOptimization.Constraints.htm)


		 Свойство Constraints
		 возвращает ограничения нелинейной оптимизации.


		 ![](../../Property_Image.gif)
		 [CriterionFunction](../../Interface/ICpNonLinearOptimization/ICpNonLinearOptimization.CriterionFunction.htm)


		 Свойство CriterionFunction
		 определяет целевую функцию.


		 ![](../../Property_Image.gif)
		 [DifferEvolutionParams](../../Interface/ICpNonLinearOptimization/ICpNonLinearOptimization.DifferEvolutionParams.htm)


		 Свойство DifferEvolutionParams
		 определяет параметры метода дифференциальной эволюции.


		 ![](../../Property_Image.gif)
		 [Equations](../../Interface/ICpNonLinearOptimization/ICpNonLinearOptimization.Equations.htm)


		 Свойство Equations
		 определяет уравнения нелинейной оптимизации.


		 ![](../../Property_Image.gif)
		 [Explanatories](../../Interface/ICpNonLinearOptimization/ICpNonLinearOptimization.Explanatories.htm)


		 Свойство Explanatories
		 возвращает коллекцию объясняющих (сценарных) переменных.


		 ![](../../Property_Image.gif)
		 [MaxIterationsCount](../../Interface/ICpNonLinearOptimization/ICpNonLinearOptimization.MaxIterationsCount.htm)


		 Свойство MaxIterationsCount
		 определяет максимальное число итераций, за которое должен осуществиться
		 поиск решения.


		 ![](../../Property_Image.gif)
		 [MethodType](../../Interface/ICpNonLinearOptimization/ICpNonLinearOptimization.MethodType.htm)


		 Свойство MethodType
		 определяет метод поиска решения.


		 ![](../../Property_Image.gif)
		 [NodesCount](../../Interface/ICpNonLinearOptimization/ICpNonLinearOptimization.NodesCount.htm)


		 Свойство NodesCount
		 определяет количество интервалов, на которые будет разбиваться
		 диапазон, заданный для управляющих переменных.


		 ![](../../Property_Image.gif)
		 [Tolerance](../../Interface/ICpNonLinearOptimization/ICpNonLinearOptimization.Tolerance.htm)


		 Свойство Tolerance
		 определяет точность решения.


		 ![](../../Property_Image.gif)
		 [Variables](../../Interface/ICpNonLinearOptimization/ICpNonLinearOptimization.Variables.htm)


		 Свойство Variables
		 возвращает переменные нелинейной оптимизации.


		 ![](../../Property_Image.gif)
		 [VariablesCalculationTechnique](../../Interface/ICpNonLinearOptimization/ICpNonLinearOptimization.VariablesCalculationTechnique.htm)


		 Свойство VariablesCalculationTechnique определяет
		 способ вычисления фазовых переменных.


## Свойства, унаследованные от [ICpMethod](../../Interface/ICpMethod/ICpMethod.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Extremum](../../Interface/ICpMethod/ICpMethod.Extremum.htm)
		 Свойство Extremum определяет
		 тип экстремума, который будет искаться при нахождении оптимального
		 значения.


## Методы, унаследованные от [ICpMethod](../../Interface/ICpMethod/ICpMethod.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Evaluate](../../Interface/ICpMethod/ICpMethod.Evaluate.htm)
		 Метод Evaluate осуществляет
		 расчет метода.


См. также:


[Классы сборки Cp](../KeCp_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
