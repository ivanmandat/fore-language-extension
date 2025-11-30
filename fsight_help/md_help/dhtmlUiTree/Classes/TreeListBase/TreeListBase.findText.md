# TreeListBase.findText

TreeListBase.findText
-


# TreeListBase.findText


## Синтаксис


findText(value);


## Параметры


value. String. Текст для поиска.


## Описание


Метод findText ищет полное совпадение
 значения в первом столбце.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Найдем вершину с содержанием Node3
Tree.findText("Node3");
// -> "key3"
В результате выполнения примера в консоль будет выведен ключ вершины,
 имеющий полное совпадение текста.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
