# Metabase.getSearch

Metabase.getSearch
-


# Metabase.getSearch


## Синтаксис


getSearch(mbObjectsArg, sourceDataArg, callback,
 errorCallback);


## Параметры


mbObjectsArg. Object. Метаданные
 объекта;


sourceDataArg. Object. Метаданные
 источника данных;


callback. PP.Delegate. Функция
 обратного вызова;


errorCallback. PP.Delegate.
 Функция обратного вызова в случае ошибки.


## Описание


Метод getSearch отправляет запрос
 к серверу на поиск объекта.


## Комментарии


Метод getSearch используется
 при поиске по данным источника.


## Пример


Для выполнения примера необходимо наличие любого подключения к репозиторию,
 например используя компонента [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)»).


// Получим объект репозитория
metabase = eaxMdService.getMetabase();
// Зададим условия поиска
args = {
  "text": "WorldData",
  "range": {
    "start": 0,
    "count": 100
  }
};
// Определим функцию обратного вызова
callback = function(sender, args) {
  console.log(args)
};
// Отправим запрос на поиск объекта
metabase.getSearch(null, args, callback);
// - > Object {ResponseText: "{ "GetSearchResult": { "GetSourceDataResult":  ...}t

В результате выполнения примера был получен ответ сервера на запрос
 поиска объекта.


См. также:


[Metabase](Metabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
