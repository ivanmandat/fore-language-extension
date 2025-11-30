# IEaxObject.IndicatorLegendAssignment

IEaxObject.IndicatorLegendAssignment
-


# IEaxObject.IndicatorLegendAssignment


## Синтаксис


IndicatorLegendAssignment(IndicatorType: Integer):
 [IVZLegendBase](KeVisualizators.chm::/Interface/IVZLegendBase/IVZLegendBase.htm);


## Параметры


IndicatorType. Тип метрики
 визуализатора.


## Описание


Свойство IndicatorLegendAssignment
 определяет назначение метрики в легенде визуализатора.


## Комментарии


В зависимости от типа визуализатора и типа метрики будут использоваться
 разные значения параметра IndicatorType:


	- для таблицы будут использоваться значения перечисления [EaxGridIndicatorType](../../Enums/EaxGridIndicatorType.htm);


	- для диаграммы - [EaxChartIndicatorType](../../Enums/EaxChartIndicatorType.htm);


	- для пузырьковой диаграммы - [EaxBubbleChartIndicators](../../Enums/EaxBubbleChartIndicators.htm);


	- для пузырькового дерева - [EaxBubbleTreeIndicators](../../Enums/EaxBubbleTreeIndicators.htm);


	- для плоского дерева - [EaxTreeMapIndicators](../../Enums/EaxTreeMapIndicators.htm);


	- для старого типа карты - [EaxMapIndicatorType](../../Enums/EaxMapIndicatorType.htm);


	- для нового типа карты, поддерживающего технологию OpenGL - [EaxMapChartIndicators](../../Enums/EaxMapChartIndicators.htm);


## Пример


Использование свойства приведено в примере для [IEaxGrid.Legends](../IEaxGrid/IEaxGrid.Legends.htm).


См. также:


[IEaxObject](IEaxObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
