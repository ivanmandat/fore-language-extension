# DimSource.getSchemas

DimSource.getSchemas
-


# DimSource.getSchemas


## Синтаксис


getSchemas ();


## Описание


Метод getSchemas возвращает
 информацию о всех доступных схемах отметки справочника.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [DimTree](../../../Components/Metabase/DimTree/DimTree.htm)
 с наименованием «dimTree» с источником «dim» (см. «[Пример
 создания компонента DimTree](../../../Components/Metabase/DimTree/DimTree_Example.htm)»). Выведем информацию об доступных схемах
 отметки справочника:


console.log(dim.getSchemas()[0].id)


После выполнения примера в консоль браузера будет выведен идентификатор
 первой схемы отметки.


См. также:


[DimSource](DimSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
