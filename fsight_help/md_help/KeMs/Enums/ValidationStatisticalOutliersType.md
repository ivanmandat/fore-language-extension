# ValidationStatisticalOutliersType

ValidationStatisticalOutliersType
-


# ValidationStatisticalOutliersType


## Описание


Перечисление ValidationStatisticalOutliersType используется для определения области выявления статистических выбросов.


Используется следующим свойством:


-
[IValidationStatisticalOutliers.OutliersType](../Interface/IValidationStatisticalOutliers/IValidationStatisticalOutliers.OutliersType.htm).


## Допустимые значения


 Значение
 Краткое описание


 0
 CrossSerie. Выбросы выявляются по рядам, т.е. правило проходит по всем рядами и выявляет статистические выбросы для каждого ряда по отдельности.


 1
 CrossDate. Выбросы выявляются по точкам динамики, т.е. правило проходит по всем точкам периода выполнения и выявляет статистические выбросы на определённую дату по всем рядам.


 2
 Total. Выбросы выявляются по всем данным, т.е. правило проходит по всем рядам и по всем точкам периода выполнения и выявляет статистические выбросы по всей совокупности данных.


См. также:


[Перечисления сборки Ms](KeMs_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
