# IDimensionViewerBase.GetItemAt

IDimensionViewerBase.GetItemAt
-


# IDimensionViewerBase.GetItemAt


## Синтаксис


GetItemAt(Pt: [IPoint](ModForms.chm::/Interface/IPoint/IPoint.htm);
 [FullRow: Boolean = False]): Integer;


## Параметры


Pt. Точка, в которой можно
 получить элемент компонента;


FullRow. Способ получения элемента.


## Описание


Метод GetItemAt позволяет получить
 элемент компонента в заданной точке.


## Комментарии


Допустимые значения параметра FullRow:


	- True. Получить элемент
	 можно, выбрав строку, в которой находится элемент;


	- False. По умолчанию.
	 Получить элемент можно только в заданной точке.


См. также:


[IDimensionViewerBase](IDimensionViewerBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
