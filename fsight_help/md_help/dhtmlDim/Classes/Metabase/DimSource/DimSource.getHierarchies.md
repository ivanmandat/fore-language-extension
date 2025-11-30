# DimSource.getHierarchies

DimSource.getHierarchies
-


# DimSource.getHierarchies


## Синтаксис


getHierarchies ();


## Описание


Метод getHierarchies возвращает
 описание альтернативных иерархий справочника.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [DimTree](../../../Components/Metabase/DimTree/DimTree.htm)
 с наименованием «dimTree» с источником «dim» (см. «[Пример
 создания компонента DimTree](../../../Components/Metabase/DimTree/DimTree_Example.htm)»). Выведем информацию об альтернативных
 иерархиях справочника:


console.log(dim.getHierarchies()[1].id)


После выполнения примера в консоль браузера будет выведен идентификатор
 второй альтернативной иерархии справочника.


См. также:


[DimSource](DimSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
