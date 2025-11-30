# ITsStatisticsTree.Data

ITsStatisticsTree.Data
-


# ITsStatisticsTree.Data


## Синтаксис


Name(Index: Integer): Integer;


## Параметры


Index. Индекс элемента.


## Описание


Свойство Data возвращает
 элемент перечисления, соответствующий указанному элементу дерева.


## Комментарии


Индексация элементов сквозная и начинается с нуля. Количество элементов
 в дереве возвращает свойство [ITsStatisticsTree.Count](ITsStatisticsTree.Count.htm).


В зависимости от типа элемента возвращаемое значение принадлежит одному
 из следующих перечислений:


	- [TsStatisticsCategory](../../Enums/TsStatisticsCategory.htm);


	- [TsStatisticsTreeNodeType](../../Enums/TsStatisticsTreeNodeType.htm);


	- [TsStatisticsType](../../Enums/TsStatisticsType.htm).


Тип элемента возвращает свойство [ITsStatisticsTree.Type](ITsStatisticsTree.Type.htm).


## Пример


Использование свойства приведено в примере для [ITsStatistics.Execute](../ITsStatistics/ITsStatistics.Execute.htm).


См. также:


[ITsStatisticsTree](ITsStatisticsTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
