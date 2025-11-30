# ICubeExecuteFilterFunctionNonEmpty

ICubeExecuteFilterFunctionNonEmpty
-


# ICubeExecuteFilterFunctionNonEmpty


Сборка: Cubes;


## Описание


Интерфейс ICubeExecuteFilterFunctionNonEmpty
 содержит свойства для указания специфических настроек функции NON EMPTY,
 которая осуществляет фильтрацию пустых значений.


## Иерархия наследования


ICubeExecuteFilterFunctionNonEmpty


## Комментарии


Для получения настроек приведите объект, описываемый интерфейсом [ICubeExecuteFilterFunction](../ICubeExecuteFilterFunction/ICubeExecuteFilterFunction.htm),
 к интерфейсу ICubeExecuteFilterFunctionTop.
 Свойство [ICubeExecuteFilterFunction.Predefined](../ICubeExecuteFilterFunction/ICubeExecuteFilterFunction.Predefined.htm)
 для объекта должно возвращать значение [NonEmpty](../../Enums/CubeExecuteFilterFunctionPredefined.htm).


При использовании фильтрации пустых значений формируется блок для MDX-запроса
 следующего формата:


	- При использовании ключевого слова «NON EMPTY»: NON EMPTY { [set_expression1
	 [,set_expression2]](ICubeExecuteFilterFunctionNonEmpty.Set_.htm) }


	- При использовании функции «NonEmpty»: [NonEmpty](ICubeExecuteFilterFunctionNonEmpty.Function_.htm)
	 ( [set_expression1
	 [,set_expression2]](ICubeExecuteFilterFunctionNonEmpty.Set_.htm) )


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Function_](ICubeExecuteFilterFunctionNonEmpty.Function_.htm)


		 Свойство Function_
		 определяет функцию, используемую для фильтрации пустых значений.


		 ![](../../Property_Image.gif)
		 [NonEmpty](ICubeExecuteFilterFunctionNonEmpty.NonEmpty.htm)


		 Свойство NonEmpty определяет
		 признак необходимости использовать функцию NonEmpty для фильтрации
		 данных.


		 ![](../../Property_Image.gif)
		 [Set_](ICubeExecuteFilterFunctionNonEmpty.Set_.htm)


		 Свойство Set_ определяет
		 одну или несколько отметок элементов, по значениям которых будет
		 осуществляться фильтрация.


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
