# MapChart.TimelineStepChanging

MapChart.TimelineStepChanging
-


# MapChart.TimelineStepChanging


## Синтаксис


TimelineStepChanging: function(sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.
 Доступные аргументы: NewStep -
 порядковый номер следующего шага шкалы, Pause
 - флаг установки паузы перемещения временной шкалы, если установить аргументу
 значение true - перемещение временной шкалы будет остановлено.


## Описание


Событие TimelineStepChanging
 наступает перед изменением шага временной шкалы.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием
 «map» (см. «[Пример
 создания компонента MapChart](../../../Components/MapChart/MapChart_Example.htm)»).


// Обработаем событие TimelineStepChanging
map.TimelineStepChanging.add(function (sender, args) {
    console.log("Следующий шаг временной шкалы: " + args.NewStep);
});
После выполнения примера при изменении шага временной шкалы в
 консоль будет выводиться номер следующего шага.


См. также:


[MapChart](MapChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
