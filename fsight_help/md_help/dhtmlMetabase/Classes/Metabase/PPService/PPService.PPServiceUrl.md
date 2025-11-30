# PPService.PPServiceUrl

PPService.PPServiceUrl
-


# PPService.PPServiceUrl


## Синтаксис


PPServiceUrl: String


## Описание


Свойство PPServiceUrl устанавливает
 URL-адрес обработчика запросов веб-сервиса.


## Комментарии


В значении свойства задается URL-адрес вида "PPService.axd?action=proxy",
 где PPService.axd - путь до обработчика
 запросов на веб-сервере, в параметре action
 задается операция, которую должен выполнить обработчик:


	- proxy. Перенаправление
	 запроса от клиента до веб-сервиса через веб-сервер;


Значение свойства задается из JSON при [создании
 соединения к репозиторию](../Metabase/Constructor_Metabase.htm), возвращается при помощи метода getPPServiceUrl.


## Пример


Пример использования свойства приведен на странице «[Пример
 размещения компонента ReportBox](dhtmlReport.chm::/Components/RegularReport/ReportBox/ReportBox_Example.htm)».


См. также:


[PPService](PPService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
