# DimSrv.getChildren

DimSrv.getChildren
-


# DimSrv.getChildren


## Синтаксис


getChildren(dim: PP.Mb.DimSource, args: Object,
 callback: Function | PP.Delegate, errorCallback: Function | PP.Delegate);


## Параметры


dim. Справочник;


args. Аргументы операции. Объект
 должен содержать следующие поля: selId
 - моникёр отметки; parentKey -
 ключ родительского элемента; range
 - диапазон элементов; filter
 - фильтр элементов; fireEvent
 - признак вызова события [DimSrv.ChildLoaded](DimSrv.ChildLoaded.htm),
 если для параметра установлено значение true,
 то событие будет вызвано;


callback. Функция обратного
 вызова;


errorCallback. Функция обратного
 вызова при ошибке.


## Описание


Метод getChildren загружает
 дочерние элементы по заданным параметрам.


## Пример


Для реализации примера необходимо наличие экземпляра класса [DimSrv](DimSrv.htm)
 с наименованием «dimService» (см. [Конструктор
 DimSrv](Constructor_DimSrv.htm)). Добавим обработчик события загрузки дочерних элементов. Получим
 дочерние элементы у элемента с ключом «YEARS:2003»:


// Добавляем обработчик события загрузки дочерних элементов объекта измерения
dimService.ChildLoaded.add(function(sender, args) {
    console.log("Дочерние элементы загружены");
});
// Получаем наименования дочерних элементов объекта с ключом «YEARS:2003»
var args = {
    parentKey: "YEARS:2003"
};
var func = function(sender, args) {
    var res = JSON.parse(args.ResponseText);
    var elems = res.GetDimElementsResult.els.e;
    console.log("Наименования дочерних элементов:");
    for (var i in elems) {
        console.log(elems[i].n);
    }
};
dimService.getChildren(dim, args, func);
В результате в консоль было выведено количество всех элементов справочника:


Дочерние элементы загружены


Наименования дочерних элементов:


I квартал 2003


II квартал 2003


III квартал 2003


IV квартал 2003


См. также:


[DimSrv](DimSrv.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
