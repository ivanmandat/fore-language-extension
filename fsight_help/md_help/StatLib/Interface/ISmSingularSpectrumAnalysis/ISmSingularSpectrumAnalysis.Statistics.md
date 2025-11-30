# ISmSingularSpectrumAnalysis.Statistics

ISmSingularSpectrumAnalysis.Statistics
-


# ISmSingularSpectrumAnalysis.Statistics


## Синтаксис


Statistics: Array;


## Описание


Свойство Statistics возвращает
 собственные значения и статистики.


## Комментарии


Элементы массива:


	- [i, 0]. Собственное
	 значение;


	- [i, 1]. Дисперсия;


	- [i, 2]. Накопленная
	 дисперсия;


	- [i, 3]. Статистика
	 хи-квадрат;


	- [i, 4]. Число
	 степеней свободы для статистики хи-квадрат;


	- [i, 5]. Вероятность
	 для статистики хи-квадрат.


Где i - индекс главной компоненты.
 Индексация компонент сквозная и начинается с нуля.


Для получения количества главных компонент (ГК) используйте свойства
 [ISmSingularSpectrumAnalysis.PCCount](ISmSingularSpectrumAnalysis.PCCount.htm)
 и [ISmSingularSpectrumAnalysis.MatrixAlignmentType](ISmSingularSpectrumAnalysis.MatrixAlignmentType.htm).
 Если значение ISmSingularSpectrumAnalysis.MatrixAlignmentType
 равно:


	- AlignmentType.NoAlignment,
	 то количество ГК = ISmSingularSpectrumAnalysis.PCCount;


	- AlignmentType.SingleAlignment,
	 то количество ГК = ISmSingularSpectrumAnalysis.PCCount+1,
	 т.к. общегрупповое среднее используется в качестве дополнительной
	 главной компоненты;


	- AlignmentType.DoubleAlignment, то
	 количество ГК = ISmSingularSpectrumAnalysis.PCCount+2,
	 т.к. общегрупповое и межгрупповое среднее используется в качестве
	 дополнительных главных компонент.


## Пример


Использование свойства приведено в примере для [ISmSingularSpectrumAnalysis.Fitted](ISmSingularSpectrumAnalysis.Fitted.htm).


См. также:


[ISmSingularSpectrumAnalysis](ISmSingularSpectrumAnalysis.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
