# TreeListView.NodeMouseOut

TreeListView.NodeMouseOut
-


# TreeListView.NodeMouseOut


## Синтаксис


NodeMouseOut: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- Node. String. Ключ вершины.


## Описание


Событие NodeMouseOut наступает
 при уходе курсора мыши с вершины.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Зададим событие
Tree.NodeMouseOut.add( function(sender, args) {
  console.log("Событие NodeMouseOut:");
  console.log(args);
});
// Инициируем событие наведя на вершину
В результате выполнения примера добавлено событие NodeMouseOut.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
