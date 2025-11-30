# TreeNode.removeClass

TreeNode.removeClass
-


# TreeNode.removeClass


## Синтаксис


removeClass(className: String);


## Параметры


className. Имя удаляемого css-класса.


## Описание


Метод removeClass удаляет css-класс
 у вершины.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TreeList](../../Components/TreeList/TreeList.htm) c наименованием
 «treeList» (см. «[Пример
 создания компонента TreeList](../../Components/TreeList/TreeList_example.htm)»). Добавляем два css-класса к вершине
 с содержимым «Africa» и получаем новый класс этой вершины:


// Получаем вершину с содержимым «Africa»
var nodeAfrica = treeList.findText("Africa");
// Добавляем css-класс к вершине с содержимым «Africa»
nodeAfrica.setClass("newClass");
// Добавляем css-класс к вершине с содержимым «Africa»
nodeAfrica.addClass("anotherClass");
// Получаем полное имя css-класса вершине с содержимым «Africa»
console.log("Полное имя css-класса вершине с содержимым «Africa»: " + nodeAfrica.getDomNode().className);
В результате в консоль будет выведено имя css-класса вершины с содержимым
 «Africa»:


Полное имя css-класса вершины с содержимым «Africa»:
 selectable newClass anotherClass PPC


Удаляем css-класс вершины с содержимым «Africa», который добавили ранее
 и получаем полное имя css-класса:


// Удаляем css-класс, который добавили ранее
nodeAfrica.removeClass("anotherClass");
// Получаем полное название css-класса вершины с содержимым «Africa»
console.log("Полное название css-класса вершине с содержимым «Africa»: " + nodeAfrica.getDomNode().className);
В результате в консоль будет выведено имя css-класса вершины с содержимым
 «Africa»:


Полное имя css-класса вершины с содержимым «Africa»:
 selectable newClass PPC


См. также:


[TreeNode](TreeNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
