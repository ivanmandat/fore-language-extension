# HieService.getGetMetadataSettings

HieService.getGetMetadataSettings
-


# HieService.getGetMetadataSettings


## Синтаксис


getGetMetadataSettings (hie);


## Параметры


hie. Задает объект иерархии.


## Описание


Метод
 getGetMetadataSettings возвращает тело
 запроса получения метаданных иерархии рядов.


## Пример


Для выполнения примера необходимо создать сервис для работы с временными
 рядами c наименованием «hieSrv» (см. «[HieService.getChildEls](HieService.getChildEls.htm)»)
 и в обработчике события открытия документа добавить следующий код:


console.log("Получаем тело запроса получения метаданных иерархии рядов");
var bodyGetMdSettings = hieSrv.getGetMetadataSettings(hie);
console.log(bodyGetMdSettings);

После выполнения примера в консоль браузера будет выведено тело запроса
 получения метаданных иерархии рядов:


Получаем тело запроса получения метаданных иерархии
 рядов


Object {GetHieMd: Object}


См. также:


[HieService](HieService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
