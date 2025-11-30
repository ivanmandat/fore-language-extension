# RdsService.beginBatch

RdsService.beginBatch
-


# RdsService.beginBatch


## Синтаксис


beginBatch(bIgnoreError: Boolean);


## Параметры


bIgnoreError. Признак игнорирования ошибок при пакетном режиме отправки запросов серверу. Если параметр равен значению true, то ошибки передачи запросов будут игнорироваться, иначе - не будут.


## Описание


Метод beginBatch включает пакетный режим отправки запросов серверу.


## Комментарии


После вызова метода запросы будут отправляться не сразу, а после выполнения метода [RdsService.endBatch](RdsService.endBatch.htm).


## Пример


Для выполнения примера необходимо наличие на странице компонента [DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox.htm) с наименованием «dictionaryBox» (см. «[Пример создания компонента DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox_Example.htm)» ). Загрузим все элементы справочника, определим их количество, наименование и код:


// Получим справочник НСИ
var source = dictionaryBox.getSource()[0];
// Получим сервис для работы со справочником
var service = source.getPPService();
var childs; // Дочерние элементы справочника относительно корня
// Включим пакетный режим отправки запросов
if (!service.getIsBatchMode()) {
    service.beginBatch();
    // Возвратная функция для метода getChildEls
    var onChildLoaded = function (sender, args) {
        var response = JSON.parse(args.ResponseText);
        source.setTotalsCount(response.GetRdsElementsResult.totalCount, false);
    };
    // Возвратная функция для метода endBatch
    var onElemsLoaded = function (sender, args) {
        console.log("Общее количество элементов в справочнике: %s",
            source.getTotalsCount(false));
        var response = JSON.parse(args.ResponseText);
        childs = response.BatchExecResult.its.it[0].GetRdsElementsResult.els.e;
        for (var i = 0; i < childs.length; i++) {
            console.log("Наименование дочернего элемента: %s, код: %s", childs[i].n, childs[i].k);
            var elemement = source.getElem(childs[i].k);
            elemement.parseFromMd(childs[i], true);
        };
        source.setChildEls("", childs || [], false);
        service.ChildLoaded.fire(this, {
            Dictionary: source,
            ParentKey: ""
        });
    };
    var childs = service.getChildEls(source, "", PP.Delegate(onChildLoaded, this));
    console.log(childs);
    // Выключим пакетный режим отправки запросов
    service.endBatch(true, PP.Delegate(onElemsLoaded, this));
};

В результате выполнения примера были загружены все элементы справочника. В консоли браузера было выведено их общее количество, наименование и код:


Общее количество элементов в справочнике: 4


Наименование дочернего элемента: Декада, код: 2083


Наименование дочернего элемента: Человеко-день, код: 2084


Наименование дочернего элемента: Секунда, код: 2085


См. также:


[RdsService](RdsService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
