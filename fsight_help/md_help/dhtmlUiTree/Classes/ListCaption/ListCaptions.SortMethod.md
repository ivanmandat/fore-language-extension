# ListCaptions.SortMethod

ListCaptions.SortMethod
-


# ListCaptions.SortMethod


## Синтаксис


SortMethod: [PP.SortDirection](dhtmlCommon.chm::/Enums/SortDirection.htm);


## Описание


Свойство SortMethod определяет
 метод сортировки в столбце заголовка.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setSortMethod, а возвращается с
 помощью метода getSortMethod.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовок
caps = Tree.getCaptions();
cap = caps.getCaptions()[0];
// Получим метод сортировки
cap.getSortMethod();
В результате выполнения примера был получен метод сортировки в
 столбце заголовка.


См. также:


[ListCaption](ListCaption.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
