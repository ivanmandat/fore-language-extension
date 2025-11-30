# Элемент &lt;MapLegends&gt;

Элемент <MapLegends>
-


# Элемент MapLegends


Элемент MapLegends содержит
 список элементов MapLegend.


## Элемент MapLegend


Элемент MapLegend содержит описание
 объекта легенды карты. Легенда карты - экземпляр класса MapLegend.


[Пример настройки легенды](Legend_exmpl.htm)


### Атрибуты элемента MapLegend


		 Наименование атрибута
		 Тип
		 Описание


		 Id
		 String
		 Идентификатор объекта легенды


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


		 Height
		 Double
		 Высота легенды.


		 Left
		 Double
		 Левая координата легенды. В случае, если для HorizontalAlignment
		 установлено Relative,
		 принимает значения в диапазоне от 0 до 1.


		 Margin
		 [Thickness](dhtmlCommon.chm::/Classes/PP/Thickness/Thickness.htm)
		 Отступ полей легенды. Формат: Margin:
		 ”2 2 2 2”.


		 Padding
		 [Thickness](dhtmlCommon.chm::/Classes/PP/Thickness/Thickness.htm)
		 Отступ содержимого легенды. Формат: Padding:
		 ”2 2 2 2”.


		 Top
		 Double
		 Верхняя координата легенды. Если для VerticalAlignment
		 установлено Relative,
		 принимает значения в диапазоне от 0 до 1.


		 Width
		 Double
		 Ширина легенды.


		 BetweenFormat
		 String
		 Формат строки для значений «между».


		 EqualFormat
		 String
		 Формат строки для значений «равно».


		 Font
		 [Font](dhtmlCommon.chm::/Classes/PP/Font/Font.htm)
		 Идентификатор [шрифта](../ItemsDictionary/Fonts/Fonts.htm),
		 описанного в [словаре
		 элементов](../ItemsDictionary/ItemsDictionary.htm) или полное описание шрифта. Может использоваться
		 как элемент для полного описания шрифта. Идентификатор должен
		 располагаться в фигурных скобках:


		Font: ”{идентификатор}”.


		 Footer
		 [MapLabel](../../../../../Classes/Map/MapLabel/MapLabel.htm)
		 Идентификатор [метки](../ItemsDictionary/MapLabels/MapLabel_element.htm),
		 описанной в [словаре
		 элементов](../ItemsDictionary/ItemsDictionary.htm) или полное описание объекта метки. Может использоваться
		 как элемент для полноценного описания объекта метки. Идентификатор
		 должен располагаться в фигурных скобках:


		Footer:
		 ”{идентификатор}”.


		 GreaterFormat
		 String
		 Формат строки для значений «больше».


		 Header
		 [MapLabel](../../../../../Classes/Map/MapLabel/MapLabel.htm)
		 Идентификатор [метки](../ItemsDictionary/MapLabels/MapLabel_element.htm),
		 описанной в [словаре
		 элементов](../ItemsDictionary/ItemsDictionary.htm) или полноценное описание объекта метки. Может использоваться
		 как элемент для полного описания объекта метки. Идентификатор
		 должен располагаться в фигурных скобках:


		Header:
		 ”{идентификатор}”.


		 LessFormat
		 String
		 Формат строки для значений «меньше».


		 MapScale
		 MapScale
		 Идентификатор [шкалы](../ItemsDictionary/MapScale/MapScale_element.htm),
		 описанной в [словаре
		 элементов](../ItemsDictionary/ItemsDictionary.htm) или полное описание объекта шкалы. Может использоваться
		 как элемент для полного описания объекта шкалы. Идентификатор
		 должен располагаться в фигурных скобках:


		MapScale: ”{идентификатор}”.


		 Marker
		 [MarkerShape](../../../../../Enums/MarkerShape.htm)
		 Форма маркера. Допустимые значения:


			- Circle. Круг;


			- Rectangle. Прямоугольник;


			- Rhombus. Ромб;


			- TriangleDown.
			 Треугольник с вершиной внизу;


			- TriangleUp.
			 Треугольник с вершиной сверху.


		 IsOuter
		 Boolean
		 Флаг, указывающий, является легенда внешней. Допустимые
		 значения:


			- true. Внешняя;


			- false. Внутренняя.


		Значение по умолчанию – false.


		 ColumnCount
		 Number
		 Количество столбцов в легенде.


		 TextWrapping
		 [TextWrapping](dhtmlUi.chm::/Enums/TextWrapping.htm)
		 Перенос текста. Допустимые значения:


			- Wrap;


			- NoWrap.


		 NoDataText
		 String
		 Текст, выводимый для маркера «Нет данных».


		 HorizontalAlignment
		 HorizontalAlignment
		 Горизонтальное выравнивание легенды. Допустимые значения:


			- Left. По левому
			 краю;


			- Center. По центру;


			- Right. По правому
			 краю;


			- Absolute.
			 Абсолютное значение;


			- Relative. Относительное
			 значение.


		 VerticalAlignment
		 VerticalAlignment
		 Вертикальное выравнивание легенды. Допустимые значения:


			- Top. По верхнему
			 краю;


			- Center. По центру;


			- Bottom.
			 По нижнему краю;


			- Absolute.
			 Абсолютное значение;


			- Relative.
			 Относительное значение.


		 NoDataVisible
		 Boolean
		 Флаг, указывающий, отображать ли в легенде элемент «Нет
		 данных». Допустимые значения:


			- true.
			 Отображать;


			- false.
			 Не отображать.


		 NoDataPosition
		 [NoDataPosition](dhtmlGraphicBase.chm::/Enums/NoDataPosition.htm)
		 Позиция элемента «Нет данных». Допустимые значения:


			- Before.
			 В начале,


			- After.
			 В конце.


		 IncludeEquals
		 Boolean
		 Флаг, указывающий, отображать ли в легенде значения равенства.
		 Допустимые значения:


			- true. Отображать;


			- false. Не отображать.


		 Visibility
		 [Visibility](../../../../../Enums/Visibility.htm)
		 Видимость объекта. Допустимые значения:


			- Visible;


			- Collapsed.


		 HoverMode
		 [HoverMode](../../../../../Enums/HoverMode.htm)
		 Режим выделения элемента легенды:


			- MouseOver.
			 При наведении курсора;


			- Click. При щелчке
			 мыши.


		 InactiveBrush
		 [Brush](dhtmlCommon.chm::/Classes/PP/Brush/Brush.htm)
		 Кисть для подсветки территорий, не выделенных в легенде.


		 HighlightBrush
		 [Brush](dhtmlCommon.chm::/Classes/PP/Brush/Brush.htm)
		 Кисть для подсветки элементов легенды. Актуально, если
		 для DoHighlight установлено значение true.


		 DoHighlight
		 Boolean
		 Включает/отключает подсветку элементов легенды:


			- true. Включена;


			- false. Отключена.


См. также:


[Элемент
 MapChart](../MapChart_element.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
