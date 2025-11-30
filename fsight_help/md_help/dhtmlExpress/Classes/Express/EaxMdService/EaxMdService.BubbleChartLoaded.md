# EaxMdService.BubbleChartLoaded

EaxMdService.BubbleChartLoaded
-


**


# EaxMdService.BubbleChartLoaded


## Синтаксис


BubbleChartLoaded: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии. Доступные аргументы: Args - документ экспресс-отчета, ResponseText - текст ответа на данное событие от сервиса.


## Описание


Событие BubbleChartLoaded** наступает после загрузки пузырьковой диаграммы экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной пузырьковой диаграммой в рабочей области экспресс-отчета. Обработаем событие BubbleChartLoaded, выводя сведения о пузырьковой диаграмме:


// Получим сервис для работы с экспресс-отчетом
var eaxMdService = expressBox.getService();
// Обработаем событие BubbleChartLoaded
eaxMdService.BubbleChartLoaded.add(function () {
    // Получаем документ экспресс-отчета
    var eaxAnalyzer = expressBox.getSource();
    var metadata = eaxMdService.getBubbleChart(eaxAnalyzer);
    if (metadata) {
        console.log("Объект со сведениями о пузырьковой диаграмме экспресс-отчета:");
        console.log(metadata);
    } else {
        console.log("Сведения о пузырьковой диаграмме экспресс-отчета отсутствуют.");
    }
});

В результате выполнения примера при обработке события, наступающего после загрузки пузырьковой диаграммы экспресс-отчета, в консоли браузера будет выведен объект с метаданными пузырьковой диаграммы, либо сообщение о том, что сведения о ней отсутствуют.


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
