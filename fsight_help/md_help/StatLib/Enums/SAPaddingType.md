# SAPaddingType

SAPaddingType
-


# SAPaddingType


## Описание


Перечисление SAPaddingType используется
 для определения способа заполнения/усечения ряда.


Используется свойством:


	- [ISmUnivariateSpectrumAnalysis.PaddingType](../Interface/ISmUnivariateSpectrumAnalysis/ISmUnivariateSpectrumAnalysis.PaddingType.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 ![](../Element%20Enums.gif)
		 0
		 UseExactLength. Использовать
		 ряд исходной длины.


		 ![](../Element%20Enums.gif)
		 1
		 TruncateToPower. Сократить
		 исходный ряд до длины, равной степени 2 (2,4,8,16,32,…).


		 ![](../Element%20Enums.gif)
		 2
		 PadToPower. Увеличить
		 исходный ряд с помощью нулевых значений до длины, равной степени
		 2 (2,4,8,16,32,…).


		 ![](../Element%20Enums.gif)
		 3
		 PadByZeros. Увеличить
		 длину исходного ряда с помощью нулевых значений. Количество значений
		 определяет свойство [ISmUnivariateSpectrumAnalysis.ZerosCount](../Interface/ISmUnivariateSpectrumAnalysis/ISmUnivariateSpectrumAnalysis.ZerosCount.htm).


См. также:


[Перечисления
 сборки Stat](StatLib_Enums.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
