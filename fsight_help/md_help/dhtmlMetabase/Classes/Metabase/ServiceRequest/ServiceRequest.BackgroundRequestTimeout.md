# ServiceRequest.BackgroundRequestTimeout

ServiceRequest.BackgroundRequestTimeout
-


# ServiceRequest.BackgroundRequestTimeout


## Синтаксис


BackgroundRequestTimeout: Number;


## Описание


Свойство BackgroundRequestTimeout
 определяет задержку до отображения индикатора загрузки для фоновых запросов.


## Комментарии


Значение свойства устанавливается из JSON и при помощи метода setBackgroundRequestTimeout,
 возвращается с помощью метода getBackgroundRequestTimeout.


Значение по умолчанию: 3000.


## Пример


Для выполнения примера откройте веб-приложение «Форсайт. Аналитическая платформа».
 Указанный ниже сценарий должен быть выполнен в консоли браузера.


Запретим отображение индикатора загрузки и очистим запросы к репозиторию:


var serviceRequest = PP.Mb.ServiceRequest({
    Service: PP.App.getMetabase(), // Репозиторий
    ShowWaiterTimeout: 2000,
    HideWaiterTimeout: 2000,
    BackgroundRequestTimeout: 6000,
});
// Запретим отображение индикатора загрузки
if (serviceRequest.getWaiter())
    serviceRequest.setShowWaiter(false);
// Завершим запрос
serviceRequest.endRequest();
// Очистим все запросы к репозиторию
serviceRequest.clearRequests();
После выполнения примера запрещено отображение индикатора загрузки,
 завершен запрос и очищены все запросы к репозиторию.


См. также:


[ServiceRequest](ServiceRequest.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
