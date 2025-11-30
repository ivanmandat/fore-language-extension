# TreeNode.getLevel

TreeNode.getLevel
-


# TreeNode.getLevel


## Синтаксис


getLevel();


## Описание


Метод getLevel возвращает номер
 уровня, на котором находится вершина в дереве.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TreeList](../../Components/TreeList/TreeList.htm) c наименованием
 «treeList» (см. «[Пример
 создания компонента TreeList](../../Components/TreeList/TreeList_example.htm)»). Получаем номер уровня, на котором
 находится вершина с содержимым «Africa»:


// Получаем номер уровня вершины с содержимым «Africa»
console.log("Номер уровня, на котором находится вершина с содержимым «Africa»: " + treeList.findText("Africa").getLevel());
Номер уровня, на котором находится вершина с содержимым
 «Africa»: 1


См. также:


[TreeNode](TreeNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
