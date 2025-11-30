# TreeListBase.ExpansionChanging

TreeListBase.ExpansionChanging
-


# TreeListBase.ExpansionChanging


## Синтаксис


ExpansionChanging: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- Value. Boolean. Состояние экспандера;


	- Node. String. Идентификатор вершины;


	- Cancel. Boolean. Если установить данному свойству true
	 в обработчике события, то изменения экспандера не произойдет.


## Описание


Событие ExpansionChanging наступает
 перед изменением значения экспандера.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Зададим событие
Tree.ExpansionChanging.add( function(sender, args) {
  console.log("Событие ExpansionChanging:");
  console.log(args);
});
// Инициируем событие
Tree.setNodeExpanded(0, true);
В результате выполнения примера добавлено событие ExpansionChanging.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
