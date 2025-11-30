# ICubeExecuteFilterFunctionNonEmpty.Set_

ICubeExecuteFilterFunctionNonEmpty.Set_
-


# ICubeExecuteFilterFunctionNonEmpty.Set_


## Синтаксис


Set_: String;


## Описание


Свойство Set_ определяет одну
 или несколько отметок элементов, по значениям которых будет осуществляться
 фильтрация.


## Комментарии


По умолчанию свойство не определено, при этом передается вся отметка
 измерения, указанного в свойстве [ICubeExecuteFilterItem.Dimension](../ICubeExecuteFilterItem/ICubeExecuteFilterItem.Dimension.htm)/[ICubeExecuteFilterItem.DimensionKey](../ICubeExecuteFilterItem/ICubeExecuteFilterItem.DimensionKey.htm).
 Значение по умолчанию может использоваться, если для фильтрации используется
 ключевое слово «NON EMPTY».


Если для фильтрации [используется](ICubeExecuteFilterFunctionNonEmpty.NonEmpty.htm)
 функция «NonEmpty», то отметка должна быть указана обязательно. Отметка
 должна быть заключена в круглые скобки: (...).


## Пример


Пример использования приведен в описании свойства [ICubeExecuteFilterFunctionNonEmpty.Function_](ICubeExecuteFilterFunctionNonEmpty.Function_.htm).


См. также:


[ICubeExecuteFilterFunctionNonEmpty](ICubeExecuteFilterFunctionNonEmpty.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
