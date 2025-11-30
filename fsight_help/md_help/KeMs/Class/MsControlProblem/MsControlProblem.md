# MsControlProblem

MsControlProblem
-


# MsControlProblem


## Описание


Класс MsControlProblem реализует
 задачу оптимального управления контейнера моделирования.


## Комментарии


Задача оптимального управления состоит в отыскании таких значений управляющих
 переменных, при которых будет выполнено условие оптимизации значения целевой
 функции.


## Свойства, унаследованные от [IMsControlProblem](../../Interface/IMsControlProblem/IMsControlProblem.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Constraints](../../Interface/IMsControlProblem/IMsControlProblem.Constraints.htm)


		 Свойство Constraints
		 возвращает коллекцию ограничений для целевой функции.


		 ![](../../Property_Image.gif)
		 [OptimalVariable](../../Interface/IMsControlProblem/IMsControlProblem.OptimalVariable.htm)


		 Свойство OptimalVariable
		 определяет переменную контейнера моделирования, в которую будет
		 выгружаться рассчитанное оптимальное значение целевой функции.


## Свойства, унаследованные от [IMsOptimizationProblem](../../Interface/IMsOptimizationProblem/IMsOptimizationProblem.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Extremum](../../Interface/IMsOptimizationProblem/IMsOptimizationProblem.Extremum.htm)
		 Свойство Extremum определяет
		 тип экстремума, который будет искаться при нахождении оптимального
		 значения целевой функции.


		 ![](../../Property_Image.gif)
		 [MaxIterationsCount](../../Interface/IMsOptimizationProblem/IMsOptimizationProblem.MaxIterationsCount.htm)
		 Свойство MaxIterationsCount
		 определяет максимальное количество итераций, за которое будет
		 определяться оптимальное значение.


		 ![](../../Property_Image.gif)
		 [MethodType](../../Interface/IMsOptimizationProblem/IMsOptimizationProblem.MethodType.htm)
		 Свойство MethodType
		 определяет метод расчёта задачи.


		 ![](../../Property_Image.gif)
		 [NodesCount](../../Interface/IMsOptimizationProblem/IMsOptimizationProblem.NodesCount.htm)
		 Свойство NodesCount
		 определяет количество интервалов, на которые будет разбиваться
		 диапазон, заданный для управляющих переменных.


		 ![](../../Property_Image.gif)
		 [Tolerance](../../Interface/IMsOptimizationProblem/IMsOptimizationProblem.Tolerance.htm)
		 Свойство Tolerance
		 определяет точность расчёта задачи.


		 ![](../../Property_Image.gif)
		 [VariablesCalculationTechnique](../../Interface/IMsOptimizationProblem/IMsOptimizationProblem.VariablesCalculationTechnique.htm)
		 Свойство VariablesCalculationTechnique
		 определяет механизм оптимизации, используемый для расчёта значений
		 фазовых переменных.


## Свойства, унаследованные от [IMsBaseOptimizationProblem](../../Interface/IMsBaseOptimizationProblem/IMsBaseOptimizationProblem.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ControlTransform](../../Interface/IMsBaseOptimizationProblem/IMsBaseOptimizationProblem.ControlTransform.htm)
		 Свойство ControlTransform
		 возвращает параметры расчёта модели, содержащей целевую функцию.


		 ![](../../Property_Image.gif)
		 [ControlVariables](../../Interface/IMsBaseOptimizationProblem/IMsBaseOptimizationProblem.ControlVariables.htm)
		 Свойство ControlVariables
		 возвращает коллекцию управляющих переменных.


		 ![](../../Property_Image.gif)
		 [CriterionFunction](../../Interface/IMsBaseOptimizationProblem/IMsBaseOptimizationProblem.CriterionFunction.htm)
		 Свойство CriterionFunction
		 возвращает целевую функцию.


		 ![](../../Property_Image.gif)
		 [CriterionFunctionResults](../../Interface/IMsBaseOptimizationProblem/IMsBaseOptimizationProblem.CriterionFunctionResults.htm)
		 Свойство CriterionFunctionResults
		 возвращает результат расчёта целевой функции.


		 ![](../../Property_Image.gif)
		 [Level](../../Interface/IMsBaseOptimizationProblem/IMsBaseOptimizationProblem.Level.htm)
		 Свойство Level
		 определяет уровень календаря, по которому будет осуществляться
		 расчёт задачи.


		 ![](../../Property_Image.gif)
		 [Operands](../../Interface/IMsBaseOptimizationProblem/IMsBaseOptimizationProblem.Operands.htm)
		 Свойство Operands
		 возвращает коллекцию фазовых переменных.


		 ![](../../Property_Image.gif)
		 [Problem](../../Interface/IMsBaseOptimizationProblem/IMsBaseOptimizationProblem.Problem.htm)
		 Свойство Problem возвращает
		 задачу моделирования, которая используется при расчёте.


## Свойства, унаследованные от [IMsProblemDetails](../../Interface/IMsProblemDetails/IMsProblemDetails.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Period](../../Interface/IMsProblemDetails/IMsProblemDetails.Period.htm)
		 Свойство Period возвращает
		 объект, определяющий параметры периодов прогнозирования и идентификации
		 для задачи моделирования.


См. также:


[Классы сборки Ms](../KeMs_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
