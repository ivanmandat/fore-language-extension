# TreeListView.Captions

TreeListView.Captions
-


# TreeListView.Captions


## Синтаксис


Captions: PP.Ui.[ListCaptions](../ListCaptions/ListCaptions.htm);


## Описание


Свойство Captions определяет
 заголовки дерева.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setCaptions,
 а возвращается с помощью метода getCaptions.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовок дерева
Tree.getCaptions();
// -> PP.Ui.ListCaptions {_Content: "First", _Reduction: 0, _MinWidth: 20, _Percent: 40, _Resizable: true…}
В результате выполнения примера был получен объект с заголовками дерева.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
