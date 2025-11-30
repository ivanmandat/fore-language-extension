# DimSrv.getPathToKey

DimSrv.getPathToKey
-


# DimSrv.getPathToKey


## Синтаксис


getPathToKey(dim: PP.Mb.DimSource, args: Object,
 callback: Function | PP.Delegate, errorCallback: Function | PP.Delegate);


## Параметры


dim. Справочник;


args. Аргументы операции. Объект
 должен содержать следующие поля: selId
 - моникёр отметки; keysToLoad
 - ключи элементов для загрузки; filter
 - фильтр элементов; fireEvent
 - признак вызова события [DimSrv.ChildLoaded](DimSrv.ChildLoaded.htm),
 если для аргумента установлено значение true,
 то событие будет вызвано; getPathOnly
 - признак получения элементов без занесения данных в модель, если для
 аргумента установлено значение true,
 то элементы будут получены, но не добавлены в модель;


callback. Функция обратного
 вызова;


errorCallback. Функция обратного
 вызова при ошибке.


## Описание


Метод getPathToKey загружает
 пути элементов с указанными ключами.


## Пример


Для реализации примера необходимо наличие экземпляра класса [DimSrv](DimSrv.htm)
 с наименованием «dimService» (см. [Конструктор
 DimSrv](Constructor_DimSrv.htm)). Получим данные элемента с ключом «YEARS:1998»:


// Получаем данные элемента с ключом «YEARS:1998»
var func = function(sender, args) {
    var res = JSON.parse(args.ResponseText);
    var elem = res.GetDimElementsResult.els.e[0];
    console.log("Ключ элемента: " + elem.k);
    console.log("Наименование элемента: " + elem.n);
}
var args = {
    keysToLoad: ["YEARS:1998"],
    getPathOnly: true
}
dimService.getPathToKey(dim, args, func);
В результате в консоль были выведены данные элемента с ключом «YEARS:1998»:


Ключ элемента: YEARS:1998


Наименование элемента: 1998


См. также:


[DimSrv](DimSrv.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
