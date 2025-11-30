# TreeList.getAllCollapsedKeys

TreeList.getAllCollapsedKeys
-


# TreeList.getAllCollapsedKeys


## Синтаксис


getAllCollapsedKeys();


## Описание


Метод getAllCollapsedKeys возвращает
 массив ключей, принадлежащих всем закрытым вершинам дерева и вершинам,
 не имеющим потомков.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TreeList](../../Components/TreeList/TreeList.htm) c наименованием
 «treeListSett» (см. «[Пример
 создания компонента TreeList](../../Components/TreeList/TreeList_example.htm)»). Получаем содержимое всех закрытых
 вершин и вершин без потомков:


// Раскрываем все вершины
treeListSett.colapseAll();
console.log("Содержимое закрытых вершин и вершин без потомков:");
var collapsedKeys = treeListSett.getAllCollapsedKeys()
for (var i = 0; i < collapsedKeys.length; i++) {
    console.log(treeListSett.getNodeByKey(collapsedKeys[i]).getText());
}
В результате в консоль будет выведено содержимое закрытых вершин и вершин
 без потомков:


Содержимое закрытых вершин и вершин без потомков:


South Africa


Egypt


См. также:


[TreeList](TreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
