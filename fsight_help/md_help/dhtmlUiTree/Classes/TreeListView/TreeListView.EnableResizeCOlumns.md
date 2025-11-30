# TreeListView.EnableResizeColumns

TreeListView.EnableResizeColumns
-


# TreeListView.EnableResizeColumns


## Синтаксис


EnableResizeColumns: Boolean;


## Описание


Свойство EnableResizeColumns
 определяет возможность изменять ширину столбцов.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setEnableResizeColumns,
 а возвращается с помощью метода getEnableResizeColumns.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Выключим возможность изменять ширину столбцов
Tree.setEnableResizeColumns(false);
В результате выполнения примера была выключена возможность изменять
 ширину столбцов.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
