# RatingChart.LineBrush

RatingChart.LineBrush
-


# RatingChart.LineBrush


## Синтаксис


LineBrush: [PP.SolidColorBrush](dhtmlCommon.chm::/Classes/PP/SolidColorBrush/SolidColorBrush.htm) |
 String;


## Описание


Свойство LineBrush определяет
 цвет заливки рядов данных при положительных значениях.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setLineBrush,
 а возвращается с помощью метода getLineBrush.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [RatingChart](../../Components/RatingChart/RatingChart.htm)
 с наименованием «ratingChart» (см. «[Пример
 создания компонента RatingChart](../../Components/RatingChart/RatingChart_Example.htm)»). Изменим цвета заливки рядов данных
 при положительных и отрицательных значениях:


// Отключим перерисовку диаграммы
ratingChart.beginUpdate();
// Изменим цвет заливки рядов данных при положительных значений
lineBrush = ratingChart.getLineBrush();
lineBrush.setColor("#008A00");
// Изменим цвет заливки рядов данных при отрицательных значений
negativeLineBrush = ratingChart.getNegativeLineBrush();
negativeLineBrush.setColor("#8A0000");
// Перерисуем рейтинговую диаграмму
ratingChart.draw();
// Применяем внесенные изменения и перерисовываем диаграмму
ratingChart.endUpdate();

В результате выполнения примера будут изменены цвета заливки рядов данных.


См. также:


[RatingChart](RatingChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
