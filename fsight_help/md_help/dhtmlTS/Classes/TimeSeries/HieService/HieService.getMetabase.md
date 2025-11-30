# HieService.getMetabase

HieService.getMetabase
-


# HieService.getMetabase


## Синтаксис


getMetabase ();


## Описание


Метод getMetabase возвращает экземпляр метабазы.


## Пример


Для выполнения примера необходимо создать сервис для работы с временными рядами c наименованием «hieSrv» (см. «[HieService.getChildEls](HieService.getChildEls.htm)») и в обработчике события открытия документа добавить следующий код:


console.log("Получаем репозиторий");
var metabase = hieSrv.getMetabase();
console.log(metabase);

После выполнения примера в консоль браузера будет выведен json-объект экземпляра метабазы:


Получаем репозиторий


PP.Mb.Metabase {_Events: Object, Closed: PP.Delegate, Refreshed: PP.Delegate, Opened: PP.Delegate, FindObjectsLoaded: PP.Delegate…}


См. также:


[HieService](HieService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
