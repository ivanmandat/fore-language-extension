# ListCaptions.getCaptionIndex

ListCaptions.getCaptionIndex
-


# ListCaptions.getCaptionIndex


## Синтаксис


getCaptionIndex(caption): Number;


## Параметры


caption. [PP.Ui.Caption](../ListCaption/ListCaption.htm).
 Заголовок.


## Описание


Метод getCaptionIndex возвращает
 индекс заголовка.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовки дерева
caps = Tree.getCaptions();
// Получим заголовок
cap = caps.getCaptions()[1];
// Получим индекс заголовка
caps.getCaptionIndex(cap);
В результате выполнения примера был получен индекс заголовка.


См. также:


[ListCaptions](ListCaptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
