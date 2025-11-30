# HieService.getSetMetadataSettings

HieService.getSetMetadataSettings
-


# HieService.getSetMetadataSettings


## Синтаксис


getSetMetadataSettings (hie);


## Параметры


hie. Задает объект иерархии.


## Описание


Метод getSetMetadataSettings
 возвращает тело запроса сохранения метаданных иерархии рядов.


## Пример


Для выполнения примера необходимо создать сервис для работы с временными
 рядами «hieSrv» (см. «[HieService.getChildEls](HieService.getChildEls.htm)»)
 и в обработчике события открытия документа добавить следующий код:


console.log("Получаем тело запроса сохранения метаданных иерархии рядов");
hie = res.Args.Hier;
var bodySetMdSettings = hieSrv.getSetMetadataSettings(hie);
console.log(bodySetMdSettings);

После выполнения примера в консоль браузера будет выведено тело запроса
 сохранения метаданных иерархии рядов:


Получаем тело запроса сохранения метаданных иерархии
 рядов


Object {SetHieMd: Object}


См. также:


[HieService](HieService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
