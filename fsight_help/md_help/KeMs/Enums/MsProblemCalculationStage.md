# MsProblemCalculationStage

MsProblemCalculationStage
-


# MsProblemCalculationStage


## Описание


Перечисление MsProblemCalculationStage
 используется для определения стадии расчета задачи моделирования.


Используется следующими методами:


	- [IMsProblemCalculationCallback.OnStageFinish](../Interface/IMsProblemCalculationCallback/IMsProblemCalculationCallback.OnStageFinish.htm);


	- [IMsProblemCalculationCallback.OnStageStart](../Interface/IMsProblemCalculationCallback/IMsProblemCalculationCallback.OnStageStart.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Init. Инициализация
		 расчета задачи.


		 1
		 DetermIdent. Идентификация
		 детерминированных уравнений.


		 2
		 Vector. Идентификация
		 векторных уравнений.


		 3
		 Ident. Идентификация
		 стохастических методов.


		 4
		 Calc. Расчет моделей.


		 5
		 Save. Сохранение данных.


		 6
		 Finish. Окончание расчета.


		 7
		 Load. Загрузка данных.


## Комментарии


Init. На стадии инициализации
 расчета задачи выполняется подсчет общего количества точек, которые надо
 будет рассчитать и тому подобные операции.


Стадии DetermIdent, Vector,
 Ident характерны только для задачи
 прогнозирования.


Calc. Стадия расчета
 моделей: для задачи прогнозирования расчет выполняется на период прогнозирования,
 для задачи трансформации - на весь период (идентификация и прогноз).


Стадии Save, Load.
 Сохранение/загрузка данных выполняется в базу данных временных
 рядов или другой источник данных.


Finish. Последняя стадия расчета
 задачи, всегда следует после сохранения данных.


См. также:


[Перечисления
 сборки Ms](KeMs_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
