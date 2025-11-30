# TreeNodes.getItemByKey

TreeNodes.getItemByKey
-


# TreeNodes.getItemByKey


## Синтаксис


getItemByKey (key)


## Параметры


key. Ключ вершины.


## Описание


Метод getItemByKey возвращает вершину по ключу.


## Пример


Для выполнения примера предполагается наличие на странице компонента [TreeList](../../Components/TreeList/TreeList.htm) с наименованием «treeList» (см. «[Пример создания компонента TreeList](../../Components/TreeList/TreeList_example.htm)»).Изменим текст для вершины с ключом «Last»:


//возвращаем вершину с ключом «Last», которая находится на третьем уровне иерархии:


var node = treeList.getNodes().getItem(0).getNodes().getItem(0).getNodes().getItemByKey("Last")


//в названии вершины будет отображаться ее ключ:


node.setText(node.getKey())


После выполнения примера для вершины с ключом «Last» будет установлено название «Last».


См. также:


[TreeNodes](TreeNodes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
