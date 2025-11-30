# IDatasetModelField

IDatasetModelField
-


# IDatasetModelField


Сборка: Db;


## Описание


Интерфейс IDatasetModelField
 содержит свойства структуры поля источника данных.


## Иерархия наследования


           [INamedEntityModel](ForeSys.chm::/Interface/INamedEntityModel/INamedEntityModel.htm)


           IDatasetModelField


## Комментарии


Для получения структуры поля используйте свойства и методы интерфейса
 [IDatasetModelFields](../IDatasetModelFields/IDatasetModelFields.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DataDomain](IDatasetModelField.DataDomain.htm)
		 Свойство DataDomain
		 определяет тип данных поля источника данных, если оно предназначено
		 для хранения многобайтовой информации.


		 ![](../../Property_Image.gif)
		 [DataType](IDatasetModelField.DataType.htm)
		 Свойство DataType возвращает
		 тип данных, которые могут содержаться в поле источника данных.


		 ![](../../Property_Image.gif)
		 [DefaultValue](IDatasetModelField.DefaultValue.htm)
		 Свойство DefaultValue
		 возвращает значение по умолчанию для поля источника данных.


		 ![](../../Property_Image.gif)
		 [Expression](IDatasetModelField.Expression.htm)
		 Свойство Expression
		 возвращает выражение вычисляемого поля.


		 ![](../../Property_Image.gif)
		 [IdWithOutCase](IDatasetModelField.IdWithOutCase.htm)
		 Свойство IdWithOutCase
		 возвращает идентификатор поля источника с учетом регистра.


		 ![](../../Property_Image.gif)
		 [IsCalculated](IDatasetModelField.IsCalculated.htm)
		 Свойство IsCalculated
		 возвращает True, если
		 поле источника данных вычисляемое.


		 ![](../../Property_Image.gif)
		 [IsCaseSensitive](IDatasetModelField.IsCaseSensitive.htm)
		 Свойство IsCaseSensitive
		 возвращает признак регистрозависимости содержимого поля.


		 ![](../../Property_Image.gif)
		 [IsData](IDatasetModelField.IsData.htm)
		 Свойство IsData возвращает
		 True, если поле источника
		 данных обычное (не вычисляемое).


		 ![](../../Property_Image.gif)
		 [IsKey](IDatasetModelField.IsKey.htm)
		 Свойство IsKey не поддерживается.


		 ![](../../Property_Image.gif)
		 [IsSparse](IDatasetModelField.IsSparse.htm)
		 Свойство IsSparse
		 возвращает признак того, используются ли для хранения данных поля
		 разреженные столбцы.


		 ![](../../Property_Image.gif)
		 [Mandatory](IDatasetModelField.Mandatory.htm)
		 Свойство Mandatory
		 возвращает True, если
		 не допускаются пустые значения в поле.


		 ![](../../Property_Image.gif)
		 [Precision](IDatasetModelField.Precision.htm)
		 Свойство Precision
		 возвращает точность значения (количество знаков после запятой)
		 поля источника данных.


		 ![](../../Property_Image.gif)
		 [ReadOnly](IDatasetModelField.ReadOnly.htm)
		 Свойство ReadOnly возвращает
		 True, если поле источника
		 данных доступно только для чтения.


		 ![](../../Property_Image.gif)
		 [Size](IDatasetModelField.Size.htm)
		 Свойство Size возвращает
		 общую длину поля источника данных.


## Свойства, унаследованные от [INamedEntityModel](ForeSys.chm::/Interface/INamedEntityModel/INamedEntityModel.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Id](ForeSys.chm::/Interface/INamedEntityModel/INamedEntityModel.Id.htm)
		 Свойство Id возвращает
		 идентификатор объекта.


		 ![](../../Property_Image.gif)
		 [Key](ForeSys.chm::/Interface/INamedEntityModel/INamedEntityModel.Key.htm)
		 Свойство Key возвращает
		 ключ объекта.


		 ![](../../Property_Image.gif)
		 [Name](ForeSys.chm::/Interface/INamedEntityModel/INamedEntityModel.Name.htm)
		 Свойство Name возвращает
		 наименование объекта.


См. также:


[Интерфейсы сборки Db](../KeDb_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
