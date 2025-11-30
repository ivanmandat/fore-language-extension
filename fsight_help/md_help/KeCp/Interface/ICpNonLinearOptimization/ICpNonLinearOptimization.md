# ICpNonLinearOptimization

ICpNonLinearOptimization
-


# ICpNonLinearOptimization


Сборка: Cp;


## Описание


Интерфейс ICpNonLinearOptimization
 содержит свойства и методы нелинейной оптимизации.


## Иерархия наследования


           [ICpMethod](../ICpMethod/ICpMethod.htm)


           ICpNonLinearOptimization


## Комментарии


Для создания объекта, выполняющего нелинейную оптимизацию, используйте
 класс [NonLinearOptimization](../../Class/NonLinearOptimization/NonLinearOptimization.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CallbackCycle](ICpNonLinearOptimization.CallbackCycle.htm)


		 Свойство CallbackCycle
		 определяет обработчик, используемый для расчета управляющих переменных.


		 ![](../../Property_Image.gif)
		 [Constraints](ICpNonLinearOptimization.Constraints.htm)


		 Свойство Constraints
		 возвращает ограничения нелинейной оптимизации.


		 ![](../../Property_Image.gif)
		 [CriterionFunction](ICpNonLinearOptimization.CriterionFunction.htm)


		 Свойство CriterionFunction
		 определяет целевую функцию.


		 ![](../../Property_Image.gif)
		 [DifferEvolutionParams](ICpNonLinearOptimization.DifferEvolutionParams.htm)


		 Свойство DifferEvolutionParams
		 определяет параметры метода дифференциальной эволюции.


		 ![](../../Property_Image.gif)
		 [Equations](ICpNonLinearOptimization.Equations.htm)


		 Свойство Equations
		 определяет уравнения нелинейной оптимизации.


		 ![](../../Property_Image.gif)
		 [Explanatories](ICpNonLinearOptimization.Explanatories.htm)


		 Свойство Explanatories
		 возвращает коллекцию объясняющих (сценарных) переменных.


		 ![](../../Property_Image.gif)
		 [MaxIterationsCount](ICpNonLinearOptimization.MaxIterationsCount.htm)


		 Свойство MaxIterationsCount
		 определяет максимальное число итераций, за которое должен осуществиться
		 поиск решения.


		 ![](../../Property_Image.gif)
		 [MethodType](ICpNonLinearOptimization.MethodType.htm)


		 Свойство MethodType
		 определяет метод поиска решения.


		 ![](../../Property_Image.gif)
		 [NodesCount](ICpNonLinearOptimization.NodesCount.htm)


		 Свойство NodesCount
		 определяет количество интервалов, на которые будет разбиваться
		 диапазон, заданный для управляющих переменных.


		 ![](../../Property_Image.gif)
		 [Tolerance](ICpNonLinearOptimization.Tolerance.htm)


		 Свойство Tolerance
		 определяет точность решения.


		 ![](../../Property_Image.gif)
		 [Variables](ICpNonLinearOptimization.Variables.htm)


		 Свойство Variables
		 возвращает переменные нелинейной оптимизации.


		 ![](../../Property_Image.gif)
		 [VariablesCalculationTechnique](ICpNonLinearOptimization.VariablesCalculationTechnique.htm)


		 Свойство VariablesCalculationTechnique определяет
		 способ вычисления фазовых переменных.


## Свойства, унаследованные от [ICpMethod](../ICpMethod/ICpMethod.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Extremum](../ICpMethod/ICpMethod.Extremum.htm)
		 Свойство Extremum определяет
		 тип экстремума, который будет искаться при нахождении оптимального
		 значения.


## Методы, унаследованные от [ICpMethod](../ICpMethod/ICpMethod.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Evaluate](../ICpMethod/ICpMethod.Evaluate.htm)
		 Метод Evaluate осуществляет
		 расчет метода.


См. также:


[Интерфейсы сборки Cp](../KeCp_Interface.htm)
 | [Задача
 оптимального управления с учетом ограничений](Lib.chm::/04_Other_models/Optimization.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
