# TreeListBase.SelectionChanging

TreeListBase.SelectionChanging
-


# TreeListBase.SelectionChanging


## Синтаксис


SelectionChanging: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- Type. PP.Ui.TreeListSelectionMode. Тип выделения;


	- Value. Boolean. Состояние выделения;


	- Node. String. Ключ вершины;


	- Cancel. Boolean. Если установить данному свойству true
	 в обработчике события, то изменения выделения не произойдет.


## Описание


Событие SelectionChanging наступает
 перед изменением выделения.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Зададим событие
Tree.SelectionChanging.add( function(sender, args) {
  console.log("Событие SelectionChanging:");
  console.log(args);
});
// Инициируем событие
Tree.setNodeSelected(0, true);
В результате выполнения примера добавлено событие SelectionChanging.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
