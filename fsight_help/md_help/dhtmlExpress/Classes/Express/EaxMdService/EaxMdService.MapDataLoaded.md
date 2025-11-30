# EaxMdService.MapDataLoaded

EaxMdService.MapDataLoaded
-


**


# EaxMdService.MapDataLoaded


## Синтаксис


MapDataLoaded: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии. Доступные аргументы: Args - документ экспресс-отчета, ResponseText - текст ответа на данное событие от сервиса.


## Описание


Событие MapDataLoaded** наступает после загрузки карты экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»), а также должно быть доступно и загружено в рабочую область представление «Карта». Обработаем событие MapDataLoaded:


// Получим сервис для работы с экспресс-отчетом
var eaxMdService = expressBox.getService();
// Обработаем событие ChartDataLoaded
eaxMdService.MapDataLoaded.add(function () {
    console.log("Карта экспресс-отчета загружена.")
});
// Вызовем событие MapDataLoaded
eaxMdService.MapDataLoaded.fire(this);

В результате выполнения примера после срабатывания события MapDataLoaded в консоль браузера будет выводиться сообщение о том, что карта экспресс-отчета загружена.


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
