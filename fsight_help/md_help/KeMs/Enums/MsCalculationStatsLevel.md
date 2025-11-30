# MsCalculationStatsLevel

MsCalculationStatsLevel
-


# MsCalculationStatsLevel


## Описание


Перечисление MsCalculationStatsLevel
 используется для определения детализации [статистик
 расчета](../Interface/IMsCalculationStats/IMsCalculationStats.htm) задачи моделирования.


Используется свойством [IMsProblemCalculationSettings.StatsLevel](../Interface/IMsProblemCalculationSettings/IMsProblemCalculationSettings.StatsLevel.htm).


## Комментарии


Для построения [дерева
 статистик расчета](../Interface/IMsCalculationStats/IMsCalculationStats.htm) используйте один из вариантов детализации: «Basic» или «Detailed».


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Off. По умолчанию.
		 Детализация не используется.


		 1
		 Basic. Детализация
		 статистик расчета по [стадиям
		 расчета задачи моделирования](MsProblemCalculationStage.htm).


		 2
		 Detailed. Детализация
		 статистик расчета по [стадиям
		 расчета задачи моделирования](MsProblemCalculationStage.htm) с вычислением хеша.
		Примечание.
		 Вычисление хеша может занять длительное время.


См. также:


[Перечисления сборки Ms](KeMs_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
