# Элемент &lt;MapTerritoryTranscript&gt;

Элемент <MapTerritoryTranscript>
-


# Элемент MapTerritoryTranscript


Элемент MapTerritoryTranscript
 содержит описание расшифровки территорий карты. Расшифровка территорий -
 экземпляр класса [MapTerritoryTranscript](../../../../../Classes/Map/MapTerritoryTranscript/MapTerritoryTranscript.htm).


[Пример настройки расшифровки территорий](Territory_exmpl.htm)


## Атрибуты элемента MapTerritoryTranscript


		 Наименование атрибута
		 Тип
		 Описание


		 ParentLayer
		 String
		 Идентификатор родительского слоя в формате {идентификатор}.


		 Background
		 [Brush](dhtmlCommon.chm::/Classes/PP/Brush/Brush.htm)
		 Идентификатор [кисти](../ItemsDictionary/Brushes/Brushes.htm),
		 описанной в [словаре
		 элементов](../ItemsDictionary/ItemsDictionary.htm) или полное описание кисти. Может использоваться
		 как элемент для полного описания кисти. Идентификатор должен располагаться
		 в фигурных скобках:


		Background:
		 ”{идентификатор}”.


		 BorderColor
		 String
		 Цвет границы в формате HTML.


		 BorderThickness
		 Double
		 Толщина границы.


		 BorderRadius
		 Double
		 Радиус закругления углов границы.


		 Height
		 Double
		 Высота расшифровки территорий.


		 Left
		 Double
		 Левая координата расшифровки территорий. В случае, если
		 для HorizontalAlignment
		 установлено Relative,
		 принимает значения в диапазоне от 0 до 1.


		 Margin
		 [Thickness](dhtmlCommon.chm::/Classes/PP/Thickness/Thickness.htm)
		 Отступ полей расшифровки территорий. Формат: Margin:
		 ”2 2 2 2”.


		 Padding
		 [Thickness](dhtmlCommon.chm::/Classes/PP/Thickness/Thickness.htm)
		 Отступ содержимого расшифровки территорий. Формат: Padding:”2 2 2 2”.


		 Top
		 Double
		 Верхняя координата расшифровки территорий. Если для VerticalAlignment установлено
		 Relative, принимает значения
		 в диапазоне от 0 до 1.


		 Width
		 Double
		 Ширина расшифровки территорий.


		 SortingMode
		 [SortingMode](../../../../../Enums/SortingMode.htm)
		 Режим сортировки элементов расшифровки. Допустимые значения:


			- None. Нет сортировки;


			- Asc. По возрастанию;


			- Desc. По убыванию.


		 HighlightBrush
		 [Brush](dhtmlCommon.chm::/Classes/PP/Brush/Brush.htm)
		 Идентификатор [кисти](../ItemsDictionary/Brushes/Brushes.htm),
		 описанной в [словаре
		 элементов](../ItemsDictionary/ItemsDictionary.htm) или полное описание кисти, служащей для подсветки
		 расшифровки при наведении. Может использоваться как элемент для
		 полного описания кисти. Идентификатор должен располагаться в фигурных
		 скобках:


		HighlightBrush:
		 ”{идентификатор}”.


		 Font
		 [Font](dhtmlCommon.chm::/Classes/PP/Font/Font.htm)
		 Идентификатор [шрифта](../ItemsDictionary/Fonts/Fonts.htm),
		 описанного в [словаре
		 элементов](../ItemsDictionary/ItemsDictionary.htm) или полное описание шрифта. Может использоваться
		 как элемент для полного описания шрифта. Идентификатор должен
		 располагаться в фигурных скобках:


		Font: ”{идентификатор}”.


		 ColumnCount
		 Number
		 Количество столбцов в расшифровке территорий.


		 TextWrapping
		 [TextWrapping](dhtmlUi.chm::/Enums/TextWrapping.htm)
		 Перенос текста. Допустимые значения:


			- Wrap;


			- NoWrap.


		 HorizontalAlignment
		 HorizontalAlignment
		 Горизонтальное выравнивание расшифровки территорий. Допустимые
		 значения:


			- Left. По левому
			 краю;


			- Center. По центру;


			- Right. По правому
			 краю;


			- Absolute. Абсолютное
			 значение;


			- Relative. Относительное
			 значение.


		 VerticalAlignment
		 VerticalAlignment
		 Вертикальное выравнивание расшифровки территорий. Допустимые
		 значения:


			- Top. По верхнему
			 краю;


			- Center. По центру;


			- Bottom. По нижнему
			 краю;


			- Absolute. Абсолютное
			 значение;


			- Relative. Относительное
			 значение.


		 Visibility
		 [Visibility](../../../../../Enums/Visibility.htm)
		 Видимость объекта. Допустимые значения:


			- Visible;


			- Collapsed.


См. также:


[Элемент
 MapChart](../MapChart_element.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
