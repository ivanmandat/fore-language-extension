# TreeListBase.Found

TreeListBase.Found
-


# TreeListBase.Found


## Синтаксис


Found: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- Node. String. Ключ найденной вершины;


	- String. String. Строка фильтра;


	- Column. Number. Номер сортируемого столбца;


	- SetFocus. Boolean. Фокусировать найденную вершину.


## Описание


Событие Found наступает после
 применения поиска.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Зададим событие
Tree.Found.add( function(sender, args) {
  console.log("Событие Found:");
  console.log(args);
});
// Инициируем событие
Tree.find("node", 0, true);
В результате выполнения примера добавлено событие Found.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
