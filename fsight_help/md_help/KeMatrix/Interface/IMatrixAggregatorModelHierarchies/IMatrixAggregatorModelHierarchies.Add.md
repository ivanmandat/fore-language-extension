# IMatrixAggregatorModelHierarchies.Add

IMatrixAggregatorModelHierarchies.Add
-


# IMatrixAggregatorModelHierarchies.Add


## Синтаксис


Add(HierarchyKey: Integer): [IMatrixAggregatorModel](../IMatrixAggregatorModel/IMatrixAggregatorModel.htm);


## Параметры


HierarchyKey. Ключ справочника
 в коллекции [альтернативных
 иерархий](UiNavObj.chm::/Cube/CreateCube/Master_Standart/UiMd_Cube_CreateCube_Master_Standart_7.htm#alt_agr).


## Описание


Метод Add осуществляет добавление
 новых параметров агрегации альтернативной иерархии справочника по ключу.


## Комментарии


Существующие справочники с агрегацией по уровням [альтернативной
 иерархии](UiNavObj.chm::/Cube/CreateCube/Master_Standart/UiMd_Cube_CreateCube_Master_Standart_7.htm#alt_agr) содержатся в папке «Альтернативные
 иерархии» внутри справочников.


Для получения ключа справочника в коллекции альтернативных иерархий
 используйте метод [INamedEntity.Key](KeSom.chm::/Interface/INamedEntity/INamedEntity.Key.htm).


## Пример


Использование метода приведено в примере для [IStandardCubeDimension.AggregatorHierarchies](KeCubes.chm::/Interface/IStandardCubeDimension/IStandardCubeDimension.AggregatorHierarchies.htm).


См. также:


[IMatrixAggregatorModelHierarchies](IMatrixAggregatorModelHierarchies.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
