# TreeListView.ScrollBarH

TreeListView.ScrollBarH
-


# TreeListView.ScrollBarH


## Синтаксис


ScrollBarH : [PP.Ui.ScrollBar](dhtmlUi.chm::/Classes/ScrollBar/ScrollBar.htm);


## Описание


Свойство ScrollBarH определяет
 горизонтальную полосу прокрутки.


## Комментарии


Значение свойства устанавливается из JSON, а возвращается с помощью
 метода getShowCaptions.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Уменьшим размер дерева для отображения полосы прокрутки
Tree.setHeight(150);
Tree.setNodeExpanded(0, true);
// Получим полосу прокрутки
console.log(Tree.getScrollBarH());
В результате выполнения примера в консоль был получен объект полосы
 прокрутки.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
