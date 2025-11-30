# IVirtualCubeDimensionJoinList

IVirtualCubeDimensionJoinList
-


# IVirtualCubeDimensionJoinList


Сборка: Cubes;


## Описание


Интерфейс IVirtualCubeDimensionJoinList
 содержит свойства и методы для работы со списком сопоставленных измерений
 куба-источника.


## Иерархия наследования


           IVirtualCubeDimensionJoinList


## Комментарии


Список сопоставленных измерений можно получить в свойстве [IVirtualCubeSource.JoinList](../IVirtualCubeSource/IVirtualCubeSource.JoinList.htm).


При сопоставлении измерений виртуальных кубов следует учитывать, что
 настройка более одного сопоставления для одного и того же измерения недоступна.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](IVirtualCubeDimensionJoinList.Count.htm)


		 Свойство Count возвращает
		 количество измерений, для которых настроено сопоставление с измерениями
		 других кубов-источников.


		 ![](../../Property_Image.gif)
		 [Item](IVirtualCubeDimensionJoinList.Item.htm)


		 Свойство Item возвращает
		 параметры сопоставлений с измерениями других кубов источников.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](IVirtualCubeDimensionJoinList.Add.htm)


		 Метод Add добавляет
		 в список параметры сопоставления для указанного измерения текущего
		 куба-источника.


		 ![](../../Sub_Image.gif)
		 [Clear](IVirtualCubeDimensionJoinList.Clear.htm)


		 Метод Clear удаляет
		 параметры сопоставления всех измерений текущего куба-источника.


		 ![](../../Sub_Image.gif)
		 [FindByKey](IVirtualCubeDimensionJoinList.FindByKey.htm)


		 Метод FindByKey осуществляет
		 поиск и возвращает параметры сопоставления для измерения с указанным
		 ключом.


		 ![](../../Sub_Image.gif)
		 [Move](IVirtualCubeDimensionJoinList.Move.htm)


		 Метод Move осуществляет
		 перемещение параметров сопоставления измерения в списке.


		 ![](../../Sub_Image.gif)
		 [Remove](IVirtualCubeDimensionJoinList.Remove.htm)


		 Метод Remove удаляет
		 параметры сопоставления измерения по индексу в списке.


		 ![](../../Sub_Image.gif)
		 [RemoveByKey](IVirtualCubeDimensionJoinList.RemoveByKey.htm)


		 Метод RemoveByKey удаляет
		 параметры сопоставления по ключу измерения.


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
