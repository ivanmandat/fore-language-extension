# RatingChart.IndexBrush

RatingChart.IndexBrush
-


# RatingChart.IndexBrush


## Синтаксис


IndexBrush: [PP.SolidColorBrush](dhtmlCommon.chm::/Classes/PP/SolidColorBrush/SolidColorBrush.htm) |
 String;


## Описание


Свойство IndexBrush определяет
 цвет заливки фона номеров рядов данных.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setIndexBrush,
 а возвращается с помощью метода getIndexBrush.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [RatingChart](../../Components/RatingChart/RatingChart.htm)
 с наименованием «ratingChart» (см. «[Пример
 создания компонента RatingChart](../../Components/RatingChart/RatingChart_Example.htm)»). Изменим цвет заливки фона номеров
 рядов данных:


// Изменим цвет фона номеров рядов данных
indexBrush = ratingChart.getIndexBrush();
indexBrush.setColor("#008A00");
// Обновим рейтинговую диаграмму
ratingChart.update(true,true,true);

В результате выполнения примера будет изменен цвет заливки фона номеров
 рядов данных.


См. также:


[RatingChart](RatingChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
