# IVirtualCubeDimensionJoins.Add

IVirtualCubeDimensionJoins.Add
-


# IVirtualCubeDimensionJoins.Add


## Синтаксис


Add(


CubeSourceToJoin: [IVirtualCubeSource](../IVirtualCubeSource/IVirtualCubeSource.htm);


DimensionToJoin: [IDimensionModel](KeDims.chm::/interface/IDimensionModel/IDimensionModel.htm);


IndexToJoin: [IDimIndex](KeDims.chm::/interface/IDimIndex/IDimIndex.htm)):
 [IVirtualCubeDimensionJoin](../IVirtualCubeDimensionJoin/IVirtualCubeDimensionJoin.htm);


## Параметры


CubeSourceToJoin. Куб-источник,
 с измерениями которого создается сопоставление.


DimensionToJoin. Измерение,
 с которым создается сопоставление.


IndexToJoin. Индекс, который
 будет использоваться для сопоставления элементов.


## Описание


Метод Add создает сопоставление
 с указанным измерением куба-источника.


## Комментарии


При выполнении метода создается сопоставление измерения, для которого
 получена текущая коллекция, и измерения, передаваемого в параметре DimensionToJoin.


## Пример


Пример использования приведен в описании свойства [IVirtualCubeSource.JoinList](../IVirtualCubeSource/IVirtualCubeSource.JoinList.htm).


См. также:


[IVirtualCubeDimensionJoins](IVirtualCubeDimensionJoins.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
