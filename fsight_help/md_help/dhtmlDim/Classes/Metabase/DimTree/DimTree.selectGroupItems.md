# DimTree.selectGroupItems

DimTree.selectGroupItems
-


# DimTree.selectGroupItems


## Синтаксис


selectGroupItems(idGroup: String);


## Параметры


idGroup. Идентификатор группы
 элементов измерения.


## Описание


Метод selectGroupItems устанавливает
 отметку элементам группы.


## Комментарии


Для выполнения примера предполагается наличие на html-странице компонента
 DimCombo с наименованием «dimCombo» (см. «[Пример
 размещения компонента DimCombo](../../../Components/Metabase/DimCombo/DimCombo_Example.htm)»). Также необходимо наличие группы
 элементов измерения с идентификатором «OBJ10901». Выделим элементы группы
 «OBJ10901»:


// Получим представление дерева
tree = dimCombo.getTreeView();
// Выделяем элементы измерения группы «OBJ10901»
tree.selectGroupItems("OBJ10901");
В результате будут выделены элементы измерения группы «OBJ10901»:


См. также:


[DimTree](DimTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
