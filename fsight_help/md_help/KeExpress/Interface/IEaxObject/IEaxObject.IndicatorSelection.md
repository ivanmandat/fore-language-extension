# IEaxObject.IndicatorSelection

IEaxObject.IndicatorSelection
-


# IEaxObject.IndicatorSelection


## Синтаксис


IndicatorSelection(Type: Integer): [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm);


## Параметры


Type. Тип метрики измерения
 представления данных.


## Описание


Свойство IndicatorSelection
 возвращает отметку метрики измерения в представлении.


## Комментарии


В зависимости от типа объекта, используемого для работы с представлением
 данных, будут использоваться разные типы метрик измерений в представлении:


	- для таблицы будут использоваться значения перечисления [EaxGridIndicatorType](../../Enums/EaxGridIndicatorType.htm);


	- для диаграммы - [EaxChartIndicatorType](../../Enums/EaxChartIndicatorType.htm);


	- для пузырьковой диаграммы - [EaxBubbleChartIndicators](../../Enums/EaxBubbleChartIndicators.htm);


	- для пузырькового дерева - [EaxBubbleTreeIndicators](../../Enums/EaxBubbleTreeIndicators.htm);


	- для плоского дерева - [EaxTreeMapIndicators](../../Enums/EaxTreeMapIndicators.htm);


	- для старого типа карты - [EaxMapIndicatorType](../../Enums/EaxMapIndicatorType.htm);


	- для нового типа карты, поддерживающего технологию OpenGL - [EaxMapChartIndicators](../../Enums/EaxMapChartIndicators.htm).


Для получения отметки всех метрик измерения в представлении используйте
 [IEaxObject.CombinedIndicatorSelection](IEaxObject.CombinedIndicatorSelection.htm).


## Пример


Использование свойства приведено в примере для [IEaxObject.CombinedIndicatorSelection](IEaxObject.CombinedIndicatorSelection.htm).


См. также:


[IEaxObject](IEaxObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
