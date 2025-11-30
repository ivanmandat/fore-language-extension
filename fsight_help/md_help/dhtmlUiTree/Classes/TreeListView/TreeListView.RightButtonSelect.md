# TreeListView.RightButtonSelect

TreeListView.RightButtonSelect
-


# TreeListView.RightButtonSelect


## Синтаксис


RightButtonSelect: Boolean;


## Описание


Свойство RightButtonSelect определяет
 возможность выделения вершин правой кнопкой мыши.


## Комментарии


По умолчанию содержит значение false.


Значение свойства устанавливается из JSON и с помощью метода setRightButtonSelect,
 а возвращается с помощью метода getRightButtonSelect.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Зададим возможность выделения вершин правой кнопкой
Tree.setRightButtonSelect(true);
В результате выполнения примера была задана возможность выделения вершин
 правой кнопкой.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
