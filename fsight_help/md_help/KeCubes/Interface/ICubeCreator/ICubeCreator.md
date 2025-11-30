# ICubeCreator

ICubeCreator
-


# ICubeCreator


Сборка: Cubes;


## Описание


Интерфейс ICubeCreator содержит
 свойства и методы объекта, используемого для автоматического создания
 или редактирования стандартных кубов репозитория.


## Иерархия наследования


ICubeCreator


## Комментарии


Для работы со объектом необходимо:


	- Используя свойство [Dimensions](ICubeCreator.Dimensions.htm)
	 сформировать коллекцию измерений куба. Если для куба создаются новые
	 измерения, то в свойстве [RdsDatabase](ICubeCreator.RdsDatabase.htm)
	 можно определить репозиторий НСИ, в котором будут созданы соответствующие
	 табличные справочники НСИ. Если репозиторий НСИ определен не будет,
	 то табличные справочники НСИ будут созданы в базе данных, определенной
	 в свойстве [Database](ICubeCreator.Database.htm);


	- Используя свойство [Facts](ICubeCreator.Facts.htm)
	 сформировать коллекцию фактов куба;


	- Если для хранения данных куба подготовлена таблица, то необходимо
	 указать ее в свойстве [Table](ICubeCreator.Table.htm) и
	 настроить привязку измерений и фактов используя свойства [ICubeCreatorDimension.Fields](../ICubeCreatorDimension/ICubeCreatorDimension.Fields.htm)
	 и [ICubeCreatorFact.Field](../ICubeCreatorFact/ICubeCreatorFact.Field.htm)
	 соответственно. Если таблица отсутствует, то в свойстве [Database](ICubeCreator.Database.htm)
	 необходимо указать базу данных, в которой она будет создана автоматически
	 при создании куба. Все привязки при этом также будут настроены автоматически;


	- Для создания нового куба вызовите метод [CreateCube](ICubeCreator.CreateCube.htm);
	 для редактирования структуры существующего куба - [EditCube](ICubeCreator.EditCube.htm).


Для работы с объектами с помощью свойств/методов интерфейса ICubeCreator
 необходимо, чтобы сервер базы данных был создан на базе СУБД Oracle 9.x
 и выше, либо Microsoft SQL Server 2012 и выше.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AdditionalFields](ICubeCreator.AdditionalFields.htm)


		 Свойство AdditionalFields
		 возвращает коллекцию дополнительных полей, которые не будут связаны
		 с измерениями/фактами куба.


		 ![](../../Property_Image.gif)
		 [Database](ICubeCreator.Database.htm)


		 Свойство Database определяет
		 базу данных, в которой будет создана таблица для хранения данных
		 куба.


		 ![](../../Property_Image.gif)
		 [DictionaryParent](ICubeCreator.DictionaryParent.htm)


		 Свойство DictionaryParent
		 определяет папку, в которой будут создаваться объекты, необходимые
		 для куба.


		 ![](../../Property_Image.gif)
		 [Dimensions](ICubeCreator.Dimensions.htm)


		 Свойство Dimensions
		 возвращает коллекцию измерений создаваемого куба.


		 ![](../../Property_Image.gif)
		 [Facts](ICubeCreator.Facts.htm)


		 Свойство Facts возвращает
		 коллекцию фактов создаваемого куба.


		 ![](../../Property_Image.gif)
		 [RdsDatabase](ICubeCreator.RdsDatabase.htm)


		 Свойство RdsDatabase
		 определяет репозиторий НСИ, в котором будут создаваться справочники,
		 соответствующие измерениям куба.


		 ![](../../Property_Image.gif)
		 [Table](ICubeCreator.Table.htm)


		 Свойство Table определяет
		 таблицу, в которой будут храниться данные создаваемого куба.


		 ![](../../Property_Image.gif)
		 [UseNameAttribute](ICubeCreator.UseNameAttribute.htm)


		 Свойство UseNameAttribute
		 определяет, использовать ли атрибут «Наименование»
		 при создании куба.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateCube](ICubeCreator.CreateCube.htm)


		 Метод CreateCube осуществляет
		 создание и настройку стандартного куба.


		 ![](../../Sub_Image.gif)
		 [EditCube](ICubeCreator.EditCube.htm)


		 Метод EditCube изменяет
		 структуру указанного куба в соответствии с заданными настройками
		 текущего объекта.


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
