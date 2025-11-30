# EaxGridView.getLegend

EaxGridView.getLegend
-


# EaxGridView.getLegend


## Синтаксис


getLegend (eaxIndicator: PP.Exp.EaxObjectIndicator)
 : [PP.Ui.IntervalsLegend](dhtmlGraphicBase.chm::/classes/intervalslegend/intervalslegend.htm);


## Параметры


EaxIndicator. Тип метрики.


## Описание


Метод getLegend возвращает объект
 интервальной легенды, тип которой соответствует типу метрики, переданному
 в качестве параметра.


## Комментарии


Допустимые значения параметра EaxIndicator:


	- PP.Exp.EaxObjectIndicator.BackgroundColor.
	 Метрика «Цвет фона»;


	- PP.Exp.EaxObjectIndicator.FontColor.
	 Метрика «Цвет шрифта»;


	- PP.Exp.EaxObjectIndicator.FontSize.
	 Метрика «Размер шрифта».


## Пример


Для выполнения примера на html-странице необходимо наличие компонента
 [EaxGrid](../../../Components/Express/EaxGrid/EaxGrid.htm)
 с наименованием «eaxGrid» (см.
 «[Пример
 создания компонента EaxGrid](../../../Components/Express/EaxGrid/EaxGrid_Create_Sample.htm)»). Компонент отображает экспресс-отчет,
 содержащий таблицу, для которой определена метрика «Цвет
 фона». Для метрики таблицы «Цвет
 фона» должна быть отображена легенда.


eaxGrid.Rendered.add(function () {
	var legend = eaxGrid.getLegend(PP.Exp.EaxObjectIndicator.BackgroundColor);
	// Установим цвет и прозрачность кисти для подсветки элементов легенды
	var brush = legend.getHighlightBrush();
	brush.setColor("#FF0000");
	brush.setOpacity(0.3);
	legend.setHighlightBrush(brush);
	// Установим цвет подсвеченных элементов легенды
	legend.setHighlightItemColor("LightSeaGreen");
	// Разрешим подсветку элементов легенды
	legend.setDoHighlight(true);
	// Установим режим отображения подсветки по щелчку
	legend.setHoverMode(PP.HoverMode.Click);
});
eaxGrid.refreshAll();
Щёлкнем по любому элементу интервальной легенды «Цвет
 фона».


В результате выполнения примера были изменены следующие свойства легенды:
 цвет и прозрачность кисти подсветки элементов легенды, цвет подсвеченных
 элементов; был установлен режим отображения подсветки по щелчку и разрешена
 подсветка элементов легенды.


См. также:


[EaxGridView](EaxGridView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
