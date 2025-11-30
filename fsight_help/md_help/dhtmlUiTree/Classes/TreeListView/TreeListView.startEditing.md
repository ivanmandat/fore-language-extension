# TreeListView.startEditing

TreeListView.startEditing
-


# TreeListView.startEditing


## Синтаксис


startEditing(nodeKey, column, autoEnding);


## Параметры


nodeKey. String. Ключ редактируемой
 вершины;


column. Number. Индекс столбца;


autoEnding. Boolean. Признак
 авто-завершения редактирования. При значении true редактирование будет
 завершено при потере фокуса или по нажатию на клавишу ENTER.


## Описание


Метод startEditing включает
 режим редактирования содержимого вершины.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Включим режим редактирования
Tree.setEnableEdit(true);
// Начнем редактирование вершины
Tree.startEditing("0", 1, false);
Закончим редактирование вершины


// Закончим редактирование вершины
Tree.stopEditing();
В результате выполнения примера было начато редактирование вершины,
 при выполнении второй строки - было закончено редактирование.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
