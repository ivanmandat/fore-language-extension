# DictionaryTree.NodesLoaded

DictionaryTree.NodesLoaded
-


# DictionaryTree.NodesLoaded


## Синтаксис


NodesLoaded: function(sender, args, timeout);


## Параметры


sender. Источник события;


args. Информация о событии;


timeout. Промежуток времени в миллисекундах, через который вызовется событие.


## Описание


Событие NodesLoaded наступает после загрузки элементов дерева справочника.


## Пример


Для выполнения примера предполагается наличие на странице компонента [DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox.htm) с наименованием «dictionaryBox» (см. «[Пример создания компонента DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox_Example.htm)» ). Получим дерево элементов справочника и обработаем событие [NodesLoaded](DictionaryTree.NodesLoaded.htm), после чего перезагрузим дерево элементов.


// Получим область данных справочника
var area = dictionaryBox.getDataArea();
// Получим дерево элементов справочника
var tree = area.getActiveDictTree();
// Обработаем событие NodesLoaded
tree.NodesLoaded.add(function (sender, eventArgs) {
    console.log("Инициировано событие NodesLoaded");
});
// Перезагрузим дерево элементов
tree.refreshAll(true);

В результате в консоли браузера было выведено сообщение о вызове обработанного события:


Инициировано событие NodesLoaded


См. также:


[DictionaryTree](DictionaryTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
