# TreeNode.ChildrenCount

TreeNode.ChildrenCount
-


# TreeNode.ChildrenCount


## Синтаксис


ChildrenCount: Number


## Описание


Свойство ChildrenCount определяет
 количество потомков вершины дерева.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setChildrenCount,
 а возвращается с помощью метода getChildrenCount.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TreeList](../../Components/TreeList/TreeList.htm) c наименованием
 «treeList» (см. «[Пример
 создания компонента TreeList](../../Components/TreeList/TreeList_example.htm)»). Определяем количество потомков у вершины
 с содержимым «Africa»:


// Получаем количество дочерних вершин у вершины с содержимым «Africa»
console.log("Количество потомков вершины с содержимым «Africa»: " + treeList.findText("Africa").getChildrenCount());
В результате в консоль будет выведено количество потомков у вершины:


Количество потомков у вершины с содержимым «Africa»:
 3


См. также:


[TreeNode](TreeNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
