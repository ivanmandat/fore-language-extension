# IPrxVisualizerLegend.SetEaxObjectLegend

IPrxVisualizerLegend.SetEaxObjectLegend
-


# IPrxVisualizerLegend.SetEaxObjectLegend


## Синтаксис


SetEaxObjectLegend(Object: [IEaxObject](KeExpress.chm::/Interface/IEaxObject/IEaxObject.htm);
 IndicatorType: Integer);


## Параметры


Object. Визуализатор;


IndicatorType. Тип метрики
 визуализатора, установленного пользователем.


## Описание


Метод SetEaxObjectLegend устанавливает
 легенду для указанного визуализатора по его метрике.


## Комментарии


В зависимости от типа визуализатора и типа метрики будут использоваться
 разные значения параметров Object
 и IndicatorType:


	- для таблицы будут использоваться значения перечисления [EaxGridIndicatorType](KeExpress.chm::/Enums/EaxGridIndicatorType.htm);


	- для пузырькового дерева - [EaxBubbleTreeIndicators](KeExpress.chm::/Enums/EaxBubbleTreeIndicators.htm);


	- для плоского дерева - [EaxTreeMapIndicators](KeExpress.chm::/Enums/EaxTreeMapIndicators.htm);


	- для карты - [EaxMapIndicatorType](KeExpress.chm::/Enums/EaxMapIndicatorType.htm).


Для определения базовых настроек легенды визуализатора как элемента
 управления используйте [IPrxVisualizerLegend.PlacedControl](IPrxVisualizerLegend.PlacedControl.htm).


## Пример


Использование метода приведено в примере для [IPrxVisualizerLegend.Update](IPrxVisualizerLegend.Update.htm).


См. также:


[IPrxVisualizerLegend](IPrxVisualizerLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
