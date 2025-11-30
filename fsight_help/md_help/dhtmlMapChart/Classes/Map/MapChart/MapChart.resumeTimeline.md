# MapChart.resumeTimeline

MapChart.resumeTimeline
-


# MapChart.resumeTimeline


## Синтаксис


resumeTimeline();


## Описание


Метод resumeTimeline возобновляет
 анимацию временной шкалы.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием
 «map» (см. «[Пример
 создания компонента MapChart](../../../Components/MapChart/MapChart_Example.htm)»).


// Возобновим анимацию
map.resumeTimeline();
// Остановим анимацию после задержки
PP.setTimeout(function() {
map.pauseTimeline()}, 3000);
После выполнения примера анимация будет запущена и остановлена
 через 3 секунды.


См. также:


[MapChart](MapChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
