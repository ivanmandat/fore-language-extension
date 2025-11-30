# MsCorrectStubPeriod

MsCorrectStubPeriod
-


# MsCorrectStubPeriod


## Описание


Перечисление MsCorrectStubPeriod
 используется для определения параметров действий при расчёте задачи моделирования,
 если её периоды выходят за пределы периодов источников данных.


Используется следующим свойством:


	- [IMsProblemCalculationSettings.CorrectStubPeriod](../Interface/IMsProblemCalculationSettings/IMsProblemCalculationSettings.CorrectStubPeriod.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 NotCorrect. Периоды
		 задачи и источников не корректируются, выдаётся предупреждение
		 при расчёте.


		 1
		 CorrestStubPeriod.
		 Автоматически расширяются периоды источников данных по периодам
		 расчёта задачи.


		 2
		 CorrectProblemPeriod.
		 Автоматически корректируются периоды расчёта задачи моделирования,
		 по периодам источников данных.


См. также:


[Перечисления
 сборки Ms](KeMs_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
