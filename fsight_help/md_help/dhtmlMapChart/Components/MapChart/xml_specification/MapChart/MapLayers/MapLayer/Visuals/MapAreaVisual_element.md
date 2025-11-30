# Элемент MapAreaVisual

Элемент MapAreaVisual
-


# Элемент MapAreaVisual


Элемент MapAreaVisual содержит
 описание показателя заливки. Показатель заливки - экземпляр класса
 MapAreaVisual.


[Пример настройки показателя заливки карты](Visuals_exmpl.htm)


## Атрибуты элемента MapAreaVisual


		 Наименование атрибута
		 Тип
		 Описание


		 Name
		 String
		 Имя показателя.


		 Visibility
		 [Visibility](../../../../../../../Enums/Visibility.htm)
		 Видимость
		 объекта. Допустимые значения:


			- Visible. Объект видимый;


			- Collapsed. Объект невидим.


		 Background
		 DataDependency
		 Идентификатор
		 [объекта
		 зависимости](../../../ItemsDictionary/DataDependency/DataDependency_element.htm), описанного в [словаре
		 элементов](../../../ItemsDictionary/ItemsDictionary.htm) или полноценное описание объекта зависимости. Может
		 использоваться как элемент только для полного описания объекта
		 зависимости. Идентификатор должен располагаться в фигурных скобках:
		 Background: ”{идентификатор}”.


		 Index
		 Number
		 Индекс измерения
		 из источника данных, на основании которого будет построен показатель.


		 DataSource
		 [DataSource](dhtmlGraphicBase.chm::/Classes/PP/DataSource/DataSource.htm)
		 Url или идентификатор
		 источника данных. Данный источник используется в тех случаях,
		 когда для [объекта
		 зависимости](../../../ItemsDictionary/DataDependency/DataDependency_element.htm) не задан источник.


См. также:


[Элемент
 Visuals](Visuals_element.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
