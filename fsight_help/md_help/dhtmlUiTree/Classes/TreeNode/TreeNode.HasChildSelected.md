# TreeNode.HasChildSelected

TreeNode.HasChildSelected
-


# TreeNode.HasChildSelected


## Синтаксис


HasChildSelected: Boolean


## Описание


Свойство HasChildSelected определяет
 наличие выделенных потомков у вершины дерева.


## Комментарии


Допустимые значения:


	- true. У дерева есть
	 выделенные потомки;


	- false. У дерева выделенных
	 потомков нет.


Значение свойства устанавливается из JSON и с помощью метода setHasChildSelected,
 а возвращается с помощью метода getHasChildSelected.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TreeList](../../Components/TreeList/TreeList.htm) c наименованием
 «treeList» (см. «[Пример
 создания компонента TreeList](../../Components/TreeList/TreeList_example.htm)»). Определяем наличие выделенных потомков
 у вершины с содержимым «Africa»


// Определяем наличие выделенных потомков у вершины с содержимым «Africa»
if (treeList.findText("Africa").getHasChildSelected()) {
    console.log("Вершина с содержимым «Africa» имеет выделенных потомков");
} else {
    console.log("У элемента с содержимым «Africa» выделенных потомков нет");
}
В результате в консоль будет выведен результат проверки вершины:


У элемента с содержимым «Africa» выделенных потомков
 нет


См. также:


[TreeNode](TreeNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
