# TreeListView.NodeDefaultStyle

TreeListView.NodeDefaultStyle
-


# TreeListView.NodeDefaultStyle


## Синтаксис


NodeDefaultStyle: PP.Style || Object || String;


## Описание


Свойство NodeDefaultStyle определяет
 стиль вершин по умолчанию.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setNodeDefaultStyle,
 а возвращается с помощью метода getNodeDefaultStyle.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим стиль вершин по умолчанию
Tree.getNodeDefaultStyle();
// -> PP.Style {_ColumnIndex: null, _RowIndex: null, _Background: null, _Border: null, _Shadow: null…}
В результате выполнения примера был получен стиль вершин по умолчанию.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
