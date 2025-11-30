# Элемент MapPieVisual

Элемент MapPieVisual
-


# Элемент MapPieVisual


Элемент MapPieVisual содержит
 описание кругового показателя слоя карты. Круговой показатель - экземпляр
 класса MapPieVisual.


[Пример настройки кругового показателя](Pie_exmpl.htm)


## Атрибуты элемента MapPieVisual


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


		 IsProportional
		 Boolean
		 Флаг, указывающий, будут ли одинаковыми размеры круговых
		 диаграмм Допустимые значения:


			- true. Размеры
			 круговых диаграмм одинаковы;


			- false. Размеры
			 круговых диаграмм разные.


		 LeastRadiusPart
		 Double
		 Радиус минимальной круговой диаграммы.


		 MaxPiesCount
		 Number
		 Максимальное количество частей круговой диаграммы.


		 Radius
		 DataDependency
		 Идентификатор [объекта
		 зависимости](../../../ItemsDictionary/DataDependency/DataDependency_element.htm), описанного в [словаре
		 элементов](../../../ItemsDictionary/ItemsDictionary.htm) или полное описание объекта зависимости. Может использоваться
		 как элемент только для полного описания объекта зависимости. Идентификатор
		 должен располагаться в фигурных скобках: Radius:
		 ”{идентификатор}”.


См. также:


[Элемент
 Visuals](Visuals_element.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
