# ChartBox.getService

ChartBox.getService
-


**


# ChartBox.getService


## Синтаксис


getService();


## Описание


Метод getService** возвращает объект сервиса для работы с экспресс-отчетом.


## Комментарии


Метод возвращает объект типа PP.Exp.[EaxMdService](../EaxMdService/EaxMdService.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ChartBox](../../../Components/Express/ChartBox/ChartBox.htm) с наименованием «chartBox» (см. «[Пример создания компонента ChartBox](../../../Components/Express/ChartBox/ChartBox_Example.htm)»). Дождёмся полной загрузки компонента, после чего получим сервис для работы с экспресс-отчетом и обработаем событие ChartDataLoaded:


// Получим сервис для работы с экспресс-отчетом
var service = chartBox.getService();
// Обрабатываем событие ChartDataLoaded
service.ChartDataLoaded.add(function () {
    if (chartBox.isLoaded()) {
        console.log("Контейнер для диаграммы экспресс-отчета загружен.");
    }
});
// Вызываем событие ChartDataLoaded
service.ChartDataLoaded.fire(this);

В результате выполнения примера после вызова события загрузки контейнера для диаграммы в консоли браузера будет выведено соответствующее уведомление.


См. также:


[ChartBox](ChartBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
