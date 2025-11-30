# PPService.getCurrentRequest

PPService.getCurrentRequest
-


# PPService.getCurrentRequest


## Синтаксис


getCurrentRequest();


## Описание


Метод getCurrentRequest возвращает
 текущий запрос сервисов.


## Комментарии


Метод возвращает null, если нет текущих запросов.


Метод необходимо вызывать в событиях [PPService.StartRequest](PPService.StartRequest.htm)
 или [PPService.EndRequest](PPService.EndRequest.htm).


## Пример


Для выполнения примера необходимо наличие любого подключения к метабазе,
 например используя компонента [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)»).


// Получим сервис репозитория
metabase = eaxAnalyzer.getMetabase();
// Получим текущий запрос
metabase.EndRequest.add(function(){
  console.log(metabase.getCurrentRequest());
});

В результате выполнения примера при обращении к репозиторию в консоль
 будет выведен текущий запрос.


См. также:


[PPService](PPService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
