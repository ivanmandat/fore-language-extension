# ListCaptions.VScrollMargin

ListCaptions.VScrollMargin
-


# ListCaptions.VScrollMargin


## Синтаксис


VScrollMargin: Number;


## Описание


Свойство VScrollMargin определяет
 отступ вертикальной полосы прокрутки.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода
 setVScrollMargin, а возвращается
 с помощью метода getVScrollMargin.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовки дерева
caps = Tree.getCaptions();
// Определим отступ вертикальной полосы прокрутки
caps.getVScrollMargin();
В результате выполнения примера был определен отступ вертикальной полосы
 прокрутки.


См. также:


[ListCaptions](ListCaptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
