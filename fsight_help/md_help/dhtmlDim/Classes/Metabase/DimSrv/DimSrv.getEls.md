# DimSrv.getEls

DimSrv.getEls
-


# DimSrv.getEls


## Синтаксис


getEls(dim: PP.Mb.DimSource, parent: String, elsFilter:
 String, elsPattern: String, listRange: Object, callback: Function | PP.Delegate,
 errCallback: Function | PP.Delegate);


## Параметры


dim. Справочник;


parent. Ключ родительского элемента;


elsFilter. Фильтр элементов;


elsPattern. Шаблон, по которому
 будут извлекаться элементы;


listRange. Диапазон элементов;


callback. Функция обратного
 вызова;


errorCallback. Функция обратного
 вызова при ошибке.


## Описание


Метод getEls необходим для получения
 элементов справочника по переданным параметрам.


## Пример


Для реализации примера необходимо наличие экземпляра класса [DimSrv](DimSrv.htm)
 с наименованием «dimService» (см. [Конструктор
 DimSrv](Constructor_DimSrv.htm)). Получим дочерние элементы у элемента с ключом «YEARS:2002»:


// Получаем дочерние элементы у элемента с ключом «YEARS:2002»
var func = function(sender, args) {
    var res = JSON.parse(args.ResponseText);
    var elems = res.GetDimElementsResult.els.e;
    console.log("Дочерние элементы:");
    for (var i in elems) {
        elems[i].n.indexOf("квартал") != -1 ? console.log(elems[i].n) : null;
    }
}
dimService.getEls(dim, "YEARS:2002", null, null, null, func);
В результате в консоль были выведены дочерние элементы у элемента с
 ключом «YEARS:2002»:


Дочерние элементы:


I квартал 2002


II квартал 2002


III квартал 2002


IV квартал 2002


См. также:


[DimSrv](DimSrv.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
