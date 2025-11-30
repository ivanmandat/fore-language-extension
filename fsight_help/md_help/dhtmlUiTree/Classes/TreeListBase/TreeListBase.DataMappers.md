# TreeListBase.DataMappers

TreeListBase.DataMappers
-


# TreeListBase.DataMappers


## Синтаксис


DataMappers: Object;


## Описание


Свойство DataMappers определяет
 параметры сопоставления данных.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setDataMappers,
 а возвращается с помощью метода getDataMappers.


Сопоставления данных вершин соответствуют их свойствам, например сопоставление
 данных 'Content' соответствует свойству [TreeListBase.NodeContent](TreeListBase.NodeContent.htm).


Перечень возможных сопоставлений: 'Key', 'Index', 'Parent', 'Children',
 'ChildrenCount', 'ChildrenSelected', 'Selected', 'Expanded', 'Checked',
 'FixedSelected', 'FixedExpanded', 'FixedChecked', 'FixedFocused', 'ImageIndex',
 'Editable', 'Content', 'Controls', 'Class', 'Style', 'Visible', 'ChildrenVisible',
 'Data'.


## Пример


Для выполнения примера в теге HEAD подключите ссылки на библиотеку компонентов
 PP.js и таблицы визуальных стилей PP.css. В теге BODY добавьте элемент
 DIV с идентификатором «container». Пример отличается от «[Примера
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)» заданием исходных данных: вместо
 параметра «Content» используется пользовательский параметр «Con». Для
 верного отображения дерева необходимо задать сопоставление данных:


// Создадим  содержимое дерева
json = [
  { Key: '0', Con: ['Node0', 'Node0 - Col2'] },
  { Key: '1', Con: ['Node1', 'Node1 - Col2'], Selected: true },
  { Key: '2', Con: 'Node2' },
  { Key: '3', Con: 'Node3' },
    { Key: '4', Con: 'Node4', Parent: '0' },
    { Key: '5', Con: 'Node5', Parent: '0' },
    { Key: '6', Con: 'Node6', Parent: '0' }
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
  // Зададим сопоставление данных для параметра Content
  DataMappers: { Content: 'Con'},
});

В результате выполнения примера был создан компонент SimpleTreeList.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
