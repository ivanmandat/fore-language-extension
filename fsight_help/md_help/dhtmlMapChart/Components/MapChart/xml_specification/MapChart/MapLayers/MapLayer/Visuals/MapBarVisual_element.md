# Элемент MapBarVisual

Элемент MapBarVisual
-


# Элемент MapBarVisual


Элемент MapBarVisual содержит
 описание столбикового показателя. Столбиковый показатель - экземпляр
 класса [BarVisual](../../../../../../../Classes/Map/BarVisual/BarVisual.htm).


[Пример настройки столбикового показателя](Bars_exmpl.htm)


## Атрибуты элемента MapBarVisual


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


		 BarDistance
		 Double
		 Расстояние между столбцами.


		 BorderColor
		 DataDependency
		 Идентификатор [объекта
		 зависимости](../../../ItemsDictionary/DataDependency/DataDependency_element.htm), описанного в [словаре
		 элементов](../../../ItemsDictionary/ItemsDictionary.htm) или полноценное описание объекта зависимости. Может
		 использоваться как элемент только для полного описания объекта
		 зависимости. Идентификатор должен располагаться в фигурных скобках:


		BorderColor:
		 ”{идентификатор}”


		 BorderThickness
		 Double
		 Толщина границы столбца.


		 Height
		 DataDependency
		 Идентификатор [объекта
		 зависимости](../../../ItemsDictionary/DataDependency/DataDependency_element.htm), описанного в [словаре
		 элементов](../../../ItemsDictionary/ItemsDictionary.htm) или полноценное описание объекта зависимости. Может
		 использоваться как элемент только для полного описания объекта
		 зависимости. Идентификатор должен располагаться в фигурных скобках:
		 Height: ”{идентификатор}”.


		Примечание.
		 Если необходимо, чтобы высота столбцов зависела от определенного
		 источника данных, задайте для атрибута IsDependent
		 [объекта
		 зависимости](../../../ItemsDictionary/DataDependency/DataDependency_element.htm) значение true
		 и укажите [источник
		 данных](../../../DataSources/DataSources_element.htm) и [шкалу](../../../ItemsDictionary/MapScale/MapScale_element.htm).


		Если высота столбцов должна быть статичной,
		 то для атрибута IsDependent
		 установите false, а в
		 атрибуте Value задайте
		 высоту столбцов в пикселях. (см. «[Пример
		 настройки списка объектов зависимостей](../../../ItemsDictionary/DataDependency/DataDependency_exmpl.htm)»).


		 Width
		 DataDependency
		 Идентификатор [объекта
		 зависимости](../../../ItemsDictionary/DataDependency/DataDependency_element.htm), описанного в [словаре
		 элементов](../../../ItemsDictionary/ItemsDictionary.htm) или полное описание объекта зависимости. Может использоваться
		 как элемент только для полного описания объекта зависимости. Идентификатор
		 должен располагаться в фигурных скобках: Width:
		 ”{идентификатор}”.


		Примечание.
		 Если необходимо, чтобы ширина столбцов зависела от определенного
		 источника данных, задайте для атрибута IsDependent
		 [объекта
		 зависимости](../../../ItemsDictionary/DataDependency/DataDependency_element.htm) значение true
		 и укажите источник данных и шкалу.


		Если ширина столбцов должна быть статичной,
		 то для атрибута IsDependent
		 установите false, а в
		 атрибуте Value задайте
		 ширину столбцов в пикселях. (см. «[Пример
		 настройки списка объектов зависимостей](../../../ItemsDictionary/DataDependency/DataDependency_exmpl.htm)»).


		 IsPercentage
		 Boolean
		 Флаг, указывающий, является ли значение столбца процентным
		 показателем. Допустимые значения:


			- true. Значение
			 столбца является процентным показателем;


			- false. Значение
			 столбца не является процентным показателем.


		 LeastHeightPart
		 Double
		 Высота столбца с минимальным значением.


		 LeastWidthPart
		 Double
		 Ширина столбца с минимальным значением.


		 MaxBarsCount
		 Number
		 Максимальное количество столбцов.


См. также:


[Элемент
 Visuals](Visuals_element.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
