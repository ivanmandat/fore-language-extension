# ListCaptions.getVisibleCaptions

ListCaptions.getVisibleCaptions
-


# ListCaptions.getVisibleCaptions


## Синтаксис


getVisibleCaptions();


## Описание


Метод getVisibleCaptions возвращает
 массив видимых заголовков.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовки дерева
caps = Tree.getCaptions();
// Получим все видимые заголовки
caps.getVisibleCaptions();
// -> [PP.Ui.ListCaption, PP.Ui.ListCaption]
В результате выполнения примера были получены все видимые заголовки.


См. также:


[ListCaptions](ListCaptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
