# DiffEvolutionStrategyType

DiffEvolutionStrategyType
-


# DiffEvolutionStrategyType


## Описание


Перечисление DiffEvolutionStrategyType
 используется для определения способа генерации пробных векторов.


Используется следующим свойством:


	- [IDifferEvolutionParams.EvolutionStrategy](../Interface/IDifferEvolutionParams/IDifferEvolutionParams.EvolutionStrategy.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Best1Exp. Экспоненциальная
		 стратегия случайной мутации Best/1.


		 1
		 Rand1Exp. Экспоненциальная
		 стратегия случайной мутации Rand/1.


		 2
		 RandToBest1Exp. Экспоненциальная
		 стратегия случайной мутации Target-to-best/1.


		 3
		 Best2Exp. Экспоненциальная
		 стратегия случайной мутации Best/2.


		 4
		 Rand2Exp. Экспоненциальная
		 стратегия случайной мутации Rand/2.


		 5
		 Best1Bin. Биномиальная
		 стратегия случайной мутации Best/1.


		 6
		 Rand1Bin. Биномиальная
		 стратегия случайной мутации Rand/1.


		 7
		 RandToBest1Bin. Биномиальная
		 стратегия случайной мутации Target-to-best/1.


		 8
		 Best2Bin. Биномиальная
		 стратегия случайной мутации Best/2.


		 9
		 Rand2Bin. Биномиальная
		 стратегия случайной мутации Rand/2.


## Комментарии


Стратегии случайной мутации:


	- Best/1. V(i)=X(best)+F*(X(r1)-X(r2));


	- Rand/1. V(i)=X(r1)+F*(X(r2)-X(r3));


	- Target-to-best/1. V(i)=X(i)+F*(X(best)-X(i))+F*(X(r1)-X(r2));


	- Best/2. V(i)=X(best)+F*(X(r1)-X(r2))+F*(X(r3)-X(r4));


	- Rand/2.: V(i)=X(r1)+F*(X(r2)-X(r3))+F*(x(r4)-X(r5)).


См. также:


[Перечисления
 сборки Cp](KeCp_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
