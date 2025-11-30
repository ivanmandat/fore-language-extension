# TreeListBase.FilterChanged

TreeListBase.FilterChanged
-


# TreeListBase.FilterChanged


## Синтаксис


FilterChanged: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- String. String. Строка фильтра;


	- Column. Number. Номер сортируемого столбца.


## Описание


Событие FilterChanged наступает
 после изменения фильтра.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Зададим событие
Tree.FilterChanged.add( function(sender, args) {
  console.log("Событие FilterChanged:");
  console.log(args);
});
// Инициируем событие
Tree.setFilter("node", 0);
В результате выполнения примера добавлено событие FilterChanged.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
