# ListCaptions.EnableSort

ListCaptions.EnableSort
-


# ListCaptions.EnableSort


## Синтаксис


EnableSort: Boolean;


## Описание


Свойство EnableSort определяет
 признак возможности сортировки столбцов.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setEnableSort, а возвращается с
 помощью метода getEnableSort.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовки дерева
caps = Tree.getCaptions();
// Отключим возможность сортировки столбцов
caps.setEnableSort(false);
В результате выполнения примера была отключена возможность сортировки.


См. также:


[ListCaptions](ListCaptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
