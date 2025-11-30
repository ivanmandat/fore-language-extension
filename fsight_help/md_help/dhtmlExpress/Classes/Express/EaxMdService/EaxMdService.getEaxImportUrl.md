# EaxMdService.getEaxImportUrl

EaxMdService.getEaxImportUrl
-


# EaxMdService.getEaxImportUrl


## Синтаксис


getEaxImportUrl();


## Описание


Метод getEaxImportUrl возвращает
 URL-адрес обработчика запросов для импорта данных в отчёт.


## Комментарии


Метод возвращает значение типа String.


## Пример


Воспользуемся примером, приведённым на странице «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)». Получим URL-адрес обработчика
 запросов для импорта данных в отчёте:


// Получаем сервис для работы с экспресс-отчётом
var service = expressBox.getSource().getPPService();
console.log("URL-адрес обработчика запросов для импорта данных в отчете: %s", service.getEaxImportUrl());
В результате выполнения примера в консоли браузера был выведен URL-адрес
 обработчика запросов для импорта данных в отчёт:


URL-адрес обработчика запросов для импорта данных
 в отчете: PPService.axd?action=proxy?action=eaximport


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
