# Элемент MapLabel

Элемент MapLabel
-


# Элемент MapLabel


Элемент MapLabel представляет
 собой коллекцию меток. Метки создаются для [слоев](../../MapLayers/MapLayers_element.htm)
 и для [областей](../../MapShapes/MapShapes_element.htm) карты.


Элементом коллекции является экземпляр класса [MapLabel](../../../../../../Classes/Map/MapLabel/MapLabel.htm).


[Пример настройки списка меток](Labels_exmpl.htm)


## Атрибуты элемента коллекции


		 Наименование атрибута
		 Тип
		 Описание


		 Id
		 String
		 Идентификатор объекта метки.


		 Background
		 [Brush](dhtmlCommon.chm::/Classes/PP/Brush/Brush.htm)
		 Либо идентификатор кисти, описанной
		 в словаре элементов, либо полное описание кисти. При полном
		 описании кисти может использоваться как элемент. Идентификатор
		 должен располагаться в фигурных скобках:


		Background=''{идентификатор}''


		 BorderColor
		 String
		 Цвет границы
		 в формате HTML.


		 BorderRadius
		 Double
		 Радиус закругления
		 углов границы.


		 BorderThickness
		 Double
		 Толщина границы.


		 Height
		 Double
		 Высота метки.


		 Left
		 Double
		 Левая координата
		 метки.


		 Margin
		 [Thickness](dhtmlCommon.chm::/Classes/PP/Thickness/Thickness.htm)
		 Отступ полей
		 метки. Формат: Margin="2
		 2 2 2"


		 Padding
		 [Thickness](dhtmlCommon.chm::/Classes/PP/Thickness/Thickness.htm)
		 Отступ содержимого
		 метки. Формат: Padding="2
		 2 2 2"


		 Top
		 Double
		 Верхняя координата
		 метки.


		 Width
		 Double
		 Ширина метки.


		 Font
		 Font
		 Либо идентификатор
		 шрифта, описанного в словаре элементов, либо полноценное описание
		 шрифта. При полном описании кисти может использоваться как элемент.
		 Идентификатор должен располагаться в фигурных скобках:


		Font="{идентификатор}"


		 MaskText
		 String
		 Маска текста
		 метки.


		 TextWrapping
		 [TextWrapping](dhtmlUi.chm::/Enums/TextWrapping.htm)
		 Перенос текста.
		 Допустимые значения:


			- Wrap - возможен перенос
			 по словам;


			- NoWrap - невозможен перенос
			 по словам.


		 NoDataText
		 String
		 Текст, выводимый
		 в месте, заданном в маске, при отсутствии данных для области.


		 Visibility
		 Boolean
		 Определяет,
		 является ли метка видимой:


			- true - метка видима;


			- false - метка невидима.


		 Text
		 String
		 Устанавливает
		 текст метки.


См. также:


[Элемент
 ItemsDictionary](../ItemsDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
