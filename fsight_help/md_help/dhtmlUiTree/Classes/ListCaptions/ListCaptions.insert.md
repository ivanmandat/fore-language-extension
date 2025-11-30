# ListCaptions.insert

ListCaptions.insert
-


# ListCaptions.insert


## Синтаксис


insert(caption, index);


## Параметры


caption. [PP.Ui.Caption](../ListCaption/ListCaption.htm)
 | Object. Заголовок;


index. Number. Индекс. Если
 не указан - заголовок будет вставлен в конец.


## Описание


Метод insert добавляет новый
 заголовок по указанному индексу.


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
caps.insert({Content: "Third", MinWidth: "40", Width: "100"})
В результате выполнения примера был добавлен новый заголовок.


См. также:


[ListCaptions](ListCaptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
