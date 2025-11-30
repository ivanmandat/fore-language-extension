# BinningMethod

BinningMethod
-


# BinningMethod


## Описание


Перечисление BinningMethod
 используется для определения метода расчёта процедуры Binning.


Используется следующими свойствами:


	- [IBinningSettings.Method](../Interface/IBinningSettings/IBinningSettings.Method.htm);


	- [IDmField.BinningType](kems.chm::/Interface/IDmField/IDmField.BinningType.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 ![](../Element%20Enums.gif)
		 0
		 None. Массив данных
		 не будет разбиваться на группы.


		 ![](../Element%20Enums.gif)
		 1
		 EqualWidth. Массив данных будет разбит на отрезки равной
		 ширины.


		 ![](../Element%20Enums.gif)
		 2
		 EqualDepth. Массив данных будет разбит на отрезки, содержащие
		 равное число объектов.


		 ![](../Element%20Enums.gif)
		 3
		 KMeansClustering. Массив
		 данных будет разбит на отрезки с помощью метода [К-средних](Lib.chm::/04_Other_models/Lib_kMeans.htm).


См. также:


[Перечисления
 сборки Stat](StatLib_Enums.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
