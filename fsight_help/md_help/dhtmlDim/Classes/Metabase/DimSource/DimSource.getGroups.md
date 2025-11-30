# DimSource.getGroups

DimSource.getGroups
-


# DimSource.getGroups


## Синтаксис


getGroups ();


## Описание


Метод getGroups возвращает информацию
 о всех группах элементов справочника.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [DimTree](../../../Components/Metabase/DimTree/DimTree.htm)
 с наименованием «dimTree» с источником «dim» (см. «[Пример
 создания компонента DimTree](../../../Components/Metabase/DimTree/DimTree_Example.htm)»). Выведем информацию о группах элементов
 справочника:


console.log(dim.getGroups()[0].n);


После выполнения примера в консоль браузера будет выведено название
 первой группы элементов.


См. также:


[DimSource](DimSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
