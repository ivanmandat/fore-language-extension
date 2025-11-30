# TreeListBase.checkExpansion

TreeListBase.checkExpansion
-


# TreeListBase.checkExpansion


## Синтаксис


checkExpansion(fireEvents);


## Параметры


fireEvents. Boolean. Генерировать
 событие изменения. Необязательный параметр.


## Описание


Метод checkExpansion проверяет
 корректность признака раскрытия вершин.


## Пример


Для выполнения примера в теге HEAD подключите ссылки на библиотеку компонентов
 PP.js и таблицы визуальных стилей PP.css. В теге BODY добавьте элемент
 DIV с идентификатором «container». Пример отличается от «[Примера
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)» двумя вершинами с наследниками
 и единичным режимом раскрытия вершин:


// Создадим  содержимое дерева
json = [
  { Key: '0', Content: ['Node0', 'Node0 - Col2'] },
  { Key: '1', Content: ['Node1', 'Node1 - Col2'], Selected: true },
  { Key: '2', Content: 'Node2' },
  { Key: '3', Content: 'Node3' },
    { Key: '4', Content: 'Node0 1', Parent: '0' },
    { Key: '5', Content: 'Node0 2', Parent: '0' },
    { Key: '6', Content: 'Node0 2', Parent: '0' },
    { Key: '7', Content: 'Node1 1', Parent: '1' },
    { Key: '8', Content: 'Node1 2', Parent: '1' },
    { Key: '9', Content: 'Node1 3', Parent: '1' }
]
// Создадим дерево
Tree = new PP.Ui.SimpleTreeList({
  ParentNode: 'container',
  Width: 400,
  Height: 400,
  Captions:  [{
    Content: 'First',
    Width: '40%'
    },{
    Content: 'Second',
    Width: '60%'
    }],
  ShowCheckBoxes: true,
  ShowCaptions: true,
  ShowTree: true,
  DataObject: json,
  // Зададим единичный режим раскрытия деревьев
  ExpansionMode: PP.Ui.TreeListExpansionMode.SingleExpand
});
// Зададим раскрытие обоим веткам
Tree.setNodeExpanded(0, true, false, true);
Tree.setNodeExpanded(1, true, false, true);
// Исправим некорректное отображение раскрытых деревьев
Tree.checkExpansion();

В результате выполнения примера был создан компонент SimpleTreeList
 с единичным методом раскрытия вершин.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
