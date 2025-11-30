# LinearOptimization

LinearOptimization
-


# LinearOptimization


## Описание


Класс LinearOptimization содержит
 свойства и методы линейной оптимизации.


## Комментарий


Для использования свойств и методов линейной оптимизации должна быть
 проведена [интеграция
 с LPSolve](UiNav.chm::/02_Navigator/CommonSettings/Integration.htm#lpsolve) или задан путь до библиотеки lpsolve55.dll
 с помощью свойства [ISmLPSolveManager.UserLPSolvePath](StatLib.chm::/Interface/ISmLPSolveManager/ISmLPSolveManager.UserLPSolvePath.htm).


## Свойства, унаследованные от [ICpLinearOptimization](../../Interface/ICpLinearOptimization/ICpLinearOptimization.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Constraints](../../Interface/ICpLinearOptimization/ICpLinearOptimization.Constraints.htm)
		 Свойство Constraints
		 возвращает ограничения линейной оптимизации.


		 ![](../../Property_Image.gif)
		 [CriterionFunction](../../Interface/ICpLinearOptimization/ICpLinearOptimization.CriterionFunction.htm)
		 Свойство CriterionFunction
		 возвращает целевую функцию.


		 ![](../../Property_Image.gif)
		 [Equations](../../Interface/ICpLinearOptimization/ICpLinearOptimization.Equations.htm)
		 Свойство Equations
		 возвращает уравнения линейной оптимизации.


		 ![](../../Property_Image.gif)
		 [Variables](../../Interface/ICpLinearOptimization/ICpLinearOptimization.Variables.htm)
		 Свойство Variables
		 возвращает переменные линейной оптимизации.


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
