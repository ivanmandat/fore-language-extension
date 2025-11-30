# AllowElementsGroupCreation

AllowElementsGroupCreation
-


# AllowElementsGroupCreation


## Синтаксис


AllowElementsGroupCreation: Boolean;


## Описание


Свойство AllowElementsGroupCreation
 определяет возможность создания [группы
 элементов](UiSelection.chm::/Selection/Selection_of_the_dimension_elements.htm#create_group) по текущей отметке измерения.


## Комментарии


Допустимые значения:


	- True. По умолчанию.
	 Создание группы элементов по текущей отметке измерения доступно;


	- False. Создание группы
	 элементов по текущей отметке измерения недоступно.


Значение свойства задается в конструкторе [DimSource](../../Classes/Metabase/DimSource/Constructor_DimSource.htm)
 или с помощью метода setAllowElementsGroupCreation,
 а возвращается с помощью метода getAllowElementsGroupCreation.


См. также:


[DimSourceSettings](DimSourceSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
