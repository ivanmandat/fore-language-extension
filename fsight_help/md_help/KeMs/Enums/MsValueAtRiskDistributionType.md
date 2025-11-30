# MsValueAtRiskDistributionType

MsValueAtRiskDistributionType
-


# MsValueAtRiskDistributionType


## Описание


Перечисление MsValueAtRiskDistributionType
 содержит варианты распределения для финансового инструмента.


Используется следующим свойством:


	- [IMsValueAtRiskTransform.InstrumentDistribution](../Interface/IMsValueAtRiskTransform/IMsValueAtRiskTransform.InstrumentDistribution.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Normal. Нормальное
		 (гауссовское) распределение.


		 1
		 Student. Распределение
		 Стьюдента.


		 2
		 ChiSquared. Распределение
		 Хи-квадрат.


		 3
		 DoubleSidedExponential.
		 Двустороннее экспоненциальное распределение.


		 4
		 Weibull. Распределение
		 Вейбулла.


		 5
		 Gamma. Гамма-распределение.


		 6
		 Uniform. Равномерное
		 распределение.


## Комментарии


Распределение для финансовых инструментов используется в модели [ValueAtRisk](../Interface/IMsValueAtRiskTransform/IMsValueAtRiskTransform.htm),
 которая рассчитывается методом «Монте-Карло».


См. также:


[Перечисления
 сборки Ms](KeMs_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
