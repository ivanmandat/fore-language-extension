# IVirtualCubeDimensionJoin.CubeId

IVirtualCubeDimensionJoin.CubeId
-


# IVirtualCubeDimensionJoin.CubeId


## Синтаксис


CubeId: String;


## Описание


Свойство CubeId возвращает идентификатор
 куба.


## Комментарии


В зависимости от того, для какого элемента получено значение свойства,
 свойство возвращает идентификаторы куба, имеющего различное назначение:


	- Если свойство получено для всей коллекции, описываемой интерфейсом
	 [IVirtualCubeDimensionJoins](../IVirtualCubeDimensionJoins/IVirtualCubeDimensionJoins.htm):
	 свойство вернет идентификатор куба, для которого задано сопоставление
	 измерений с измерениями других кубов;


	- Если свойство получено для элемента коллекции, описываемой интерфейсом
	 [IVirtualCubeDimensionJoins](../IVirtualCubeDimensionJoins/IVirtualCubeDimensionJoins.htm):
	 свойство вернет идентификатор куба, измерения которого сопоставлены
	 с каким-либо кубом.


См. также:


[IVirtualCubeDimensionJoin](IVirtualCubeDimensionJoin.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
