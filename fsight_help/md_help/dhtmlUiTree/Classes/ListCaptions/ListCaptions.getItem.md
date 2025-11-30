# ListCaptions.getItem

ListCaptions.getItem
-


# ListCaptions.getItem


## Синтаксис


getItem(index);


## Параметры


index. Number. Индекс.


## Описание


Метод getItem возвращает заголовок
 по индексу.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовки дерева
caps = Tree.getCaptions();
// Получим первый заголовок
caps.getItem(0);
// -> PP.Ui.ListCaption {_Content: "First", _Reduction: 0, _MinWidth: 20, _Percent: 40, _Resizable: true…}
В результате выполнения примера был получен первый заголовок.


См. также:


[ListCaptions](ListCaptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
