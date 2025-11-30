# TreeListBase.CheckedChanging

TreeListBase.CheckedChanging
-


# TreeListBase.CheckedChanging


## Синтаксис


CheckedChanging: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- Type. String. Тип выделения;


	- Value. Boolean. Состояние флажка;


	- Node. String. Идентификатор вершины;


	- Cancel. Boolean. Если установить данному свойству true
	 в обработчике события, то изменения флажка не произойдет.


## Описание


Событие CheckedChanging наступает
 перед сменой состояния флажка.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Зададим событие
Tree.CheckedChanging.add( function(sender, args) {
  console.log("Событие CheckedChanging:");
  console.log(args);
});
// Инициируем событие
Tree.setNodeChecked(1, true);
В результате выполнения примера добавлено событие CheckedChanging.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
