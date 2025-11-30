# TreeListBase.ExpansionChanged

TreeListBase.ExpansionChanged
-


# TreeListBase.ExpansionChanged


## Синтаксис


ExpansionChanged: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- Changed. {String: Boolean}. Объект типа: {ключ вершины: состояние
	 экспандера};


	- Value. Boolean. Состояние экспандера;


	- Node. String. Идентификатор вершины;


## Описание


Событие ExpansionChanged наступает
 после изменения значения экспандера.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Зададим событие
Tree.ExpansionChanged.add( function(sender, args) {
  console.log("Событие ExpansionChanged:");
  console.log(args);
});
// Инициируем событие
Tree.setNodeExpanded(0, true);
В результате выполнения примера добавлено событие ExpansionChanged.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
