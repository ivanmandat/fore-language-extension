# ICubeExecuteFilterFunctionOrder

ICubeExecuteFilterFunctionOrder
-


# ICubeExecuteFilterFunctionOrder


Сборка: Cubes;


## Описание


Интерфейс ICubeExecuteFilterFunctionOrder
 содержит свойства для указания специфических настроек функции, осуществляющей
 сортировку данных.


## Иерархия наследования


ICubeExecuteFilterFunctionOrder


## Комментарии


Для получения настроек приведите объект, описываемый интерфейсом [ICubeExecuteFilterFunction](../ICubeExecuteFilterFunction/ICubeExecuteFilterFunction.htm),
 к интерфейсу ICubeExecuteFilterFunctionTop.
 Свойство [ICubeExecuteFilterFunction.Predefined](../ICubeExecuteFilterFunction/ICubeExecuteFilterFunction.Predefined.htm)
 для объекта должно возвращать значение [Order](../../Enums/CubeExecuteFilterFunctionPredefined.htm).


При использовании сортировки формируется блок для MDX-запроса следующего
 формата:


ORDER ( [Set_Expression](ICubeExecuteFilterFunctionOrder.Set_.htm),
 {[String_Expression](ICubeExecuteFilterFunctionOrder.OrderBy.htm)
 } [Numeric_Expression](ICubeExecuteFilterFunctionOrder.OrderBy.htm)}
 [ , { [Function](ICubeExecuteFilterFunctionOrder.OrderType.htm)
 } ] )


Описание функции доступно в документации по языку многомерных запросов
 MDX.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [OrderBy](ICubeExecuteFilterFunctionOrder.OrderBy.htm)


		 Свойство OrderBy определяет
		 выражение, которое обычно представляет MDX-выражение, возвращающее
		 сортируемое измерение.


		 ![](../../Property_Image.gif)
		 [OrderType](ICubeExecuteFilterFunctionOrder.OrderType.htm)


		 Свойство OrderType
		 определяет способ сортировки.


		 ![](../../Property_Image.gif)
		 [Set_](ICubeExecuteFilterFunctionOrder.Set_.htm)


		 Свойство Set_ определяет
		 отметку элементов, по значениям которых будет осуществляться фильтрация.


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
