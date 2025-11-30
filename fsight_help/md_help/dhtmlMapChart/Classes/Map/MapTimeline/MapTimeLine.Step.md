# MapTimeLine.Step

MapTimeLine.Step
-


# MapTimeLine.Step


## Синтаксис


Step: function (sender,args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Step наступает при переходе к следующему шагу временной шкалы.


## Пример


Для выполнения примера предполагается наличие на странице компонента [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием «map» (см. «[Размещение карты на HTML странице](../../../Components/MapChart/HTML_layout.htm)»), для которого настроена временная линия (см. «[Пример настройки временной линии](../../../Components/MapChart/xml_specification/MapChart/MapTimeline/TimeLine_exmpl.htm)»). Добавим обработчик события Step:


tl.Step.add(function ()


{


    console.log(tl.getCurrentStep())


})


После выполнения примера включите анимацию временной шкалы (нажмите кнопку ![](play.gif)). После прохождения каждого шага в консоль будет выводиться номер пройденного шага.


См. также:


[MapTimeline](MapTimeline.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
