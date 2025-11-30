# TreeListBase.FilterString

TreeListBase.FilterString
-


# TreeListBase.FilterString


## Синтаксис


FilterString: String;


## Описание


Свойство FilterString определяет
 текст фильтра.


## Комментарии


Значение свойства устанавливается через JSON с помощью метода setFilter(string, column), а возвращается
 с помощью метода getFilterColumn().


При включенном фильтре, в дереве останутся только вершины удовлетворяющие
 тексту фильтрации.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Установим фильтр
Tree.setFilter("Node2", 0);
// Получим текст проверки фильтрации
Tree.getFilterString();
В результате выполнения примера был получен текущий фильтр.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
