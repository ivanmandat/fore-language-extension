# IMsBaseOptimizationProblem

IMsBaseOptimizationProblem
-


# IMsBaseOptimizationProblem


Сборка: Ms;


## Описание


Интерфейс IMsBaseOptimizationProblem
 является базовым классом для задачи оптимизации.


## Иерархия наследования


           [IMsProblemDetails](../IMsProblemDetails/IMsProblemDetails.htm)


           IMsBaseOptimizationProblem


## Комментарии


К задаче оптимизации относятся следующие [типы
 задачи](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_4_Problem/uimodelling_problem_2.htm):


	- [задача
	 оптимального управления](../IMsControlProblem/IMsControlProblem.htm);


	- [целевая задача](../IMsTargetProblem/IMsTargetProblem.htm);


	- [пользовательская
	 задача оптимизации](../IMsUserOptimizationProblem/IMsUserOptimizationProblem.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ControlTransform](IMsBaseOptimizationProblem.ControlTransform.htm)
		 Свойство ControlTransform
		 возвращает параметры расчёта модели, содержащей целевую функцию.


		 ![](../../Property_Image.gif)
		 [ControlVariables](IMsBaseOptimizationProblem.ControlVariables.htm)
		 Свойство ControlVariables
		 возвращает коллекцию управляющих переменных.


		 ![](../../Property_Image.gif)
		 [CriterionFunction](IMsBaseOptimizationProblem.CriterionFunction.htm)
		 Свойство CriterionFunction
		 возвращает целевую функцию.


		 ![](../../Property_Image.gif)
		 [CriterionFunctionResults](IMsBaseOptimizationProblem.CriterionFunctionResults.htm)
		 Свойство CriterionFunctionResults
		 возвращает результат расчёта целевой функции.


		 ![](../../Property_Image.gif)
		 [Level](IMsBaseOptimizationProblem.Level.htm)
		 Свойство Level
		 определяет уровень календаря, по которому будет осуществляться
		 расчёт задачи.


		 ![](../../Property_Image.gif)
		 [Operands](IMsBaseOptimizationProblem.Operands.htm)
		 Свойство Operands
		 возвращает коллекцию фазовых переменных.


		 ![](../../Property_Image.gif)
		 [Problem](IMsBaseOptimizationProblem.Problem.htm)
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


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
