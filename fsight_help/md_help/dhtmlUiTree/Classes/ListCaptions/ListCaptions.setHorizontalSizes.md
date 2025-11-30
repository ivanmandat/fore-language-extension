# ListCaptions.setHorizontalSizes

ListCaptions.setHorizontalSizes
-


# ListCaptions.setHorizontalSizes


## Синтаксис


setHorizontalSizes(values, preventUpdate);


## Параметры


values. Object. Объект с полями:
 Width, LeftMargin, RightMargin, VScrollMargin. Может содержать только
 некоторые поля;


preventUpdate. Boolean. Не
 обновлять заголовки.


## Описание


Метод setHorizontalSizes устанавливает
 размеры, необходимые для вычисления размеров заголовков.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовки дерева
caps = Tree.getCaptions();
// Установим левый и правый отступы
caps.setHorizontalSizes({
    LeftMargin: 20,
    RightMargin: 20
});
В результате выполнения примера были установлены оба отступа заголовков.


См. также:


[ListCaptions](ListCaptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
