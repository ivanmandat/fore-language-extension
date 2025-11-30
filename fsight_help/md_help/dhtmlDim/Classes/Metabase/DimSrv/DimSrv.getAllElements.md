# DimSrv.getAllElements

DimSrv.getAllElements
-


# DimSrv.getAllElements


## Синтаксис


getAllElements(dim: PP.Mb.DimSource, args: Object,
 callback: Function | PP.Delegate, errorCallback: Function | PP.Delegate);


## Параметры


dim. Справочник;


args. Аргументы операции. Объект
 должен содержать следующие поля: selId
 - моникёр отметки; filter - фильтр
 элементов;


callback. Функция обратного
 вызова;


errorCallback. Функция обратного
 вызова при ошибке.


## Описание


Метод getAllElements загружает
 все элементы справочника.


## Пример


Для реализации примера необходимо наличие экземпляра класса [DimSrv](DimSrv.htm)
 с наименованием «dimService» (см. [Конструктор
 DimSrv](Constructor_DimSrv.htm)). Получим количество всех элементов справочника:


// Получаем количество всех элементов измерения
var func = function(sender, args) {
    console.log("Количество элементов: " + JSON.parse(args.ResponseText).GetDimElementsResult.totalCount);
}
dimService.getAllElements(dim, {}, func);
В результате в консоль было выведено количество всех элементов справочника:


Количество элементов: 272


См. также:


[DimSrv](DimSrv.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
