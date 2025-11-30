# ISmSingularSpectrumAnalysis.V

ISmSingularSpectrumAnalysis.V
-


# ISmSingularSpectrumAnalysis.V


## Синтаксис


V: Array;


## Описание


Свойство V возвращает значения
 главных компонент.


## Комментарии


Размер массива: m x n, где m
 - количество главных компонент, n
 - длина главных компонент. Для получения количества главных компонент
 используйте свойство [ISmSingularSpectrumAnalysis.PCCount](ISmSingularSpectrumAnalysis.PCCount.htm).


Если для анализа используются дополнительные главные компоненты, то
 в массив добавляются столбцы со значениями общегруппового и межгруппового
 средних. Если значение [ISmSingularSpectrumAnalysis.MatrixAlignmentType](ISmSingularSpectrumAnalysis.MatrixAlignmentType.htm)
 равно:


	- AlignmentType.NoAlignment,
	 то дополнительные главные компоненты не используются;


	- AlignmentType.SingleAlignment,
	 то в качестве дополнительной главной компоненты используется
	 общегрупповое среднее. Для получения его значения используйте первый
	 столбец массива: V[0, i];


	- AlignmentType.DoubleAlignment, то в
	 качестве дополнительных главных компонент используется общегрупповое
	 и межгрупповое среднее. Для получения значения общегруппового среднего
	 используйте первый столбец массива: V[0, i].
	 Для получения значения межгруппового среднего используйте второй столбец
	 массива: V[1, i].


## Пример


Использование свойства приведено в примере для [ISmSingularSpectrumAnalysis.Fitted](ISmSingularSpectrumAnalysis.Fitted.htm).


См. также:


[ISmSingularSpectrumAnalysis](ISmSingularSpectrumAnalysis.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
