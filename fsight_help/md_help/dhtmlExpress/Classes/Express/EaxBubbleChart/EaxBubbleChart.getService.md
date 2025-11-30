# EaxBubbleChart.getService

EaxBubbleChart.getService
-


**


# EaxBubbleChart.getService


## Синтаксис


getService();


## Описание


Метод getService** возвращает объект сервиса для работы с экспресс-отчетом.


## Комментарии


Метод возвращает объект типа PP.Exp.[EaxMdService](../EaxMdService/EaxMdService.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [EaxBubbleChart](EaxBubbleChart.htm) с наименованием «bubbleChart» (см. страницу «[Пример создания компонента EaxBubbleChart](../../../Components/Express/EaxBubbleChart/EaxBubbleChart.htm)»), т.е. на данной странице должна быть нажата кнопка «Отобразить пузырьковую диаграмму экспресс-отчета». Получим через пузырьковую диаграмму сервис для работы с экспресс-отчетом и обработаем событие BubbleChartLoaded:


// Получаем сервис для работы с экспресс-отчетом
var service = eaxBubbleChart.getService();
// Обработаем событие BubbleChartLoaded
service.BubbleChartLoaded.add(function (sender, args) {
    // Создаём мастер управления пузырьковой диаграммой
    this.showBubbleChartMaster()
});
// Вызываем событие BubbleChartLoaded
service.BubbleChartLoaded.fire(this);

В результате выполнения примера после вызова события загрузки пузырьковой диаграммы в консоли браузера будет выведено соответствующее уведомление, а на html-странице также будет добавлен мастер управления данной пузырьковой диаграммой:


![](../../../Components/Express/EaxBubbleChart/EaxBubbleChart_Example.png)


См. также:


[EaxBubbleChart](EaxBubbleChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
