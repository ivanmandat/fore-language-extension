# ListCaptions.Captions

ListCaptions.Captions
-


# ListCaptions.Captions


## Синтаксис


Captions: Array of [PP.Ui.ListCaption](../ListCaption/ListCaption.htm);


## Описание


Свойство Captions содержит массив
 заголовков.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setCaptions, а возвращается с помощью
 метода getCaptions.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовки дерева
caps = Tree.getCaptions();
// Получим первый заголовок
cap = caps.getCaptions()[0];
// ->  PP.Ui.ListCaption {_Content: "First", _Reduction: 0, _MinWidth: 20, _Percent: null, _Resizable: true…}
В результате выполнения примера в консоли был получен объект первого
 заголовка.


См. также:


[ListCaptions](ListCaptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
