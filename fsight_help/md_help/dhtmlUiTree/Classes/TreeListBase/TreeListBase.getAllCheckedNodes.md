# TreeListBase.getAllCheckedNodes

TreeListBase.getAllCheckedNodes
-


# TreeListBase.getAllCheckedNodes


## Синтаксис


getAllCheckedNodes(value);


## Параметры


value. Boolean. Признак отметки
 флажка искомых вершин. При значении true метод вернет вершины с отмеченным
 флажком, при значении false метод вернет вершины с неотмеченным флажком.


## Описание


Метод getAllCheckedNodes возвращает
 массив вершин, в зависимости от статуса флажка.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Отметим флажок вершин
Tree.setNodeChecked(1, true);
Tree.setNodeChecked(2, true);
// Получим вершины с отмеченным флажком
Tree.getAllCheckedNodes();
// -> ["1", "2"]
В результате выполнения примера будет получен массив вершин с отмеченным
 флажком.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
