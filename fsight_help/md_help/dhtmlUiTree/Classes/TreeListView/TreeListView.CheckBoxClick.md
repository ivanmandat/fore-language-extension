# TreeListView.CheckBoxClick

TreeListView.CheckBoxClick
-


# TreeListView.CheckBoxClick


## Синтаксис


CheckBoxClick: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- Node. String. Ключ вершины, у которой был изменен флажок;


	- Cancel. Boolean. Если установить данному свойству true
	 в обработчике события, то действие будет отменено.


## Описание


Событие CheckBoxClick наступает
 перед нажатием на флажок.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Зададим событие
Tree.CheckBoxClick.add( function(sender, args) {
  console.log("Событие CheckBoxClick:");
  console.log(args);
});
// Инициируем событие нажатием на флажок
В результате выполнения примера добавлено событие CheckBoxClick.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
