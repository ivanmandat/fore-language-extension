# Chart.ToolTipDelay

Chart.ToolTipDelay
-


# Chart.ToolTipDelay


## Синтаксис


ToolTipDelay: Number;


## Описание


Свойство ToolTipDelay определяет
 задержку перед отображением всплывающей подсказки.


## Комментарии


Значение свойства задаётся в конструкторе [Chart](Constructor_Chart.htm)
 или с помощью метода setToolTipDelay,
 а возвращается с помощью метода getToolTipDelay.


Свойство задается в милисекундах.


По умолчанию содержит значение 500.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [Chart](Chart.htm) с наименованием «chart» (см. «[Пример
 создания сглаженной диаграммы](../../../Components/Chart/ChartSplineSerie.htm)»). Настроим отображение всплывающих
 подсказок:


// Установим задержку перед отображением всплывающей подсказки
chart.setToolTipDelay(1500);
// Установим маску подсказки
chart.setToolTipFormatter("%SerieName, %PointName - %Autovalue");
// Установим формат данных
chart.setToolTipDataFormat("#,##0.00");
// Уберем следование подсказки за курсором
chart.setToolTipFollowPointer(false);
// Уберем окрашивание границы подсказки в цвет ряда
chart.setUseIndicatorColorForToolTipBorder(false);
В результате выполнения примера были изменены настройки всплывающих
 подсказок.


См. также:


[Chart](Chart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
