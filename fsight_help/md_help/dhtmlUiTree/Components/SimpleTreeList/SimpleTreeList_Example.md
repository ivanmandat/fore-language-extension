# Пример создания компонента SimpleTreeList

Пример создания компонента SimpleTreeList
-


# Пример создания компонента SimpleTreeList


Для выполнения примера в теге HEAD подключите ссылки на библиотеку компонентов
 PP.js и таблицы визуальных стилей PP.css. В теге BODY добавьте элемент
 DIV с идентификатором «container».


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
  DataObject: [
    { Key: '0', Content: ['Node0', 'Node0 - Col2'] },
    { Key: '1', Content: ['Node1', 'Node1 - Col2'], Selected: true },
    { Key: '2', Content: 'Node2' },
    { Key: 'key3', Content: 'Node3' },
    { Key: '4', Content: 'Node4', Parent: '0' },
    { Key: '5', Content: 'Node5', Parent: '0' },
    { Key: '6', Content: 'Node6', Parent: '0' }
    ],
});

В результате выполнения примера был создан компонент SimpleTreeList.


См. также:


[SimpleTreeList](SimpleTreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
