# TreeListView.cancelEditing

TreeListView.cancelEditing
-


# TreeListView.cancelEditing


## Синтаксис


cancelEditing();


## Описание


Метод cancelEditing отменяет
 текущее редактирование.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Включим режим редактирования
Tree.setEnableEdit(true);
// Начнем редактирование ячейки
Tree.startEditing("1", 1, false);
// Отменим текущее редактирование
Tree.cancelEditing();
В результате выполнения примера будет отменено текущее редактирование.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
