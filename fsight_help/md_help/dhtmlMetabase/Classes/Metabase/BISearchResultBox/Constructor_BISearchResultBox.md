# Конструктор BISearchResultBox

Конструктор BISearchResultBox
-


# Конструктор BISearchResultBox


## Синтаксис


PP.Mb.Ui.BISearchResultBox(settings);


## Параметры


settings. JSON-объект со значениями
 свойств компонента.


## Описание


Конструктор BISearchResultBox
 создает контейнер с результатами BI-поиска.


## Пример


Для выполнения примера необходимо наличие любого компонента с доступом
 к репозиторию, например [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)») и наличие контейнера
 для компонента, например элемента div с идентификатором container.


// Получим объект репозитория
metabase = eaxMdService.getMetabase();

// Создадим обработчики событий
eventResultItemClick = function(sender, args) {
    console.log("ResultItemClick:");
    console.log(args);
};
eventSearchFailed = function(sender, args) {
    console.log("SearchFailed:");
    console.log(args);
};
eventSearchSucceed = function(sender, args) {
    console.log("SearchSucceed:");
    console.log(args);
};

// Создадим компонент
BIsearchBox = new PP.Mb.Ui.BISearchResultBox({
    Metabase: metabase,
    ResultItemClick: eventResultItemClick,
    SearchFailed: eventSearchFailed,
    SearchSucceed: eventSearchSucceed,
});
BIsearchBox.addToNode("container");
// Инициируем поиск
BIsearchBox.search("world", {start: 0, count : 20});
// Дополним результаты поиска
BIsearchBox.searchNext();
В результате выполнения примера был создан контейнер для результатов
 BI-поиска и был произведен поиск.


См. также:


[BISearchResultBox](BISearchResultBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
