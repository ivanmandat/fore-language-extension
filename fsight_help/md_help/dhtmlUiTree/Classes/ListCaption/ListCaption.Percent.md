# ListCaption.Percent

ListCaption.Percent
-


# ListCaption.Percent


## Синтаксис


Percent: Number;


## Описание


Свойство Percent определяет
 ширину в процентах.


## Комментарии


Значение свойства возвращается с помощью метода getPercent.


Для задания ширины в процентах используйте метод ListCaption.setWidth(),
 содержащий значение с процентами, например, "30%".


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовок
caps = Tree.getCaptions();
cap = caps.getCaptions()[0];
// Зададим ширину в процентах
cap.setWidth("30%");
// Получим текущую ширину в процентах
cap.getPercent();
В результате выполнения примера была получена ширина заголовка в процентах.


См. также:


[ListCaption](ListCaption.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
