# ListCaption.IsAppended

ListCaption.IsAppended
-


# ListCaption.IsAppended


## Синтаксис


IsAppended: Boolean;


## Описание


Свойство IsAppended определяет
 признак добавления заголовка в DOM.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setIsAppended, а возвращается с
 помощью метода getIsAppended.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовок
caps = Tree.getCaptions();
cap = caps.getCaptions()[0];
// Узнаем признак добавления заголовка в DOM
cap.getIsAppended()
В результате выполнения примера был получен признак добавления заголовка
 в DOM.


См. также:


[ListCaption](ListCaption.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
