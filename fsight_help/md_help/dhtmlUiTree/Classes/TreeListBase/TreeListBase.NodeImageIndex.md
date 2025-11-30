# TreeListBase.NodeImageIndex

TreeListBase.NodeImageIndex
-


# TreeListBase.NodeImageIndex


## Синтаксис


NodeImageIndex: Array of Number;


## Описание


Свойство NodeImageIndex определяет
 индекс пиктограммы указанной вершины.


## Комментарии


Значение свойства устанавливается с помощью метода setNodeImageIndex(nodeKey,
 value), а возвращается с помощью метода getNodeImageIndex(nodeKey).


Параметры:


nodeKey. String. Идентификатор
 вершины;


value. Number. Значение.


## Пример


Для выполнения примера в теге HEAD подключите ссылки на библиотеку компонентов
 PP.js и таблицы визуальных стилей PP.css. В теге BODY добавьте элемент
 DIV с идентификатором «container». Пример отличается от «[Примера
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)» подключенным списком изображений:


// Создадим  содержимое дерева
json = [
  { Key: '0', Content: ['Node0', 'Node0 - Col2'], ImageIndex: 4},
  { Key: '1', Content: ['Node1', 'Node1 - Col2'], Selected: true },
  { Key: '2', Content: 'Node2' },
  { Key: '3', Content: 'Node3' },
    { Key: '4', Content: 'Node4', Parent: '0' },
    { Key: '5', Content: 'Node5', Parent: '0' },
    { Key: '6', Content: 'Node6', Parent: '0' }
]
// Создадим дерево
Tree = new PP.Ui.SimpleTreeList({
  ParentNode: container,
  Width: 400,
  Height: 400,
  Captions:  [{
    Content: 'Frst',
    Width: '40%'
    },{
    Content: 'Second',
    Width: '60%'
    }],
  ShowCheckBoxes: true,
  ShowCaptions: true,
  ShowTree: true,
  DataObject: json,
  // Зададим список пиктограмм
  ImageList: imageList = new PP.ImageList({
    Source: '../ListImages.gif',
    IconHeight: 20,
    IconWidth: 20
  }),
});
// Изменим пиктограмму второй вершины
Tree.setNodeImageIndex(1, [1,2]);

В результате выполнения примера будет создан компонент SimpleTreeList
 с использованием изображений. Первая вершина имеет пиктограмму с индексом
 4. Вторая вершина имеет пиктограмму из второго ряда, с индексом 2.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
