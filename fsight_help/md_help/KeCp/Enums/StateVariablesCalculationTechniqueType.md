# StateVariablesCalculationTechniqueType

StateVariablesCalculationTechniqueType
-


# StateVariablesCalculationTechniqueType


## Описание


Перечисление StateVariablesCalculationTechniqueType
 используется для определения способа вычисления фазовых переменных.


Используется следующими свойствами:


	- [ICpNonLinearOptimization.VariablesCalculationTechnique](../Interface/ICpNonLinearOptimization/ICpNonLinearOptimization.VariablesCalculationTechnique.htm);


	- [IMsOptimizationProblem.VariablesCalculationTechnique](kems.chm::/Interface/IMsOptimizationProblem/IMsOptimizationProblem.VariablesCalculationTechnique.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 IterativeCalculation.
		 Значения фазовых переменных вычисляются последовательно. Новые
		 значения в момент t вычисляются
		 на основе значений, полученных в предыдущие моменты времени 1…t-1. При таком подходе происходит
		 многократное перевычисление выражений для фазовых переменных.


		 1
		 DirectEntirelySubstitution.
		 Если выбран данный механизм, то предварительно выполняется подстановка
		 выражений фазовых переменных. При таком подходе многократно возрастает
		 размер выражений, но за счет того, что не нужно производить вычисления
		 в каждый момент времени, число перевычислений сокращается.


См. также:


[Перечисления
 сборки Cp](KeCp_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
