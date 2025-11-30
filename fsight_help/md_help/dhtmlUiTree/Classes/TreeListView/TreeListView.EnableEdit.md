# TreeListView.EnableEdit

TreeListView.EnableEdit
-


# TreeListView.EnableEdit


## Синтаксис


EnableEdit: Boolean;


## Описание


Свойство EnableEdit определяет
 режим редактирования ячеек.


## Комментарии


Режим редактирования включается щелчком мыши по ячейке.


Значение свойства устанавливается из JSON и с помощью метода setEnableEdit,
 а возвращается с помощью метода getEnableEdit.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Зададим режим редактирования ячеек
Tree.setEnableEdit(true)
В результате выполнения примера стало доступно редактирование ячеек.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
