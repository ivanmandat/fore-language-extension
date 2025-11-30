# ICubeExecuteFilterFunction

ICubeExecuteFilterFunction
-


# ICubeExecuteFilterFunction


Сборка: Cubes;


## Описание


Интерфейс ICubeExecuteFilterFunction
 содержит базовые свойства для работы с настройками функции, которая будет
 использоваться для фильтрации данных.


## Иерархия наследования


ICubeExecuteFilterFunction


## Комментарии


Для создания новых настроек используйте метод [ICubeExecuteFilterFunctionFactory.CreatePredefined](../ICubeExecuteFilterFunctionFactory/ICubeExecuteFilterFunctionFactory.CreatePredefined.htm).
 Настроенная функция для фильтрации данных может использоваться свойствами
 [ICubeExecuteDimSetup.FilterFunction](../ICubeExecuteDimSetup/ICubeExecuteDimSetup.FilterFunction.htm)
 или [ICubeExecuteFilterItem.Function_](../ICubeExecuteFilterItem/ICubeExecuteFilterItem.Function_.htm).


Для работы с выбранным типом функций предназначены следующие интерфейсы:


	- [ICubeExecuteFilterFunctionTop](../ICubeExecuteFilterFunctionTop/ICubeExecuteFilterFunctionTop.htm);


	- [ICubeExecuteFilterFunctionFilter](../ICubeExecuteFilterFunctionFilter/ICubeExecuteFilterFunctionFilter.htm);


	- [ICubeExecuteFilterFunctionOrder](../ICubeExecuteFilterFunctionOrder/ICubeExecuteFilterFunctionOrder.htm);


	- [ICubeExecuteFilterFunctionNonEmpty](../ICubeExecuteFilterFunctionNonEmpty/ICubeExecuteFilterFunctionNonEmpty.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Predefined](ICubeExecuteFilterFunction.Predefined.htm)


		 Свойство Predefined
		 возвращает тип функции, которая будет использоваться для фильтрации
		 данных.


		 ![](../../Property_Image.gif)
		 [Text](ICubeExecuteFilterFunction.Text.htm)


		 Свойство Text определяет
		 текст функции, который будет встраиваться в MDX-запрос и использоваться
		 для фильтрации данных.


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
