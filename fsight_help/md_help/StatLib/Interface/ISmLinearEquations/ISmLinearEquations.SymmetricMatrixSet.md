# ISmLinearEquations.SymmetricMatrixSet

ISmLinearEquations.SymmetricMatrixSet
-


# ISmLinearEquations.SymmetricMatrixSet


## Синтаксис


SymmetricMatrixSet: Boolean;


## Описание


Свойство SymmetricMatrixSet
 определяет, приводить ли систему линейных уравнений к эквивалентной с
 положительно определённой симметричной матрицей.


## Комментарии


Свойство актуально, если для решения системы линейных уравнений используется
 метод сопряженных градиентов, т.е. [ISmLinearEquations.SLEMethod](ISmLinearEquations.SLEMethod.htm) = [SLEMethodType](../../Enums/SLEMethodType.htm).ConjugateGradient.
 Метод сопряженных градиентов гарантирует сходимость, только если матрица
 коэффициентов является симметричной и положительно определенной.
 Если заданная матрица коэффициентов не является симметричной и положительно
 определенной, то для того чтобы гарантировать сходимость, следует задать
 SymmetricMatrixSet = True.


Допустимые значения:


	- True. Система линейных
	 уравнений будет приведена к эквивалентной с положительно определённой
	 симметричной матрицей;


	- False. Система линейных
	 уравнений не будет приведена к эквивалентной с положительно определённой
	 симметричной матрицей.


## Пример


Использование свойства приведено в примере для [ISmLinearEquations.InitApproximation](ISmLinearEquations.InitApproximation.htm).


См. также:


[ISmLinearEquations](ISmLinearEquations.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
