# HieService.Metadata

HieService.Metadata
-


# HieService.Metadata


## Синтаксис


Metadata: Object;


## Описание


Свойство Metadata посылает запрос на получение метаданных иерархии рядов.


## Пример


Для выполнения примера необходимо создать сервис для работы с временными рядами c наименованием «hieSrv» (см. «[HieService.getChildEls](HieService.getChildEls.htm)») и в обработчике события открытия документа добавить следующий код:


console.log("Получаем метаданные иерархии рядов");
	hieSrv.Metadata = "Metadata";
	var meta = hieSrv.Metadata;
	console.log(meta);

После выполнения примера в консоль будет выведено следующее:


Получаем метаданные иерархии рядов


Metadata


См. также:


[HieService](HieService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
