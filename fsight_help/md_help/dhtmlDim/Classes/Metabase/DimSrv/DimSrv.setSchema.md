# DimSrv.setSchema

DimSrv.setSchema
-


# DimSrv.setSchema


## Синтаксис


setSchema(dim: PP.Mb.DimSource, args: Object, callback:
 Function | PP.Delegate, errorCallback: Function | PP.Delegate);


## Параметры


dim. Справочник;


args. Аргументы операции. Объект
 должен содержать следующие поля: selId
 - моникёр отметки; schemaId -
 идентификатор схемы; applyOnlyOnce
 - признак однократной установки схемы, если для аргумента установлено
 значение true, то схема может
 быть установлена только один раз; applyImmediate
 - признак немедленного применения схемы, если для аргумента установлено
 значение true, то схема будет
 применена сразу.


callback. Функция обратного
 вызова;


errorCallback. Функция обратного
 вызова при ошибке.


## Описание


Метод setSchema устанавливает
 схему отметки в справочнике.


## Пример


Для реализации примера необходимо наличие экземпляра класса [DimSrv](DimSrv.htm)
 с наименованием «dimService» (см. [Конструктор
 DimSrv](Constructor_DimSrv.htm)). Установим схему, полученную из метаданных, по которой выделяются
 все элементы справочника:


// Получаем метаданные справочника
var meta;
var func = function(sender, args){
    meta = JSON.parse(args.ResponseText).GetDimMetadataResult;
}
dimService.getMetadata(dim, {}, func);
var args = {
    schemaId: meta.data.schemas.it[0].id,
}
dimService.setSchema(dim, args);
// Получаем все отмеченые элементы измерения
var func = function(sender, args) {
    var res = JSON.parse(args.ResponseText);
    var elems = res.GetDimElementsResult.els.e;
    console.log("Количество отмеченных элементов: " + elems.length);
}
dimService.getAllSelectedEls(dim, func);
Для подтверждения в консоль было выведено количество отмеченных элементов:


Количество отмеченных элементов: 272


См. также:


[DimSrv](DimSrv.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
