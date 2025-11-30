# ISearchDataSourcesItem.BuildCubeSelection

ISearchDataSourcesItem.BuildCubeSelection
-


# ISearchDataSourcesItem.BuildCubeSelection


## Синтаксис


BuildCubeSelection(pMetabase: [IMetabase](KeSom.chm::/Interface/IMetabase/IMetabase.htm)):
 [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Параметры


pMetabase. Контекст репозитория,
 в рамках которого инициализируется отметка куба.


## Описание


Метод BuildCubeSelection формирует
 отметку для источника данных на основании информации, содержащейся в текущем
 элементе.


## Комментарии


Сформированная отметка может быть [передана
 в источник данных](KeCubes.chm::/Interface/ICubeInstanceDestination/ICubeInstanceDestination.Execute.htm) для получения фактических значений,
 соответствующих той комбинации индексированных данных, которые хранятся
 в текущем элементе.


См. также:


[ISearchDataSourcesItem](ISearchDataSourcesItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
