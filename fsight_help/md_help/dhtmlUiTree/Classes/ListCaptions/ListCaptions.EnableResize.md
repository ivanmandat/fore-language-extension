# ListCaptions.EnableResize

ListCaptions.EnableResize
-


# ListCaptions.EnableResize


## Синтаксис


EnableResize: Boolean;


## Описание


Свойство EnableResize определяет
 признак возможности ручного изменения размера столбцов.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setEnableResize, а возвращается
 с помощью метода getEnableResize.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовки дерева
caps = Tree.getCaptions();
// Запретим вручную изменять размер столбцов
caps.setEnableResize(false);
В результате выполнения примера было запрещено вручную менять ширину
 столбцов.


См. также:


[ListCaptions](ListCaptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
