# ICubeMetaLoader

ICubeMetaLoader
-


# ICubeMetaLoader


Сборка: Cubes;


## Описание


Интерфейс ICubeMetaLoader используется
 для загрузки временных рядов из источника данных.


## Иерархия наследования


           ICubeMetaLoader


## Комментарии


Для получения объекта для загрузки временных рядов из источника данных:


	- приведите объект, возвращаемый свойством [IImportRequestDefinition.ProviderParams](../IImportRequestDefinition/IImportRequestDefinition.ProviderParams.htm),
	 к интерфейсу ICubeMetaLoader;


	- [создайте
	 объект](KeSom.chm::/Interface/IMetabase/IMetabase.CreateCreateInfo.htm) класса [MetabaseObjectClass.KE_CLASS_CUBEMETALOADER](kesom.chm::/enums/metabaseobjectclass.htm)
	 и приведите его к интерфейсу ICubeMetaLoader.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AutoPeriod](ICubeMetaLoader.AutoPeriod.htm)


		 Свойство AutoPeriod
		 возвращает параметры периода загрузки показателей.


		 ![](../../Property_Image.gif)
		 [Bindings](ICubeMetaLoader.Bindings.htm)


		 Свойство Bindings определяет
		 привязку атрибутов базы данных временных рядов с полями источника
		 данных.


		 ![](../../Property_Image.gif)
		 [CanLockBMOD](ICubeMetaLoader.CanLockBMOD.htm)


		 Свойство CanLockBMOD
		 определяет режим блокировки системной таблицы во время загрузки
		 показателей в базу данных временных рядов.


		 ![](../../Property_Image.gif)
		 [Data](ICubeMetaLoader.Data.htm)


		 Свойство Data определяет
		 объект, являющийся источником данных.


		 ![](../../Property_Image.gif)
		 [DataOffset](ICubeMetaLoader.DataOffset.htm)


		 Свойство DataOffset
		 определяет строку, начиная с которой будут загружаться данные.


		 ![](../../Property_Image.gif)
		 [DecreasePeriod](ICubeMetaLoader.DecreasePeriod.htm)


		 Свойство DecreasePeriod
		 определяет, уменьшать ли период временных рядов в базе данных
		 временных рядов.


		 ![](../../Property_Image.gif)
		 [DisableTransactions](ICubeMetaLoader.DisableTransactions.htm)


		 Свойство DisableTransactions
		 определяет, выполнять ли импорт временных рядов за одну транзакцию.


		 ![](../../Property_Image.gif)
		 [DuplicateCheck](ICubeMetaLoader.DuplicateCheck.htm)


		 Свойство DuplicateCheck
		 определяет режим исключения дублирующих значений.


		 ![](../../Property_Image.gif)
		 [ImportCallback](ICubeMetaLoader.ImportCallback.htm)


		 Свойство ImportCallback
		 определяет объект, используемый для обработки событий, возникающих
		 во время импорта временных рядов.


		 ![](../../Property_Image.gif)
		 [ImportObjectKey](ICubeMetaLoader.ImportObjectKey.htm)


		 Свойство ImportObjectKey
		 определяет ключ объекта, выполняющего загрузку временных рядов.


		 ![](../../Property_Image.gif)
		 [IncreasePeriod](ICubeMetaLoader.IncreasePeriod.htm)


		 Свойство IncreasePeriod
		 определяет, переопределять ли даты начала и окончания показателей
		 в соответствии с загружаемыми данными.


		 ![](../../Property_Image.gif)
		 [InvalidFactors](ICubeMetaLoader.InvalidFactors.htm)


		 Свойство InvalidFactors
		 возвращает массив ключей показателей, при загрузке которых произошла
		 ошибка.


		 ![](../../Property_Image.gif)
		 [LoadType](ICubeMetaLoader.LoadType.htm)


		 Свойство LoadType определяет
		 режим загрузки временных рядов.


		 ![](../../Property_Image.gif)
		 [LoadEmptyValues](ICubeMetaLoader.LoadEmptyValues.htm)


		 Свойство LoadEmptyValues
		 определяет, загружать ли пустые значения временных рядов.


		 ![](../../Property_Image.gif)
		 [LoadMode](ICubeMetaLoader.LoadMode.htm)


		 Свойство LoadMode определяет
		 режим обновления информации по рядам.


		 ![](../../Property_Image.gif)
		 [LoadNullForMissMatchValueType](ICubeMetaLoader.LoadNullForMissMatchValueType.htm)


		 Свойство LoadNullForMissMatchValueType
		 определяет, записывать ли значение Null
		 при импорте значений, не соответствующих типу поля приёмника.


		 ![](../../Property_Image.gif)
		 [Log](ICubeMetaLoader.Log.htm)


		 Свойство Log возвращает
		 отчет о загрузке временных рядов.


		 ![](../../Property_Image.gif)
		 [LogDateParseError](ICubeMetaLoader.LogDateParseError.htm)


		 Свойство LogDateParseError
		 определяет, нужно ли заносить в отчет о загрузке временных рядов
		 информацию об ошибке разбора дат.


		 ![](../../Property_Image.gif)
		 [NewRevisionName](ICubeMetaLoader.NewRevisionName.htm)


		 Свойство NewRevisionName
		 определяет имя создаваемой ревизии.


		 ![](../../Property_Image.gif)
		 [OverWriteWholeFactorValues](ICubeMetaLoader.OverWriteWholeFactorValues.htm)


		 Свойство OverWriteWholeFactorValues
		 определяет, перезаписывать ли при импорте весь ряд целиком.


		 ![](../../Property_Image.gif)
		 [Rubricator](ICubeMetaLoader.Rubricator.htm)


		 Свойство Rubricator
		 определяет базу данных временных рядов, в которую будут загружаться
		 данные.


		 ![](../../Property_Image.gif)
		 [RubricatorInstance](ICubeMetaLoader.RubricatorInstance.htm)


		 Свойство RubricatorInstance
		 определяет данные базы данных временных рядов.


		 ![](../../Property_Image.gif)
		 [ScenarioKey](ICubeMetaLoader.ScenarioKey.htm)


		 Свойство ScenarioKey
		 определяет ключ сценария, по которому будут загружаться данные.


		 ![](../../Property_Image.gif)
		 [ScaleValues](ICubeMetaLoader.ScaleValues.htm)


		 Свойство ScaleValues
		 определяет, нормализовывать ли данные при импорте.


		 ![](../../Property_Image.gif)
		 [SkipEmptyRows](ICubeMetaLoader.SkipEmptyRows.htm)


		 Свойство SkipEmptyRows
		 определяет, пропускать ли пустые строки при импорте данных.


		 ![](../../Property_Image.gif)
		 [SourceFieldStringSize](ICubeMetaLoader.SourceFieldStringSize.htm)


		 Свойство SourceFieldStringSize
		 определяет, какой длины будут считаться строковые поля в источнике
		 данных.


		 ![](../../Property_Image.gif)
		 [TreatEmptyStringAsNull](ICubeMetaLoader.TreatEmptyStringAsNull.htm)


		 Свойство TreatEmptyStringAsNull
		 определяет, записывать ли пустые строки как Null.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [LoadData](ICubeMetaLoader.LoadData.htm)


		 Метод LoadData осуществляет
		 загрузку показателей из источника данных.


		 ![](../../Sub_Image.gif)
		 [TestLoad](ICubeMetaLoader.TestLoad.htm)


		 Метод TestLoad осуществляет
		 тестовую загрузку показателей из источника данных.


См. также:


[Интерфейсы сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
