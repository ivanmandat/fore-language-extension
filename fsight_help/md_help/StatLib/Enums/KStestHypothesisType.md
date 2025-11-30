# KStestHypothesisType

KStestHypothesisType
-


# KStestHypothesisType


## Описание


Перечисление KStestHypothesisType
 содержит варианты тестовых статистик.


Используется следующим свойством:


	- [ISmKolmogorovSmirnovTest.Hypothesis](../Interface/ISmKolmogorovSmirnovTest/ISmKolmogorovSmirnovTest.Hypothesis.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 ![](../Enums.gif)
		 0
		 NotEqual. Статистика
		 ![](../Interface/ISmKolmogorovSmirnovTest/Dn.gif),
		 проверить гипотезу H0 против гипотезы H1.


		 ![](../Enums.gif)
		 1
		 Sample1Dominates. Статистика
		 ![](../Interface/ISmKolmogorovSmirnovTest/DnPlus.gif),
		 чтобы проверить гипотезу H0 против гипотезы H2.


		 ![](../Enums.gif)
		 2
		 Sample1Dominated. Статистика
		 ![](../Interface/ISmKolmogorovSmirnovTest/DnMinus.gif),
		 чтобы проверить гипотезу H0 против гипотезы H3.


## Комментарии


Гипотезы:


	- H0. Данные - это случайная
	 выборка наблюдений теоретического распределения, заданного пользователем;


	- H1. Данные не могут
	 быть случайной выборкой указанного распределения;


	- H2. Данные являются
	 результатом распределения, которое доминирует над указанным нулевым
	 распределением;


	- H3. Данные являются
	 результатом распределения, над которым доминирует указанное нулевое
	 распределение.


См. также:


[Перечисления сборки Stat](StatLib_Enums.htm) |
 [Тест
 Колмогорова-Смирнова](Lib.chm::/05_Statistics/UiModelling_KolmogorovSmirnovTest.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
