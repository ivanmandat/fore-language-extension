# TreeListView.NodeMouseUp

TreeListView.NodeMouseUp
-


# TreeListView.NodeMouseUp


## Синтаксис


NodeMouseUp: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- Node. String. Ключ вершины;


	- Column. Number. Номер столбца.


## Описание


Событие NodeMouseUp наступает
 при отпускании кнопки мыши на вершине.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Зададим событие
Tree.NodeMouseUp.add( function(sender, args) {
  console.log("Событие NodeMouseUp:");
  console.log(args);
});
// Инициируем событие щелкнув в любую часть вершины
В результате выполнения примера добавлено событие NodeMouseUp.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
