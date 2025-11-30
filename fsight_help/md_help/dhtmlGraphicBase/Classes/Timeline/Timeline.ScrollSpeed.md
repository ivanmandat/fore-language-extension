# Timeline.ScrollSpeed

Timeline.ScrollSpeed
-


**


# Timeline.ScrollSpeed


## Синтаксис


ScrollSpeed: Number


## Описание


Свойство ScrollSpeed** устанавливает скорость прокрутки временной шкалы.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setScrollSpeed, а возвращается с помощью метода getScrollSpeed.


По умолчанию свойство содержит значение 1.


Прокрутка допускается в том случае, если не все шаги умещаются на временной шкале.


## Пример


Для выполнения примера необходимо наличие на странице компонента [Timeline](../../Components/Timeline/Timeline.htm) с наименованиями «timeline» (см. «[Пример создания компонента Timeline](../../Components/Timeline/Timeline_Example.htm)»). Отобразим на временной шкале все шаги и добавим новые, а также увеличим количество шагов, на которое прокручивается данная шкала:


// Получим массив шагов временной шкалы
var stepsNames = timeline.getStepsNames();
// Добавим новые шаги
stepsNames.push(2011, 2012, 2013, 2014, 2015);
// Сделаем все шаги видимыми
for (var i in timeline.getStepsVisibility()) {
    if (timeline.getStepsVisibility()[i] == undefined) {
        timeline.getStepsVisibility().push(true)
    } else {
        timeline.getStepsVisibility()[i] = true
    }
};
// Установим прокрутку шкалы через 3 элемента
timeline.setScrollSpeed(3);
// Перерисуем временную шкалу
timeline._render();

В результате выполнения примера на временной шкале были отображены все шаги и добавлены пять новых:


![](Timeline_ScrollSpeed1.png)


Количество шагов, на которое прокручивается временная шкала , увеличилось до трёх. Для проверки прокрутим шкалу вправо, один раз нажав на крайнюю правую кнопку:


![](Timeline_ScrollSpeed2.png)


См. также:


[Timeline](Timeline.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
