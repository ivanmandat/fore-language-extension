# ISmSingularSpectrumAnalysis.MatrixAlignmentType

ISmSingularSpectrumAnalysis.MatrixAlignmentType
-


# ISmSingularSpectrumAnalysis.MatrixAlignmentType


## Синтаксис


MatrixAlignmentType: [AlignmentType](../../Enums/AlignmentType.htm);


## Описание


Свойство MatrixAlignmentType
 определяет тип центрирования матрицы исходных данных.


## Комментарии


Тип центрирования определяет, нужно ли добавлять межгрупповое и общегрупповое
 средние в качестве дополнительных главных компонент. Допустимые значения:


	- AlignmentType.NoAlignment.
	 Дополнительные главные компоненты не используются;


	- AlignmentType.SingleAlignment.
	 В качестве дополнительной главной компоненты используется общегрупповое
	 среднее;


	- AlignmentType.DoubleAlignment.
	 В качестве дополнительных главных компонент используется не только
	 общегрупповое, но и межгрупповое среднее.


Для получения статистик дополнительных главных компонент используйте
 свойство [ISmSingularSpectrumAnalysis.Statistics](ISmSingularSpectrumAnalysis.Statistics.htm).


Для получения значения общегруппового\межгруппового среднего используйте
 свойство [ISmSingularSpectrumAnalysis.V](ISmSingularSpectrumAnalysis.V.htm).


## Пример


Использование свойства приведено в примере для [ISmSingularSpectrumAnalysis.Fitted](ISmSingularSpectrumAnalysis.Fitted.htm).


См. также:


[ISmSingularSpectrumAnalysis](ISmSingularSpectrumAnalysis.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
