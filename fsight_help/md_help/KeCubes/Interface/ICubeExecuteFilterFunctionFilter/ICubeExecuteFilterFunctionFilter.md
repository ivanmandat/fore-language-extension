# ICubeExecuteFilterFunctionFilter

ICubeExecuteFilterFunctionFilter
-


# ICubeExecuteFilterFunctionFilter


Сборка: Cubes;


## Описание


Интерфейс ICubeExecuteFilterFunctionFilter
 содержит свойства для указания специфических настроек функции FILTER,
 которая осуществляет фильтрацию данных по заданному условию.


## Иерархия наследования


ICubeExecuteFilterFunctionFilter


## Комментарии


Для получения настроек приведите объект, описываемый интерфейсом [ICubeExecuteFilterFunction](../ICubeExecuteFilterFunction/ICubeExecuteFilterFunction.htm),
 к интерфейсу ICubeExecuteFilterFunctionTop.
 Свойство [ICubeExecuteFilterFunction.Predefined](../ICubeExecuteFilterFunction/ICubeExecuteFilterFunction.Predefined.htm)
 для объекта должно возвращать значение [Filter](../../Enums/CubeExecuteFilterFunctionPredefined.htm).


При использовании фильтрации по заданному условию формируется блок для
 MDX-запроса следующего формата:


[FILTER](ICubeExecuteFilterFunctionFilter.Function_.htm)
 ( [Set_Expression](ICubeExecuteFilterFunctionFilter.Set_.htm),
 [Logical_Expression](ICubeExecuteFilterFunctionFilter.Condition.htm)
 )


Описание функции доступно в документации по языку многомерных запросов
 MDX.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Condition](ICubeExecuteFilterFunctionFilter.Condition.htm)


		 Свойство Condition
		 определяет MDX-выражение, которое возвращает логическое значение.


		 ![](../../Property_Image.gif)
		 [Function_](ICubeExecuteFilterFunctionFilter.Function_.htm)


		 Свойство Function_
		 определяет наименование функции фильтрации.


		 ![](../../Property_Image.gif)
		 [Set_](ICubeExecuteFilterFunctionFilter.Set_.htm)


		 Свойство Set_ определяет
		 отметку элементов, по значениям которых будет осуществляться фильтрация.


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
