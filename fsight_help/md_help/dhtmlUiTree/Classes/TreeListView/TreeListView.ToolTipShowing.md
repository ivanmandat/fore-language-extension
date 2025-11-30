# TreeListView.ToolTipShowing

TreeListView.ToolTipShowing
-


# TreeListView.ToolTipShowing


## Синтаксис


ToolTipShowing: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- Node. String. Ключ вершины;


	- Column. Number. Индекс столбца;


	- ToolTip. PP.Ui.ToolTip. Всплывающая подсказка.


## Описание


Событие ToolTipShowing наступает
 при отображении всплывающей подсказки.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Зададим событие
Tree.ToolTipShowing.add( function(sender, args) {
  console.log("Событие ToolTipShowing:");
  console.log(args);
});
// Инициируем событие наведя мышью на вершину для отображения всплывающей подсказки
В результате выполнения примера добавлено событие ToolTipShowing.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
