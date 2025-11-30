# TreeListView.NodeMouseDown

TreeListView.NodeMouseDown
-


# TreeListView.NodeMouseDown


## Синтаксис


NodeMouseDown: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- Node. String. Ключ вершины;


	- Column. Number. Номер столбца;


	- Cancel. Boolean. Если установить данному свойству true
	 в обработчике события, то действие будет отменено;


	- AltKey. Boolean. Признак нажатия клавиши ALT;


	- CtrlKey. Boolean. Признак нажатия клавиши CTRL;


	- ShiftKey. Boolean. Признак нажатия клавиши SHIFT;


	- Type. String. Элемент вершины, по которому был совершен щелчок.


## Описание


Событие NodeMouseDown наступает
 при нажатии кнопки мыши на вершине.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Зададим событие
Tree.NodeMouseDown.add( function(sender, args) {
  console.log("Событие NodeMouseDown:");
  console.log(args);
});
// Инициируем событие щелкнув в любую часть вершины
В результате выполнения примера добавлено событие NodeMouseDown.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
