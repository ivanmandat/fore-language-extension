# ListCaption.updateWidth

ListCaption.updateWidth
-


# ListCaption.updateWidth


## Синтаксис


updateWidth(value);


## Параметры


value. Number. Ширина в пикселях.


## Описание


Метод updateWidth устанавливает
 ширину заголовка.


## Комментарии


Метод не генерирует событий и учитывает свойство [ListCaption.Reduction](ListCaption.Reduction.htm).


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовок
caps = Tree.getCaptions();
cap = caps.getCaptions()[0];
// Установим ширину
cap.updateWidth(50);
В результате выполнения примера была установлена ширина заголовка.


См. также:


[ListCaption](ListCaption.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
