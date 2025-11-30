# IPrxDataIslandHeader.StairsHierarchy

IPrxDataIslandHeader.StairsHierarchy
-


# IPrxDataIslandHeader.StairsHierarchy


## Синтаксис


StairsHierarchy : Boolean;


## Описание


Свойство StairsHierarchy позволяет
 выводить наименования строк/столбцов области данных в виде ступенчатой
 иерархии в одном столбце/строке.


## Комментарии


Допустимые значения:


	- True. Ступенчатая иерархия
	 используется;


	- False. Ступенчатая иерархия
	 не используется. Значение по умолчанию.


Данное свойство целесообразно использовать, если по строкам/столбцам
 расположено несколько измерений.


При использовании дополнительных опций для свойства возможно выведение
 наименований в нескольких столбцах/строках.


Если свойство принимает значение True,
 становятся недоступными для применения свойства [IPrxDataIslandHeader.KeepParentNodes](IPrxDataIslandHeader.KeepParentNodes.htm)
 и [IPrxDataIslandHeaderCommon.ChildrenBeforeParents](../IPrxDataIslandHeaderCommon/IPrxDataIslandHeaderCommon.ChildrenBeforeParents.htm).


См. также:


[IPrxDataIslandHeader](IPrxDataIslandHeader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
