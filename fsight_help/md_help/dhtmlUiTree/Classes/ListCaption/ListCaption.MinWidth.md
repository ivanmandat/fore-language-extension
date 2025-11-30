# ListCaption.MinWidth

ListCaption.MinWidth
-


# ListCaption.MinWidth


## Синтаксис


MinWidth: Number;


## Описание


Свойство MinWidth определяет
 минимальную ширину заголовка.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setMinWidth, а возвращается с помощью
 метода getMinWidth.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовок
caps = Tree.getCaptions();
cap = caps.getCaptions()[0];
// Зададим минимальную ширину
cap.setMinWidth(200);
В результате выполнения примера была задана минимальная ширина заголовка.


См. также:


[ListCaption](ListCaption.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
