# RdsService.moveItems

RdsService.moveItems
-


# RdsService.moveItems


## Синтаксис


moveItems(dict: [PP.Rds.Dictionary](../Dictionary/Dictionary.htm),
 moveElKeys: Array, relElKeys: Array, rels: [PP.Mb.TreeRelation](dhtmlMetabase.chm::/Enums/TreeRelation.htm),
 callback: function|PP.Delegate);


## Параметры


dict. Справочник НСИ;


moveElKeys. Массив ключей перемещаемых
 элементов;


relElKeys. Массив ключей элементов,
 относительно которых будет выполнено перемещение;


rels. Позиция относительно
 элементов с ключом relElKeys после перемещения.


## Описание


Метод moveItems перемещает элементы
 справочника относительно указанного элемента.


## Пример


Для выполнения примера необходимо наличие на странице компонента [DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox.htm)
 с наименованием «dictionaryBox» (см. «[Пример
 создания компонента DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox_Example.htm)» ). Получим все дочерние элементы
 справочника НСИ. Затем второй элемент сделаем дочерним относительно первого,
 а третий удалим:


// Получим справочник НСИ
var source = dictionaryBox.getSource()[0];
// Получим сервис для работы со справочником
var service = source.getPPService();
// Получим дочерние элементы справочника
var childEls = source.getChildEls();
var keys = [];
for (var i = 0; i < childEls.length; i++) {
    keys.push(childEls[i].getKey());
};
// Сделаем второй элемент дочерним относительно первого элемента
if (!source.isPlain()) {
    service.moveItems(source, keys[1], keys[0], PP.Mb.TreeRelation.FirstChild);
} else {
    console.log("Элементы справочника не имеют иерархии.");
};
// Удалим третий элемент
service.removeItems(source, keys[2]);
// Обновим дерево элементов справочника
dictionaryBox.getDataArea().getActiveDictTree().refreshAll(true);
В результате выполнения примера второй дочерний элемент справочник НСИ
 стал потомком относительного первого, а третий был удалён:


![](RdsService_moveItems.png)


См. также:


[RdsService](RdsService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
