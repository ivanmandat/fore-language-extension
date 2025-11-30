# IVirtualCubeDimensionJoinList.Add

IVirtualCubeDimensionJoinList.Add
-


# IVirtualCubeDimensionJoinList.Add


## Синтаксис


Add(Dimension: [IDimensionModel](KeDims.chm::/interface/IDimensionModel/IDimensionModel.htm);
 Index: [IDimIndex](KeDims.chm::/interface/IDimIndex/IDimIndex.htm)):
 [IVirtualCubeDimensionJoins](../IVirtualCubeDimensionJoins/IVirtualCubeDimensionJoins.htm);


## Параметры


Dimension. Измерение текущего
 куба-источника, которое будет управляющим и будет сопоставлено с другими
 измерениями кубов источников.


Index. Индекс измерения, который
 будет использоваться при сопоставлении элементов.


## Описание


Метод Add добавляет в список
 параметры сопоставления для указанного измерения текущего куба-источника.


## Пример


Пример использования приведен в описании свойства [IVirtualCubeSource.JoinList](../IVirtualCubeSource/IVirtualCubeSource.JoinList.htm).


См. также:


[IVirtualCubeDimensionJoinList](IVirtualCubeDimensionJoinList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
