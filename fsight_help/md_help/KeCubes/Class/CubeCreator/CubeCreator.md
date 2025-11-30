# CubeCreator

CubeCreator
-


# CubeCreator


Сборка: Cubes;


## Описание


Класс CubeCreator реализует объект, используемый для автоматического создания стандартных кубов репозитория.


## Свойства объекта класса, унаследованные от [ICubeCreator](../../Interface/ICubeCreator/ICubeCreator.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AdditionalFields](../../Interface/ICubeCreator/ICubeCreator.AdditionalFields.htm)


		 Свойство AdditionalFields
		 возвращает коллекцию дополнительных полей, которые не будут связаны
		 с измерениями/фактами куба.


		 ![](../../Property_Image.gif)
		 [Database](../../Interface/ICubeCreator/ICubeCreator.Database.htm)


		 Свойство Database определяет
		 базу данных, в которой будет создана таблица для хранения данных
		 куба.


		 ![](../../Property_Image.gif)
		 [DictionaryParent](../../Interface/ICubeCreator/ICubeCreator.DictionaryParent.htm)


		 Свойство DictionaryParent
		 определяет папку, в которой будут создаваться объекты, необходимые
		 для куба.


		 ![](../../Property_Image.gif)
		 [Dimensions](../../Interface/ICubeCreator/ICubeCreator.Dimensions.htm)


		 Свойство Dimensions
		 возвращает коллекцию измерений создаваемого куба.


		 ![](../../Property_Image.gif)
		 [Facts](../../Interface/ICubeCreator/ICubeCreator.Facts.htm)


		 Свойство Facts возвращает
		 коллекцию фактов создаваемого куба.


		 ![](../../Property_Image.gif)
		 [RdsDatabase](../../Interface/ICubeCreator/ICubeCreator.RdsDatabase.htm)


		 Свойство RdsDatabase
		 определяет репозиторий НСИ, в котором будут создаваться справочники,
		 соответствующие измерениям куба.


		 ![](../../Property_Image.gif)
		 [Table](../../Interface/ICubeCreator/ICubeCreator.Table.htm)


		 Свойство Table определяет
		 таблицу, в которой будут храниться данные создаваемого куба.


		 ![](../../Property_Image.gif)
		 [UseNameAttribute](../../Interface/ICubeCreator/ICubeCreator.UseNameAttribute.htm)


		 Свойство UseNameAttribute
		 определяет, использовать ли атрибут «Наименование»
		 при создании куба.


## Методы объекта класса, унаследованные от [ICubeCreator](../../Interface/ICubeCreator/ICubeCreator.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateCube](../../Interface/ICubeCreator/ICubeCreator.CreateCube.htm)


		 Метод CreateCube осуществляет
		 создание и настройку стандартного куба.


		 ![](../../Sub_Image.gif)
		 [EditCube](../../Interface/ICubeCreator/ICubeCreator.EditCube.htm)


		 Метод EditCube изменяет
		 структуру указанного куба в соответствии с заданными настройками
		 текущего объекта.


См. также:


[Классы сборки Cubes](../KeCubes_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
