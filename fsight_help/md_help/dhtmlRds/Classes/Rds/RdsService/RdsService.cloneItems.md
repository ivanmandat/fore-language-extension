# RdsService.cloneItems

RdsService.cloneItems
-


# RdsService.cloneItems


## Синтаксис


cloneItems(dict: [PP.Rds.Dictionary](../Dictionary/Dictionary.htm), parentKey: String, sourceKeys: Array, callback: function|PP.Delegate);


## Параметры


dict. Справочник НСИ, копии элементов которого требуется сделать;


parentKey. Ключ элемента справочника,который станет родителем для скопированных элементов;


sourceKeys. Ключи копируемых элементов.


callback. Возвратная функция.


## Описание


Метод cloneItems создаёт копии элементов справочника.


## Пример


Для выполнения примера необходимо наличие на странице компонента [DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox.htm) с наименованием «dictionaryBox» (см. «[Пример создания компонента DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox_Example.htm)» ). Сделаем копии всех дочерних элементов справочника НСИ, в качестве родителя установим первый элемент, обработаем событие [ItemOperationDone](RdsService.ItemOperationDone.htm):


// Получим справочник НСИ
var source = dictionaryBox.getSource()[0];
// Получим сервис для работы со справочником
var service = source.getPPService();
// Обработаем событие ItemOperationDone
service.ItemOperationDone.add(function (sender, args) {
    console.log("Родительский элемент: %s", args.ParentKey);
    console.log("Тип операции: %s", args.Operation);
    if (args.Keys) {
        console.log("Ключи элементов: %s", args.Keys.toString());
    }
})
// Получим дочерние элементы справочника
var childEls = source.getChildEls();
var keys = [];
for (var i = 0; i < childEls.length; i++) {
    keys.push(childEls[i].getKey());
};
// Сделаем копии элементов
service.cloneItems(source, keys[0], keys, function () {
    var keysToLoad = [];
    keysToLoad.push({
        key: source._rootKey
    });
    service.getToKeys(source, keysToLoad);
    // Обновим дерево элементов справочника
    dictionaryBox.getDataArea().getActiveDictTree().refreshAll();
});

В результате выполнения примера были созданы копии всех дочерних элементов справочника НСИ, родителем которых стал первый дочерний элемент:


![](RdsService_cloneItems.png)


После срабатывания события [ItemOperationDone](RdsService.ItemOperationDone.htm) в консоли браузера был выведен ключ родительского элемента, тип произведённой операции и ключи копий элементов:


Родительский элемент: 2102


Тип операции: Insert


Ключи элементов: 2114,2115,2116


См. также:


[RdsService](RdsService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
