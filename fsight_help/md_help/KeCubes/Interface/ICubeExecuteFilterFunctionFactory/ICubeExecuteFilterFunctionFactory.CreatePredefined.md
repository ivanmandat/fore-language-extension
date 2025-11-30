# ICubeExecuteFilterFunctionFactory.CreatePredefined

ICubeExecuteFilterFunctionFactory.CreatePredefined
-


# ICubeExecuteFilterFunctionFactory.CreatePredefined


## Синтаксис


CreatePredefined(Type: [CubeExecuteFilterFunctionPredefined](../../Enums/CubeExecuteFilterFunctionPredefined.htm)):
 [ICubeExecuteFilterFunction](../ICubeExecuteFilterFunction/ICubeExecuteFilterFunction.htm);


## Параметры


Type. Тип функции, которая
 будет использоваться для фильтрации данных.


## Описание


Метод CreatePredefined создает
 новую функцию для фильтрации данных.


## Комментарии


В соответствии с указанным типом полученная функция может быть приведена
 к одному из следующих интерфейсов для указания специфических настроек:


	- [ICubeExecuteFilterFunctionTop](../ICubeExecuteFilterFunctionTop/ICubeExecuteFilterFunctionTop.htm);


	- [ICubeExecuteFilterFunctionFilter](../ICubeExecuteFilterFunctionFilter/ICubeExecuteFilterFunctionFilter.htm);


	- [ICubeExecuteFilterFunctionOrder](../ICubeExecuteFilterFunctionOrder/ICubeExecuteFilterFunctionOrder.htm);


	- [ICubeExecuteFilterFunctionNonEmpty](../ICubeExecuteFilterFunctionNonEmpty/ICubeExecuteFilterFunctionNonEmpty.htm).


После указания настроек передайте функцию в качестве значения свойству
 [ICubeExecuteDimSetup.FilterFunction](../ICubeExecuteDimSetup/ICubeExecuteDimSetup.FilterFunction.htm)
 или [ICubeExecuteFilterItem.Function_](../ICubeExecuteFilterItem/ICubeExecuteFilterItem.Function_.htm).


## Пример


Пример использования приведен в описании свойств [ICubeExecuteFilterFunctionFilter.Condition](../ICubeExecuteFilterFunctionFilter/ICubeExecuteFilterFunctionFilter.Condition.htm),
 [ICubeExecuteFilterFunctionOrder.OrderBy](../ICubeExecuteFilterFunctionOrder/ICubeExecuteFilterFunctionOrder.OrderBy.htm),
 [ICubeExecuteFilterFunctionTop.Function_](../ICubeExecuteFilterFunctionTop/ICubeExecuteFilterFunctionTop.Function_.htm).


См. также:


[ICubeExecuteFilterFunctionFactory](ICubeExecuteFilterFunctionFactory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
