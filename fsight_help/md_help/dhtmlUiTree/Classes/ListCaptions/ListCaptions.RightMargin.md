# ListCaptions.RightMargin

ListCaptions.RightMargin
-


# ListCaptions.RightMargin


## Синтаксис


RightMargin: Number;


## Описание


Свойство RightMargin определяет
 правый отступ заголовков.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setRightMargin, а возвращается с
 помощью метода getRightMargin.


Значение задается в пикселях.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовки дерева
caps = Tree.getCaptions();
// Зададим правый отступ заголовков
caps.setRightMargin(30);
В результате выполнения примера был установлен правый отступ.


См. также:


[ListCaptions](ListCaptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
