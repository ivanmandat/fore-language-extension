# ISmKolmogorovSmirnovTest.Parameter1

ISmKolmogorovSmirnovTest.Parameter1
-


# ISmKolmogorovSmirnovTest.Parameter1


## Синтаксис


Parameter1: Double;


## Описание


Свойство Parameter1 определяет
 значение параметра 1. Если значение параметра не задано (значение 1#.QNAN),
 то он будет вычислен. Исключением является случай использования [биномиального
 закона распределения](ISmKolmogorovSmirnovTest.Distribution.htm), так как следует обязательно определить значение
 параметра 1 (m). Ниже приведено соответствие параметра 1 параметрам распределения
 и указаны ограничения на значения:


		 Распределение
		 Значение параметра 1
		 Ограничения на значение


		 Нормальное распределение
		 µ
		 -


		 Равномерное распределение
		 α
		 α < [Parameter2](ISmKolmogorovSmirnovTest.Parameter2.htm)


		 Гамма-распределение
		 α
		 α > 0


		 Бета-распределение
		 α
		 0< α ≤ 10^6


		 Биномиальное распределение
		 m
		 m ≥ 1

m*[Parameter2](ISmKolmogorovSmirnovTest.Parameter2.htm)*(1-[Parameter2](ISmKolmogorovSmirnovTest.Parameter2.htm))
		 ≤ 10^6

m < 1/e, где e – это машинная точность


		 Экспоненциальное распределение
		 λ
		 λ > 0


		 Распределение Пуассона
		 µ
		 0 < µ ≤ 10^6


## Пример


Использование свойства приведено в примере для [ISmKolmogorovSmirnovTest.D](ISmKolmogorovSmirnovTest.D.htm).


См. также:


[ISmKolmogorovSmirnovTest](ISmKolmogorovSmirnovTest.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
