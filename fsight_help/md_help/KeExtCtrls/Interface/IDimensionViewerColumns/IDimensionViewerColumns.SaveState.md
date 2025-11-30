# IDimensionViewerColumns.SaveState

IDimensionViewerColumns.SaveState
-


# IDimensionViewerColumns.SaveState


## Синтаксис


SaveState: String;


## Описание


Метод SaveState сохраняет параметры
 состояния колонок компонента.


## Комментарии


Метод сохраняет параметры состояния в XML-структуру и возвращает ее
 в строковом виде. Для каждой колонки сохраняются следующие параметры:


	- Атрибут, значения которого отображаются в колонке;


	- Порядок расположения колонки;


	- Заголовок;


	- Ширина;


	- Признак видимости.


Полученные параметры в дальнейшем могут быть использованы для восстановления
 состояния колонок с помощью метода [LoadState](IDimensionViewerColumns.LoadState.htm).


См. также:


[IDimensionViewerColumns](IDimensionViewerColumns.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
