# TreeNode.getVisualPosition

TreeNode.getVisualPosition
-


# TreeNode.getVisualPosition


## Синтаксис


getVisualPosition();


## Описание


Метод getVisualPosition возвращает
 номер позиции вершины в списке видимых элементов.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TreeList](../../Components/TreeList/TreeList.htm) c наименованием
 «treeList» (см. «[Пример
 создания компонента TreeList](../../Components/TreeList/TreeList_example.htm)»). Получаем номер позиции в списке видимых
 элементов вершины с содержимым «Africa»:


// Получаем вершину с содержимым «Africa»
var nodeAfrica = treeList.findText("Africa");
// Получаем номер позиции вершины с содержимым «Africa» в списке видимых элементов
console.log("Номер позиции вершины с содержимым «Africa» в списке видимых элементов: " + nodeAfrica.getVisualPosition());
В результате в консоль будет выведен номер позиции вершины с содержимым
 «Africa» в списке видимых элементов:


Номер позиции вершины с содержимым «Africa» в списке
 видимых элементов: 1


См. также:


[TreeNode](TreeNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
