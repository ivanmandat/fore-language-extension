# BaseCtrl.Source

BaseCtrl.Source
-


# BaseCtrl.Source


## Синтаксис


Source: PP.Mb.[Object](../Object/Object.htm)


## Описание


Метод Source определяет источник
 для BI-инструмента.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [DimTree](dhtmlDim.chm::/Components/Metabase/DimTree/DimTree.htm)
 с наименованием «dimTree» (см. «[Пример
 создания компонента DimTree](dhtmlDim.chm::/Components/Metabase/DimTree/DimTree_Example.htm)»). Переименуем выделенный элемент
 измерения:


//ключ выделенного
 элемента измерения


key = dimTree.getSelectedNodes()[0];


//возвращаем JSON-объект
 элемента измерения


elem = dimTree.getDimTreeCtrl().getSource().[getElem](dhtmlDim.chm::/Classes/Metabase/DimSource/DimSource.getElem.htm)(key);


//Устанавливаем новое
 имя


elem.n = "NEW_NODE";


//Обновляем дерево


dimTree.refresh();


После выполнения примера будет изменено имя первой выделенной вершины
 дерева.


См. также:


[BaseCtrl](BaseCtrl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
