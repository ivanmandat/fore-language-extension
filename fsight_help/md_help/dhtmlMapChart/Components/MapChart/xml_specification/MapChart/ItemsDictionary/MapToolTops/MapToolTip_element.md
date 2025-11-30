# Элемент ChartTooltipBase

Элемент ChartTooltipBase
-


# Элемент ChartTooltipBase


Элемент ChartTooltipBase содержит
 описание всплывающей подсказки. Всплывающая подсказка - экземпляр
 класса [PP.Ui.ChartTooltipBase](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartTooltipBase/ChartTooltipBase.htm).


[Пример настройки всплывающей подсказки](ToolTip_exmpl.htm)


## Атрибуты элемента ChartTooltipBase


		 Наименование атрибута
		 Тип
		 Описание


		 Id


		 String


		 Идентификатор объекта подсказки. Может использоваться как
		 элемент.


		 Background


		 [Brush](dhtmlCommon.chm::/Classes/PP/Brush/Brush.htm)


		 Либо идентификатор кисти, описанной в словаре элементов,
		 либо полное описание кисти. При полном описании кисти может
		 использоваться как элемент. Идентификатор должен располагаться
		 в фигурных скобках:


		Background: ”{идентификатор}”


		 BorderColor


		 String


		 Цвет границы в формате HTML.


		 BorderRadius


		 Double


		 Радиус закругления углов границы.


		 BorderThickness


		 Double


		 Толщина границы.


		 Height


		 Double


		 Высота подсказки.


		 Left


		 Double


		 Левая координата метки.


		 Margin


		 [Thickness](dhtmlCommon.chm::/Classes/PP/Thickness/Thickness.htm)


		 Отступ полей подсказки. Формат: Margin=''2
		 2 2 2''


		 Padding


		 [Thickness](dhtmlCommon.chm::/Classes/PP/Thickness/Thickness.htm)


		 Отступ содержимого подсказки. Формат: Padding=''2
		 2 2 2''


		 Top


		 Double


		 Верхняя координата метки.


		 Width


		 Double


		 Ширина метки.


		 Font


		 [Font](dhtmlCommon.chm::/Classes/PP/Font/Font.htm)


		 Либо идентификатор шрифта, описанного в словаре элементов,
		 либо полноценное описание шрифта. При полном описании кисти может
		 использоваться как элемент. Идентификатор должен располагаться
		 в фигурных скобках:


		Font: ”{идентификатор}”


		 MaskText


		 String


		 Маска текста подсказки.


		 TextWrapping


		 [TextWrapping](dhtmlUi.chm::/Enums/TextWrapping.htm)


		 Перенос текста. Допустимые значения:


			- Wrap. Возможен
			 перенос по словам;


			- NoWrap. Невозможен
			 перенос по словам.


		 NoDataText


		 String


		 Текст, выводимый в месте, заданном в маске, при отсутствии
		 данных для формы.


		 HoverMode


		 [PP.Ui.ChartTooltipBase](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartTooltipBase/ChartTooltipBase.HoverMode.htm)


		 Режим отображения подсказки. Допустимые значения:


			- Click. При щелчке
			 мыши;


			- MouseOver. При
			 наведении курсора.


		 DropShadow


		 Boolean


		 Флаг, указывающий, должна ли подсказка отбрасывать тень
		 при отображении. Допустимые значения:


			- true. Подсказка
			 отбрасывает тень;


			- false. Подсказка
			 не отбрасывает тень.


		 Text


		 String


		 Устанавливает текст всплывающей подсказки.


См. также:


[Элемент
 ItemsDictionary](../ItemsDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
