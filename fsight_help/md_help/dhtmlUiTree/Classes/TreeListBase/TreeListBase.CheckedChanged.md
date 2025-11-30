# TreeListBase.CheckedChanged

TreeListBase.CheckedChanged
-


# TreeListBase.CheckedChanged


## Синтаксис


CheckedChanged: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- Type. String. Тип выделения;


	- Value. Boolean. Состояние флажка;


	- Node. String. Идентификатор вершины.


## Описание


Событие CheckedChanged наступает
 после смены состояния флажка.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Зададим событие
Tree.CheckedChanged.add( function(sender, args) {
  console.log("Событие CheckedChanged:");
  console.log(args);
});
// Инициируем событие
Tree.setNodeChecked(1, true);
В результате выполнения примера добавлено событие CheckedChanged.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
