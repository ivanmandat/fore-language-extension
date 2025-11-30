# HieService.MetadataChangeStart

HieService.MetadataChangeStart
-


# HieService.MetadataChangeStart


## Синтаксис


MetadataChangeStart: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие MetadataChangeStart
 наступает во время изменения метаданных иерархии рядов.


## Пример


Для выполнения примера необходимо создать сервис для работы с временными
 рядами c наименованием «hieSrv» (см. «[HieService.getChildEls](HieService.getChildEls.htm)»)
 и в обработчике события открытия документа добавить следующий код:


hieSrv.MetadataChangeStart.add(onDummyActionFactory("Начало изменений метаданных иерархии рядов"));
hieSrv.MetadataChangeStart(hieSrv,{});

После выполнения примера будут изменены метаданные иерархии рядов и в
 консоли браузера будет выведено следующее сообщение:


Начало изменений метаданных иерархии рядов


PP.Mb.MetaHierarchy {_RubricatorKey: 112, _RubInstanceId:
 null, _WorkbookInstanceId: null, _FilterFacts: Array[0], _Metabase: PP.Mb.Metabase…}


См. также:


[HieService](HieService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
