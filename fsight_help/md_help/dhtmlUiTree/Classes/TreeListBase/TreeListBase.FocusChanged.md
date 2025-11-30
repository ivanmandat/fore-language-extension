# TreeListBase.FocusChanged

TreeListBase.FocusChanged
-


# TreeListBase.FocusChanged


## Синтаксис


FocusChanged: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- Node. String. Ключ вершины, на которую перешел фокус;


	- OldNode. Number. Ключ вершины, на которой до этого был фокус.


## Описание


Событие FocusChanged наступает
 после изменения фокуса.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Зададим событие
Tree.FocusChanged.add( function(sender, args) {
  console.log("Событие FocusChanged:");
  console.log(args);
});
// Инициируем событие
Tree.setNodeFocused(0, true);
В результате выполнения примера добавлено событие FocusChanged.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
