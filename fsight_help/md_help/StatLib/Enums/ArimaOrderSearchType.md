# ArimaOrderSearchType

ArimaOrderSearchType
-


# ArimaOrderSearchType


## Описание


Перечисление ArimaOrderSearchType
 используется для определения способов спецификации модели ARIMA.


Используется следующим свойством:


	- [ISmTramoSeats.ArimaOrderSearch](../Interface/ISmTramoSeats/ISmTramoSeats.ArimaOrderSearch.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 ![](../Element%20Enums.gif)
		 0
		 FixOrder. Используются
		 заданные порядки AR, MA, SAR, SMA и дифференцирования (несезонного
		 и сезонного).


		 ![](../Element%20Enums.gif)
		 1
		 FixOnlyDiff. Задаются
		 порядки только для дифференцирования (несезонного и сезонного),
		 порядки AR, MA, SAR, SMA подбираются.


		 ![](../Element%20Enums.gif)
		 2
		 SearchAll. Спецификация
		 модели ARIMA подбирается полностью.


		 ![](../Element%20Enums.gif)
		 3
		 SearchAllUnitRoot.
		 Спецификация модели ARIMA подбирается полностью с учетом комплексных
		 единичных корней.


См. также:


[Перечисления
 сборки Stat](StatLib_Enums.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
