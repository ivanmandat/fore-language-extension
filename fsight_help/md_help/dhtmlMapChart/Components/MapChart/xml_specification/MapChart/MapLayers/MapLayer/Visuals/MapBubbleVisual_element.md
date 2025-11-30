# Элемент MapBubbleVisual

Элемент MapBubbleVisual
-


# Элемент MapBubbleVisual


Элемент MapBubbleVisual содержит
 описание пузырькового показателя.


[Пример настройки пузырькового
 показателя](MapBubbleViaual_example.htm)


		 Наименование атрибута
		 Тип
		 Описание


		 Name
		 String
		 Имя показателя.


		 Visibility
		 [Visibility](../../../../../../../Enums/Visibility.htm)
		 Видимость объекта. Допустимые значения:


			- Visible. Объект
			 видимый;


			- Collapsed. Объект
			 невидим.


		 Background
		 DataDependency
		 Идентификатор [объекта
		 зависимости](../../../ItemsDictionary/DataDependency/DataDependency_element.htm), описанного в [словаре
		 элементов](../../../ItemsDictionary/ItemsDictionary.htm) или полноценное описание объекта зависимости. Может
		 использоваться как элемент только для полного описания объекта
		 зависимости. Идентификатор должен располагаться в фигурных скобках:
		 Background: ”{идентификатор}”.


		 DataSource
		 [DataSource](dhtmlGraphicBase.chm::/Classes/PP/DataSource/DataSource.htm)
		 Url или идентификатор источника данных. Данный источник
		 используется в тех случаях, когда для [объекта
		 зависимости](../../../ItemsDictionary/DataDependency/DataDependency_element.htm) не задан источник.


		 LeastSizePart
		 Number
		 Минимальный размер пузырька. Если
		 в атрибуте Size установлено значение меньше минимально, то размер
		 будет настраиваться по атрибуту LeastSizePart.


		 Size
		 DataDependency
		 Идентификатор объекта зависимости, описанного в словаре
		 элементов или полноценное описание объекта зависимости. Может
		 использоваться как элемент только для полного описания объекта
		 зависимости. Идентификатор должен располагаться в фигурных скобках:
		 Background: ”{идентификатор}”.


См. также:


[Элемент
 Visuals](Visuals_element.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
