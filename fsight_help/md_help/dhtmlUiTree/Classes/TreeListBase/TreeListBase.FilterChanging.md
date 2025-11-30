# TreeListBase.FilterChanging

TreeListBase.FilterChanging
-


# TreeListBase.FilterChanging


## Синтаксис


FilterChanging: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- String. String. Строка фильтра;


	- Column. Number. Номер сортируемого столбца;


	- Cancel. Boolean. Если установить данному свойству true
	 в обработчике события, то фильтрации не произойдет.


## Описание


Событие FilterChanging наступает
 перед изменением фильтра.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Зададим событие
Tree.FilterChanging.add( function(sender, args) {
  console.log("Событие FilterChanging:");
  console.log(args);
});
// Инициируем событие
Tree.setFilter("node", 0);
В результате выполнения примера добавлено событие FilterChanging.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
