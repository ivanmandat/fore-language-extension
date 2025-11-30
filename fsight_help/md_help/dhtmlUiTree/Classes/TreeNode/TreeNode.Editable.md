# TreeNode.Editable

TreeNode.Editable
-


# TreeNode.Editable


## Синтаксис


Editable: Boolean


## Описание


Свойство Editable определяет возможность редактирования вершины.


## Комментарии


Если для свойства установлено значение true, название вершины можно редактировать. По умолчанию установлено значение false.


Режим редактирования активируется при двойном щелчке мыши по вершине.


## Пример


Для выполнения примера создайте компонент [TreeList](../../Components/TreeList/TreeList.htm) с наименованием «treeList», как показано в описании конструктора [TreeNode](Constructor_TreeNode.htm). Включим режим редактирования для первой вершины и добавим обработчики событий


var node = treeList.getNodes().getItem(0);


node.setEditable(true);


treeList.BeforeEditNode.add(function (sender, args) { console.log("до: " + node.getText())});


treeList.AfterEditNode.add(function (sender, args) { console.log("после: " + node.getText())});


После выполнения примера перед редактированием названия первой вершины (при двойном щелчке мыши по вершине) в консоль браузера будет выведено сообщение с текущим названием. После редактирования (при нажатии на клавишу ENTER) - сообщение с новым названием.


См. также:


[TreeNode](TreeNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
