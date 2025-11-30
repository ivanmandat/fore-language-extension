# ListCaptions.LeftMargin

ListCaptions.LeftMargin
-


# ListCaptions.LeftMargin


## Синтаксис


LeftMargin: Number;


## Описание


Свойство LeftMargin определяет
 левый отступ заголовков.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setLeftMargin, а возвращается с
 помощью метода getLeftMargin.


Значение задается в пикселях.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовки дерева
caps = Tree.getCaptions();
// Зададим левый отступ заголовков
caps.setLeftMargin(30);
В результате выполнения примера был установлен левый отступ.


См. также:


[ListCaptions](ListCaptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
