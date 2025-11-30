# ListCaptions.add

ListCaptions.add
-


# ListCaptions.add


## Синтаксис


add(caption);


## Параметры


caption. [PP.Ui.Caption](../ListCaption/ListCaption.htm)
 | Object. Заголовок.


## Описание


Метод add добавляет новый заголовок
 в конец.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовки дерева
caps = Tree.getCaptions();
// Уменьшим ширину текущих заголовков
caps.getCaptions()[0].setWidth(100);
caps.getCaptions()[1].setWidth(100);
// добавим новый заголовок
caps.add({Content: "Third", MinWidth: "40", Width: "100"})
В результате выполнения примера был добавлен новый заголовок.


См. также:


[ListCaptions](ListCaptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
