# ListCaption.getOptimalWidth

ListCaption.getOptimalWidth
-


# ListCaption.getOptimalWidth


## Синтаксис


getOptimalWidth() : Number;


## Описание


Метод getOptimalWidth возвращает
 оптимальную ширину заголовка, при которой виден весь текст заголовка.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовок
caps = Tree.getCaptions();
cap = caps.getCaptions()[0];
// Получим оптимальную ширину
cap.getOptimalWidth();
-> 30
В результате выполнения примера была получена оптимальная ширина первого
 заголовка.


См. также:


[ListCaption](ListCaption.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
