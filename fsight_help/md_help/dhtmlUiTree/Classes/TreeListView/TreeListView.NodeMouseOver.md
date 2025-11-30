# TreeListView.NodeMouseOver

TreeListView.NodeMouseOver
-


# TreeListView.NodeMouseOver


## Синтаксис


NodeMouseOver: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- Node. String. Ключ вершины;


## Описание


Событие NodeMouseOver наступает
 при наведении курсора мыши на вершину.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Зададим событие
Tree.NodeMouseOver.add( function(sender, args) {
  console.log("Событие NodeMouseOver:");
  console.log(args);
});
В результате выполнения примера добавлено событие NodeMouseOver.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
