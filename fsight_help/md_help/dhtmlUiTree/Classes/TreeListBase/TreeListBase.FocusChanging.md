# TreeListBase.FocusChanging

TreeListBase.FocusChanging
-


# TreeListBase.FocusChanging


## Синтаксис


FocusChanging: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- Node. String. Ключ вершины, на которую ставится фокус;


	- OldNode. Number. Ключ вершины, на которой до этого был фокус;


	- Cancel. Boolean. Если установить данному свойству true
	 в обработчике события, то изменения фокуса не произойдет.


## Описание


Событие FocusChanging наступает
 перед изменением фокуса.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Зададим событие
Tree.FocusChanging.add( function(sender, args) {
  console.log("Событие FocusChanging:");
  console.log(args);
});
// Инициируем событие
Tree.setNodeFocused(0, true);
В результате выполнения примера добавлено событие FocusChanging.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
