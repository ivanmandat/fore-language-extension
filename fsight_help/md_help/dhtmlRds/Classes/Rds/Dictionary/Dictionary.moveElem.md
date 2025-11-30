# Dictionary.moveElem

Dictionary.moveElem
-


# Dictionary.moveElem


## Синтаксис


moveElem(key: Number, targetKey: Number, relation:
 [PP.Mb.TreeRelation](dhtmlMetabase.chm::/Enums/TreeRelation.htm));


## Параметры


key. Ключ перемещаемого элемента;


targetKey. Ключ элемента,,
 относительно которого будет выполнено перемещение;


rels. Позиция относительно
 вершины с ключом targetKey после
 перемещения.


## Описание


Метод moveItems перемещает элемент
 справочника относительно указанного элемента.


## Пример


Для выполнения примера необходимо наличие на странице компонента [DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox.htm)
 с наименованием «dictionaryBox» (см. «[Пример
 создания компонента DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox_Example.htm)» ). Получим все дочерние элементы
 справочника НСИ. Затем второй элемент сделаем дочерним относительно первого,
 а третий удалим:


// Получим справочник НСИ
var source = dictionaryBox.getSource()[0];
// Получим дочерние элементы справочника
var childEls = source.getChildEls();
var keys = [];
for (var i = 0; i < childEls.length; i++) {
    keys.push(childEls[i].getKey());
};
// Сделаем второй элемент дочерним относительно первого элемента
source.moveElem(keys[1], keys[0], PP.Mb.TreeRelation.FirstChild);
// Удалим третий элемент справочника
source.removeElements(keys[2]);
// Обновим дерево элементов справочника
dictionaryBox.getDataArea().getActiveDictTree().refreshAll();
В результате выполнения примера второй дочерний элемент справочник НСИ
 стал потомком относительного первого, а третий был удалён:


![](../RdsService/RdsService_moveItems.png)


См. также:


[Dictionary](Dictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
