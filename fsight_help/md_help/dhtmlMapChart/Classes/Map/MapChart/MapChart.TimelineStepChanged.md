# MapChart.TimelineStepChanged

MapChart.TimelineStepChanged
-


# MapChart.TimelineStepChanged


## Синтаксис


TimelineStepChanged: function(sender, args);


## Параметры


sender. Источник события;


args. Информация о событии. Доступный аргумент: CurrentStep - порядковый номер текущего шага шкалы..


## Описание


Событие TimelineStepChanged наступает после изменения шага временной шкалы.


## Пример


Для выполнения примера предполагается наличие на странице компонента [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием «map» (см. «[Пример создания компонента MapChart](../../../Components/MapChart/MapChart_Example.htm)»).


// Обработаем событие TimelineStepChanged
map.TimelineStepChanged.add(function (sender, args) {
    console.log("Текущий шаг временной шкалы: " + args.CurrentStep);
});

После выполнения примера при изменении шага временной шкалы в консоль будет выводиться номер текущего шага.


См. также:


[MapChart](MapChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
