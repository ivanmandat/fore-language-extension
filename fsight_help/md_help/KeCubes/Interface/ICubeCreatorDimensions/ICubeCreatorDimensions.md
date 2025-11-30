# ICubeCreatorDimensions

ICubeCreatorDimensions
-


# ICubeCreatorDimensions


Сборка: Cubes;


## Описание


Интерфейс ICubeCreatorDimensions
 содержит свойства и методы для работы с коллекцией измерений, которые
 будут созданы в кубе.


## Иерархия наследования


ICubeCreatorDimensions


## Комментарии


Коллекцию измерений можно получить в свойстве [ICubeCreator.Dimensions](../ICubeCreator/ICubeCreator.Dimensions.htm)
 или [ICubeCreatorFact.Dimensions](../ICubeCreatorFact/ICubeCreatorFact.Dimensions.htm).


Если коллекция получена через свойство [ICubeCreator.Dimensions](../ICubeCreator/ICubeCreator.Dimensions.htm),
 то она используется для формирования списка измерений, которые будут созданы
 в структуре куба при выполнении метода [CreateCube](../ICubeCreator/ICubeCreator.CreateCube.htm).
 В данной коллекции необходимо сформировать список измерений, которые будут
 созданы в структуре куба при выполнении метода [CreateCube](../ICubeCreator/ICubeCreator.CreateCube.htm).
 Измерения могут быть построены на базе существующих справочников, либо
 созданы новые. Для новых измерений, во время создания куба, будут созданы
 табличные справочники НСИ.


Если коллекция получена через свойство [ICubeCreatorFact.Dimensions](../ICubeCreatorFact/ICubeCreatorFact.Dimensions.htm),
 то она используется для привязки измерения к полям таблицы, на хранение
 данных в которой настроен какой-либо факт.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](ICubeCreatorDimensions.Count.htm)


		 Свойство Count возвращает
		 количество измерений в коллекции.


		 ![](../../Property_Image.gif)
		 [Item](ICubeCreatorDimensions.Item.htm)


		 Свойство Item возвращает
		 параметры указанного измерения.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](ICubeCreatorDimensions.Add.htm)


		 Метод Add добавляет
		 в коллекцию измерение на базе существующего справочника репозитория.


		 ![](../../Sub_Image.gif)
		 [AddNew](ICubeCreatorDimensions.AddNew.htm)


		 Метод AddNew создает
		 новое измерение в коллекции.


		 ![](../../Sub_Image.gif)
		 [Clear](ICubeCreatorDimensions.Clear.htm)


		 Метод Clear удаляет
		 все измерения из коллекции.


		 ![](../../Sub_Image.gif)
		 [Remove](ICubeCreatorDimensions.Remove.htm)


		 Метод Remove удаляет
		 измерение из коллекции по индексу.


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
