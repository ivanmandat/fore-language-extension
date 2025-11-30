# ListCaptions.remove

ListCaptions.remove
-


# ListCaptions.remove


## Синтаксис


remove(item);


## Параметры


item. [PP.Ui.ListCaption](../ListCaption/ListCaption.htm)
 | Number. Заголовок или индекс.


## Описание


Метод remove удаляет указанный
 заголовок.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовки дерева
caps = Tree.getCaptions();
// Удалим второй заголовок
caps.remove(1);
В результате выполнения примера был удален второй заголовок.


См. также:


[ListCaptions](ListCaptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
