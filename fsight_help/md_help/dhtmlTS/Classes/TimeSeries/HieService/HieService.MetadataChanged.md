# HieService.MetadataChanged

HieService.MetadataChanged
-


# HieService.MetadataChanged


## Синтаксис


MetadataChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие MetadataChanged наступает по окончанию изменения метаданных иерархии рядов.


## Пример


Для выполнения примера необходимо создать сервис для работы с временными рядами «hieSrv» (см. «[HieService.getChildEls](HieService.getChildEls.htm)») и в обработчике события открытия документа добавить следующий код:


hieSrv.MetadataChanged.add(onDummyActionFactory("Изменились параметры рабочей книги"));
hieSrv.MetadataChanged.fire(hieSrv, {});

После выполнения примера будут изменены параметры рабочей книги и в консоли браузера будет выведено следующее сообщение:


Изменились параметры рабочей книги


PP.TS.HieService {_Metabase: PP.Mb.Metabase, _UseMbQueueRqts: true, _Events: Object, MetadataChanged: PP.Delegate, MetadataChangeStart: PP.Delegate…}


Object {id: Object, meta: Object


См. также:


[HieService](HieService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
