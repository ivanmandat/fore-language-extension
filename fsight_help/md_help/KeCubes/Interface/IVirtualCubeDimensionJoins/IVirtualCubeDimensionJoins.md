# IVirtualCubeDimensionJoins

IVirtualCubeDimensionJoins
-


# IVirtualCubeDimensionJoins


Сборка: Cubes;


## Описание


Интерфейс IVirtualCubeDimensionJoins
 содержит свойства и методы для работы с коллекцией параметров сопоставления
 измерения с измерениями других кубов-источников.


## Иерархия наследования


           [IVirtualCubeDimensionJoin](../IVirtualCubeDimensionJoin/IVirtualCubeDimensionJoin.htm)


           IVirtualCubeDimensionJoins


## Комментарии


Параметры сопоставления измерения с измерениями других кубов-источников
 можно получить, используя свойства и методы интерфейса [IVirtualCubeDimensionJoinList](../IVirtualCubeDimensionJoinList/IVirtualCubeDimensionJoinList.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](IVirtualCubeDimensionJoins.Count.htm)


		 Свойство Count возвращает
		 количество измерений, с которыми сопоставлено измерение куба-источника.


		 ![](../../Property_Image.gif)
		 [Item](IVirtualCubeDimensionJoins.Item.htm)


		 Свойство Item возвращает
		 параметры сопоставленного измерения по индексу в коллекции.


## Свойства, унаследованные от [IVirtualCubeDimensionJoin](../IVirtualCubeDimensionJoin/IVirtualCubeDimensionJoin.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CubeId](../IVirtualCubeDimensionJoin/IVirtualCubeDimensionJoin.CubeId.htm)


		 Свойство CubeId возвращает
		 идентификатор куба.


		 ![](../../Property_Image.gif)
		 [DimensionKey](../IVirtualCubeDimensionJoin/IVirtualCubeDimensionJoin.DimensionKey.htm)


		 Свойство DimensionKey
		 возвращает ключ измерения, которое используется при сопоставлении.


		 ![](../../Property_Image.gif)
		 [IndexId](../IVirtualCubeDimensionJoin/IVirtualCubeDimensionJoin.IndexId.htm)


		 Свойство IndexId возвращает
		 идентификатор индекса, который используется при сопоставлении
		 элементов двух измерений.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](IVirtualCubeDimensionJoins.Add.htm)


		 Метод Add создает сопоставление
		 с указанным измерением куба-источника.


		 ![](../../Sub_Image.gif)
		 [Clear](IVirtualCubeDimensionJoins.Clear.htm)


		 Метод Clear удаляет
		 все сопоставления с измерениями кубов-источников.


		 ![](../../Sub_Image.gif)
		 [FindById](IVirtualCubeDimensionJoins.FindById.htm)


		 Метод FindById осуществляет
		 поиск по идентификатору куба-источника и возвращает параметры
		 сопоставления с его измерением.


		 ![](../../Sub_Image.gif)
		 [Move](IVirtualCubeDimensionJoins.Move.htm)


		 Метод Move осуществляет
		 перемещение сопоставленного измерения в коллекции.


		 ![](../../Sub_Image.gif)
		 [Remove](IVirtualCubeDimensionJoins.Remove.htm)


		 Метод Remove удаляет
		 сопоставление с кубом-источником по его индексу в коллекции.


		 ![](../../Sub_Image.gif)
		 [RemoveById](IVirtualCubeDimensionJoins.RemoveById.htm)


		 Метод RemoveById удаляет
		 сопоставление с кубом-источником по его идентификатору.


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
