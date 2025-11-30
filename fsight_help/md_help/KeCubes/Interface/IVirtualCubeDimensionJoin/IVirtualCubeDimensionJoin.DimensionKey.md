# IVirtualCubeDimensionJoin.DimensionKey

IVirtualCubeDimensionJoin.DimensionKey
-


# IVirtualCubeDimensionJoin.DimensionKey


## Синтаксис


DimensionKey: Integer;


## Описание


Свойство DimensionKey возвращает
 ключ измерения, которое используется при сопоставлении.


## Комментарии


В зависимости от того, для какого элемента получено значение свойства,
 свойство возвращает ключ измерения, имеющего различное назначение:


	- Если свойство получено для всей коллекции, описываемой интерфейсом
	 [IVirtualCubeDimensionJoins](../IVirtualCubeDimensionJoins/IVirtualCubeDimensionJoins.htm):
	 свойство вернет ключ управляющего измерения, которое в дальнейшем
	 используется в кубе и сопоставлено с измерениями других кубов.


	- Если свойство получено для элемента коллекции, описываемой интерфейсом
	 [IVirtualCubeDimensionJoins](../IVirtualCubeDimensionJoins/IVirtualCubeDimensionJoins.htm):
	 свойство вернет ключ управляемого измерения, которое сопоставлено
	 с каким-либо управляющим измерением.


См. также:


[IVirtualCubeDimensionJoin](IVirtualCubeDimensionJoin.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
