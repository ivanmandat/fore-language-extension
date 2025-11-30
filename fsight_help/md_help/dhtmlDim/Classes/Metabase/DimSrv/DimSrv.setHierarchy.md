# DimSrv.setHierarchy

DimSrv.setHierarchy
-


# DimSrv.setHierarchy


## Синтаксис


setHierarchy(dim: PP.Mb.DimSource, args: Object,
 callback: Function | PP.Delegate, errorCallback: Function | PP.Delegate);


## Параметры


dim. Справочник;


args. Аргументы операции. Объект
 должен содержать следующие поля: hierId
 - идентификатор иерархии;


callback. Функция обратного
 вызова;


errorCallback. Функция обратного
 вызова при ошибке.


## Описание


Метод setHierarchy устанавливает
 альтернативную иерархию справочнику.


## Пример


Для реализации примера необходимо наличие экземпляра класса [DimSrv](DimSrv.htm)
 с наименованием «dimService» (см. [Конструктор
 DimSrv](Constructor_DimSrv.htm)). Установим иерархию, полученную из метаданных, и выведем ее
 наименование:


// Получаем метаданные справочника
var meta;
var func = function(sender, args){
    meta = JSON.parse(args.ResponseText).GetDimMetadataResult;
}
dimService.getMetadata(dim, {}, func);
var args = {
    hierId: meta.data.hiers.it[0].id,
}
var func = function(sender, args) {
    var res = JSON.parse(args.ResponseText);
    var hier = res.GetDimMetadataResult.data.selection.hierarchy;
    console.log("Наименование установленной иерархии: " + hier.n);
}
dimService.setHierarchy(dim, args, func);
В результате в консоль было выведено наименование установленной иерархии:


Наименование установленной иерархии: Социально-экономические
 показатели


См. также:


[DimSrv](DimSrv.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
