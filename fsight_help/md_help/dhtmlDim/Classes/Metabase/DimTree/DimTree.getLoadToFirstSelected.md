# DimTree.getLoadToFirstSelected

DimTree.getLoadToFirstSelected
-


# DimTree.getLoadToFirstSelected


## Синтаксис


getLoadToFirstSelected();


## Описание


Метод getLoadToFirstSelected
 возвращает признак необходимости загрузки дерева до первой выделенной
 вершины.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 DimCombo с наименованием «dimCombo» (см. «[Пример
 размещения компонента DimCombo](../../../Components/Metabase/DimCombo/DimCombo_Example.htm)»). Получим идентификатор по предустановленному
 значению «Order»:


// Получим представление дерева
tree = dimCombo.getTreeView();
// Проверим признак загрузки дерева до первой выделенной вершины
console.log( tree.getLoadToFirstSelected ? "Дерево загружается до первой выделенной вершины" : "Дерево не загружается до первой выделенной вершины");
В результате в консоль будет выведено сообщение о необходимости загрузки
 дерева до первой выделенной вершины.


См. также:


[DimTree](DimTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
