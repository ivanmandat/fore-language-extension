# TreeNode.HasChild

TreeNode.HasChild
-


# TreeNode.HasChild


## Синтаксис


HasChild: Boolean


## Описание


Свойство HasChild определяет
 наличие потомков у вершины дерева.


## Комментарии


Допустимые значения:


	- true. У дерева есть
	 потомки;


	- false. У дерева потомков
	 нет.


Значение свойства устанавливается из JSON и с помощью метода setHasChild,
 а возвращается с помощью метода getHasChild.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TreeList](../../Components/TreeList/TreeList.htm) c наименованием
 «treeList» (см. «[Пример
 создания компонента TreeList](../../Components/TreeList/TreeList_example.htm)»). Определяем наличие потомков у вершины
 с содержимым «Africa»:


// Получаем вершину с содержимым «Africa»
var nodeAfrica = treeList.findText("Africa");
// Определяем наличие потомков у вершины с содержимым «Africa»
if (nodeAfrica.getHasChild()) {
    console.log("Вершина с содержимым «Africa» имеет потомков");
} else {
    console.log("У вершины с содержимым «Africa» потомков нет");
}
В результате в консоль будет выведен результат проверки вершины:


Вершина с содержимым «Africa» имеет потомков


См. также:


[TreeNode](TreeNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
