# TreeListView.RowSelect

TreeListView.RowSelect
-


# TreeListView.RowSelect


## Синтаксис


RowSelect: Boolean;


## Описание


Свойство RowSelect определяет
 режим сплошной отметки строки.


## Комментарии


При включенном режиме, при отметке вершины, визуально будет отмечена
 вся строка. Значение по умолчанию - false.


Значение свойства устанавливается из JSON и с помощью метода setRowSelect,
 а возвращается с помощью метода getRowSelect.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Зададим режим выделения строки целиком
Tree.setRowSelect(true);
В результате выполнения примера был включен режим выделения строки целиком.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
