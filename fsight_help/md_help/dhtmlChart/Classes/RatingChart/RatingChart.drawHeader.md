# RatingChart.drawHeader

RatingChart.drawHeader
-


# RatingChart.drawHeader


## Синтаксис


drawHeader();


## Описание


Метод drawHeader перерисовывает
 строку заголовков рейтинговой диаграммы.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [RatingChart](../../Components/RatingChart/RatingChart.htm)
 с наименованием «ratingChart» (см. «[Пример
 создания компонента RatingChart](../../Components/RatingChart/RatingChart_Example.htm)»). Настроим цвет заливки фона строки
 заголовков и обновим строку:


// Получим строку заголовков
header = ratingChart.getHeader();
// Настроим цвет фона
style = new PP.Style({Background: ({Color: "#008A00"})});
header.setStyle(style);
// Перерисуем строку заголовков
ratingChart.drawHeader()

В результате выполнения примера будет настроен и применен цвет заливки
 фона строки заголовков рейтинговой диаграммы.


См. также:


[RatingChart](RatingChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
