# ISmKolmogorovSmirnovTest.Parameter2

ISmKolmogorovSmirnovTest.Parameter2
-


# ISmKolmogorovSmirnovTest.Parameter2


## Синтаксис


Parameter2: Double;


## Описание


Свойство Parameter2 определяет
 значение параметра 2. Если значение параметра не задано (значение 1#.QNAN),
 то он будет вычислен. Ниже приведено соответствие параметра 2 параметрам
 распределения и указаны ограничения на значения:


		 Распределение
		 Значение параметра 2
		 Ограничения на значение


		 Нормальное распределение
		 σ2
		 σ2 ≥ 0


		 Равномерное распределение
		 b
		 [Parameter1](ISmKolmogorovSmirnovTest.Parameter1.htm)
		 < b


		 Гамма-распределение
		 b
		 b > 0


		 Бета-распределение
		 b
		 0<b≤ 10^6


		 Биномиальное распределение
		 p
		 0 ≤ p ≤ 1

[Parameter1](ISmKolmogorovSmirnovTest.Parameter1.htm)*p*(1-p)≤10^6


[Parameter1](ISmKolmogorovSmirnovTest.Parameter1.htm)
		 < 1/e, где e – это машинная точность


		 Экспоненциальное распределение
		 -
		 -


		 Распределение Пуассона
		 -
		 -


## Пример


Использование свойства приведено в примере для [ISmKolmogorovSmirnovTest.D](ISmKolmogorovSmirnovTest.D.htm).


См. также:


[ISmKolmogorovSmirnovTest](ISmKolmogorovSmirnovTest.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
