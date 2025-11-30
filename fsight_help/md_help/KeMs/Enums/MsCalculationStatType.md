# MsCalculationStatType

MsCalculationStatType
-


# MsCalculationStatType


## Описание


Перечисление MsCalculationStatType
 используется для определения типа [статистики
 расчета](../Interface/IMsCalculationStats/IMsCalculationStats.htm).


Используется свойством [IMsCalculationStatNode.Type](../Interface/IMsCalculationStatNode/IMsCalculationStatNode.Type.htm).


## Комментарии


Статистики расчета могут быть контрольные и информационные. Для сравнения
 статистик расчета используются только контрольные статистики, которые
 включают в себя статистические данные, многомерный цикл, многомерный итератор
 и другие. Информационные статистики включают в себя время расчета и не
 сравниваются с другими статистиками.


Для сравнения контрольных статистик расчета используйте метод [IMsCalculationStats.Compare](../Interface/IMsCalculationStats/IMsCalculationStats.Compare.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Control. Контрольная
		 статистика.


		 1
		 Info. Информационная
		 статистика.


См. также:


[Перечисления сборки Ms](KeMs_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
