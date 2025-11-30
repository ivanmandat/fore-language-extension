# TreeListView.EnableAutoScroll

TreeListView.EnableAutoScroll
-


# TreeListView.EnableAutoScroll


## Синтаксис


EnableAutoScroll: Boolean;


## Описание


Свойство EnableAutoScroll определяет
 режим автоматической прокрутки.


## Комментарии


Автоматическая прокрутка начинается при выходе отметки или перетаскиваемой
 вершины за пределы компонента.


Значение свойства устанавливается из JSON и с помощью метода setEnableAutoScroll,
 а возвращается с помощью метода getEnableAutoScroll.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Зададим режим автоматической прокрутки
Tree.setEnableAutoScroll(true);
// Уменьшим размеры компонента и раскроем первую вершину
Tree.setHeight(100);
Tree.setNodeExpanded(0, true);
// Выделим крайнюю вершину и изменим выделение -> будет произведена автоматическая прокрутка
В результате выполнения примера у дерева был включен режим автоматической
 прокрутки.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
