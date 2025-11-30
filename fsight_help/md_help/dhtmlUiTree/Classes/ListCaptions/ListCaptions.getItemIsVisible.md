# ListCaptions.getItemIsVisible

ListCaptions.getItemIsVisible
-


# ListCaptions.getItemIsVisible


## Синтаксис


getItemIsVisible(index);


## Параметры


index. Number. Индекс.


## Описание


Метод getItemIsVisible возвращает
 признак видимости заголовка по указанному индексу.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовки дерева
caps = Tree.getCaptions();
// Получим признак видимости первого заголовка
caps.getItemIsVisible(0);
В результате выполнения примера был получен признак видимости первого
 заголовка.


См. также:


[ListCaptions](ListCaptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
