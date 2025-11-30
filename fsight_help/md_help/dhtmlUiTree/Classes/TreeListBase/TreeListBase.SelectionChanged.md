# TreeListBase.SelectionChanged

TreeListBase.SelectionChanged
-


# TreeListBase.SelectionChanged


## Синтаксис


SelectionChanged: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- Type. PP.Ui.TreeListSelectionMode. Тип выделения;


	- Value. Boolean. Состояние выделения;


	- Node. String. Ключ вершины;


	- Changed. {String: Boolean}. Объект вида {ключ вершины: состояние
	 выделения}.


## Описание


Событие SelectionChanged наступает
 после изменения выделения.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Зададим событие
Tree.SelectionChanged.add( function(sender, args) {
  console.log("Событие SelectionChanged:");
  console.log(args);
});
// Инициируем событие
Tree.setNodeSelected(0, true);
В результате выполнения примера добавлено событие SelectionChanged.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
