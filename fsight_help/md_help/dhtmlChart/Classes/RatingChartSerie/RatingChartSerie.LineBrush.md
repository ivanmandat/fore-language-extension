# RatingChartSerie.LineBrush

RatingChartSerie.LineBrush
-


# RatingChartSerie.LineBrush


## Синтаксис


LineBrush: [PP.SolidColorBrush](dhtmlCommon.chm::/Classes/PP/SolidColorBrush/SolidColorBrush.htm) |
 String;


## Описание


Свойство LineBrush определяет
 цвет заливки ряда данных при положительных значениях.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setLineBrush,
 а возвращается с помощью метода getLineBrush.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [RatingChart](../../Components/RatingChart/RatingChart.htm)
 с наименованием «ratingChart» (см. «[Пример
 создания компонента RatingChart](../../Components/RatingChart/RatingChart_Example.htm)»). Изменим цвет заливки фона номера
 ряда данных, цвет заливки ряда данных при положительных и отрицательных
 значениях:


// Получим первый ряд данных
serie = ratingChart.getSerie(0);
// Отключим перерисовку рейтинговой диаграммы
serie.getChart().beginUpdate();
// Настроим цвет заливки номера ряда данных
serie.setIndexBrush("#008A00");
// Настроим цвет заливки ряда данных при положительных значениях
serie.setLineBrush("#00008A");
// Настроим цвет заливки ряда данных при отрицательных значениях
serie.setNegativeLineBrush("#8A0000");
// Перерисуем ряд данных
serie.draw();
serie.getChart().endUpdate();

В результате выполнения примера будет изменен цвет заливки фона номера
 ряда данных, цвет заливки ряда данных при положительных и отрицательных
 значениях.


См. также:


[RatingChartSerie](RatingChartSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
