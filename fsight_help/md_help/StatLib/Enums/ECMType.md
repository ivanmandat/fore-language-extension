# ECMType

ECMType
-


# ECMType


## Описание


Перечисление ECMType используется для определения типа модели коррекции ошибок.


Используется следующими свойствами и методами:


-
[IModelling.Ecm](KeMs.chm::/Interface/IModelling/IModelling.Ecm.htm);


-
[IMsCointegrationEquationTransform.ModelType](KeMs.chm::/Interface/IMsCointegrationEquationTransform/IMsCointegrationEquationTransform.ModelType.htm);


-
[IMsJohansenTestSettings.ModelType](KeMs.chm::/Interface/IMsJohansenTestSettings/IMsJohansenTestSettings.ModelType.htm);


-
[ISmCointegrationEq.ModelType](../Interface/ISmCointegrationEq/ISmCointegrationEq.ModelType.htm);


-
[ISmErrorCorrectionModel.ModelType](../Interface/ISmErrorCorrectionModel/ISmErrorCorrectionModel.ModelType.htm);


-
[ISmJohansenTest.ModelType](../Interface/ISmJohansenTest/ISmJohansenTest.ModelType.htm).


## Допустимые значения


 Значение
 Краткое описание


 ![](../Enums.gif)
 0
 NoTrendNoIntercept. Модель без тренда или константы в коинтеграционном уравнении и авторегрессии.


 ![](../Enums.gif)
 1
 NoTrendIntercept. Модель с константой в коинтеграционном уравнении и без тренда в авторегрессии.


 ![](../Enums.gif)
 2
 TrendIntercept. Модель с константой в коинтеграционном уравнении и авторегрессии.


 ![](../Enums.gif)
 3
 TrendTrend. Модель с линейным трендом и константой в коинтеграционном уравнении, без тренда в авторегрессии, с линейным трендом в данных.


 ![](../Enums.gif)
 4
 QTrendTrend. Модель с трендом и константой в авторегрессии и коинтеграционном уравнении, с квадратичным трендом в данных.


См. также:


[Перечисления сборки Stat](StatLib_Enums.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
