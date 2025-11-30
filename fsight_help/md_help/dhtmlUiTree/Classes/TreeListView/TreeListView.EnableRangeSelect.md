# TreeListView.EnableRangeSelect

TreeListView.EnableRangeSelect
-


# TreeListView.EnableRangeSelect


## Синтаксис


EnableRangeSelect: Boolean;


## Описание


Свойство EnableRangeSelect определяет
 возможность отметки вершин диапазоном.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setEnableRangeSelect,
 а возвращается с помощью метода getEnableRangeSelect.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Выключим возможность отметки вершин диапазоном
Tree.setEnableRangeSelect(false);
В результате выполнения примера будет выключена возможность выделения
 вершин диапазоном.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
