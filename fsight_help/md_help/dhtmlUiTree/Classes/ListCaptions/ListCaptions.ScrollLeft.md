# ListCaptions.ScrollLeft

ListCaptions.ScrollLeft
-


# ListCaptions.ScrollLeft


## Синтаксис


ScrollLeft: Number;


## Описание


Свойство ScrollLeft определяет
 отображение заголовка при указанном значении горизонтальной полосы прокрутки.


## Комментарии


Значение свойства влияет только а положение заголовка, полоса прокрутки
 не изменяется.


Значение свойства устанавливается из JSON и с помощью метода setScrollLeft, а возвращается с
 помощью метода getScrollLeft.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовки дерева
caps = Tree.getCaptions();
// Отобразим полосу прокрутки расширив заголовок
caps.getCaptions()[0].setWidth(150);
caps.getCaptions()[1].setWidth(500);
// Изменим положение заголовка
caps.setScrollLeft(100);
В результате выполнения примера был отображен заголовок, соответствующий
 прокрутке полосы до значения 100.


См. также:


[ListCaptions](ListCaptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
