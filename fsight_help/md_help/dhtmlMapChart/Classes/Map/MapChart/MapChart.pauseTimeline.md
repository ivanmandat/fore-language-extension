# MapChart.pauseTimeline

MapChart.pauseTimeline
-


# MapChart.pauseTimeline


## Синтаксис


pauseTimeline();


## Описание


Метод pauseTimeline приостанавливает
 анимацию временной шкалы.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием
 «map» (см. «[Пример
 создания компонента MapChart](../../../Components/MapChart/MapChart_Example.htm)»).


// Обработаем событие TimelineStepChanged
map.TimelineStepChanged.add(function (sender, args) {
  map.pauseTimeline();
});
После выполнения примера при изменении шага временной шкалы будет
 инициирован процесс приостановки анимации временной шкалы.


См. также:


[MapChart](MapChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
