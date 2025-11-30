# MetaSrv.getChildren

MetaSrv.getChildren
-


# MetaSrv.getChildren


## Синтаксис


getChildren(metaDim: PP.Ufe.[MetaSource](../MetaSource/MetaSource.htm),
 args: Object, callback: Function|PP.Delegate, errorCallback: Function|PP.Delegate);


## Параметры


metaDim. Модель дерева метаданных;


args. Аргументы. Содержит объект
 с полями: parentKey - ключ родительского
 элемента; range - диапазон запрашиваемых
 элементов; filter - фильтр элементов;
 fireEvent - признак вызова события
 [ChildLoaded](MetaSrv.ChildLoaded.htm) после загрузки элементов,
 если для аргумента установлено значение true,
 то событие будет вызвано. По умолчанию для аргумента установлено значение
 true;


callback. Функция обратного
 вызова;


errorCallback. Функция обратного
 вызова при ошибке.


## Описание


Метод getChildren возвращает
 дочерние элементы, согласно переданным параметрам.


## Пример


Для выполнения примера необходимо наличие экземпляра класса [MetaTree](../../PP_Ufe_Ui/MetaTree/MetaTree.htm)
 с наименованием «metaTree» (см. [Конструктор
 MetaTree](../../PP_Ufe_Ui/MetaTree/Constructor_MetaTree.htm)). Добавим обработчик события загрузки дочерних элементов
 сервисом. Получим дочерние элементы родительского элемента с наименование
 «Источники»:


// Получаем модель дерева метаданных
var metaSource = metaTree.getSource();
// Получаем объект класса для работы с сервисом дерева метаданных
var metaService = metaTree.getService();
// Добавляем обработчик события загрузки дочерних элементов
metaService.ChildLoaded.add(function(sender, args) {
    console.log("Дочерние элементы загружены");
});
// Получаем дочерние элементы родительского элемента с наименованием «Источники»
var func = function(sender, args) {
    var res = JSON.parse(args.ResponseText);
    var elems = res.GetTreeElementsResult.els.e;
    if(elems) {
        console.log("Наименования полученных дочерних элементов:");
        for (var i in elems) {
            console.log(elems[i].n);
            metaSource.setTotalCount(elems.length, args.filter ? args.filter : metaSource.getDefaultFilter());
        };
    }
};
var args = {
    parentKey: 0
};
metaService.getChildren(metaSource, args, func);
В результате в консоль были выведены наименования дочерних элементов
 родительского элемента с наименование «Источники» и информация о том,
 что дочерние элементы загружены:


Наименования полученных дочерних элементов:


Социально-экономические показатели


Дочерние элементы загружены


Получим количество загруженных элементов, которые удовлетворяют базовому
 фильтру модели дерева метаданных:


// Получаем количество загруженных элементов, которые удовлетворяют базовому фильтру
console.log("Количество загруженных элементов: " + metaSource.getTotalCount(metaSource.getDefaultFilter()));
В результате в консоль было выведено  количество загруженных элементов,
 которые удовлетворяют базовому фильтру:


Количество загруженных элементов: 1


См. также:


[MetaSrv](MetaSrv.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
