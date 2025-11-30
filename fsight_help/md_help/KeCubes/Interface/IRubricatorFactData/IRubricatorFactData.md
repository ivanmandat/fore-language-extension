# IRubricatorFactData

IRubricatorFactData
-


# IRubricatorFactData


## Описание


Интерфейс IRubricatorFactData
 содержит свойства и методы для работы с данными о временном ряде.


## Комментарии


Для получения информации о группе, в которую входит временной ряд, приведите
 данный интерфейс к интерфейсу [IMetaDictionaryDataInfo](KeRds.chm::/Interface/IMetaDictionaryDataInfo/IMetaDictionaryDataInfo.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CalendarLevel](IRubricatorFactData.CalendarLevel.htm)
		 Свойство CalendarLevel
		 определяет тип динамики данных временного ряда.


		 ![](../../Property_Image.gif)
		 [CompoundFactorKey](IRubricatorFactData.CompoundFactorKey.htm)
		 Свойство FactDataCompoundKey
		 возвращает составной ключ временного ряда.


		 ![](../../Property_Image.gif)
		 [Factor](IRubricatorFactData.Factor.htm)
		 Свойство Factor возвращает
		 временной ряд, которому принадлежат данные.


		 ![](../../Property_Image.gif)
		 [FactorKey](IRubricatorFactData.FactorKey.htm)
		 Свойство FactorKey
		 возвращает ключ временного ряда.


		 ![](../../Property_Image.gif)
		 [IsDeleted](IRubricatorFactData.IsDeleted.htm)
		 Свойство IsDeleted
		 определяет, удален ли временной ряд.


		 ![](../../Property_Image.gif)
		 [IsEmpty](IRubricatorFactData.IsEmpty.htm)
		 Свойство IsEmpty определяет,
		 установлен ли для временного ряда признак пустоты.


		 ![](../../Property_Image.gif)
		 [IsTemporary](IRubricatorFactData.IsTemporary.htm)
		 Свойство IsTemporary
		 возвращает признак того, что данные принадлежат временному ряду,
		 который не существует, но возможен.


		 ![](../../Property_Image.gif)
		 [Mnemo](IRubricatorFactData.Mnemo.htm)
		 Свойство Mnemo определяет
		 мнемонику временного ряда.


		 ![](../../Property_Image.gif)
		 [ObjectKey](IRubricatorFactData.ObjectKey.htm)
		 Свойство ObjectKey
		 определяет ключ объекта импорта.


		 ![](../../Property_Image.gif)
		 [RecordName](IRubricatorFactData.RecordName.htm)
		 Свойство RecordName
		 возвращает наименование временного ряда.


		 ![](../../Property_Image.gif)
		 [Revision](IRubricatorFactData.Revision.htm)
		 Свойство Revision возвращает
		 наименование текущей ревизии.


		 ![](../../Property_Image.gif)
		 [RevisionKey](IRubricatorFactData.RevisionKey.htm)
		 Свойство RevisionKey
		 возвращает ключ ревизии, в которой был создан временной
		 ряд.


		 ![](../../Property_Image.gif)
		 [Units](IRubricatorFactData.Units.htm)
		 Свойство Units определяет
		 ключ единицы измерения.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [GenerateMnemo](IRubricatorFactData.GenerateMnemo.htm)
		 Метод GenerateMnemo
		 генерирует мнемонику показателя.


		 ![](../../Sub_Image.gif)
		 [SaveAndRevise](IRubricatorFactData.SaveAndRevise.htm)
		 Метод SaveAndRevise
		 осуществляет сохранение данных показателя с заданными параметрами.


		 ![](../../Sub_Image.gif)
		 [SetMemberTuple](IRubricatorFactData.SetMemberTuple.htm)
		 Метод SetMemberTuple
		 устанавливает значения атрибутов показателя из элемента иерархии.


## Свойства, унаследованные от [IRubricatorRecord](../IRubricatorRecord/IRubricatorRecord.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CompoundKey](../IRubricatorRecord/IRubricatorRecord.CompoundKey.htm)
		 Свойство CompoundKey
		 возвращает составной ключ записи.


		 ![](../../Property_Image.gif)
		 [IsEdited](../IRubricatorRecord/IRubricatorRecord.IsEdited.htm)
		 Свойство IsEdited возвращает
		 признак того, доступна ли запись для редактирования.


		 ![](../../Property_Image.gif)
		 [Key](../IRubricatorRecord/IRubricatorRecord.Key.htm)
		 Свойство Key возвращает
		 ключ записи.


		 ![](../../Property_Image.gif)
		 [Record](../IRubricatorRecord/IRubricatorRecord.Record.htm)
		 Свойство Record возвращает
		 данные записи.


		 ![](../../Property_Image.gif)
		 [Rubricator](../IRubricatorRecord/IRubricatorRecord.Rubricator.htm)
		 Свойство Rubricator
		 возвращает данные базы данных временных рядов.


		 ![](../../Property_Image.gif)
		 [UseCompoundKey](../IRubricatorRecord/IRubricatorRecord.UseCompoundKey.htm)
		 Свойство UseCompoundKey
		 возвращает признак того, используется ли составной ключ.


## Методы, унаследованные от [IRubricatorRecord](../IRubricatorRecord/IRubricatorRecord.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [PersistChanges](../IRubricatorRecord/IRubricatorRecord.PersistChanges.htm)


		 Метод PersistChanges
		 определяет, производить ли сохранение изменений в базу данных.


		 ![](../../Sub_Image.gif)
		 [Save](../IRubricatorRecord/IRubricatorRecord.Save.htm)


		 Метод Save осуществляет
		 сохранение записи.


		 ![](../../Sub_Image.gif)
		 [Undo](../IRubricatorRecord/IRubricatorRecord.Undo.htm)


		 Метод Undo закрывает
		 запись без сохранения изменений.


		 ![](../../Sub_Image.gif)
		 [ValidateRules](../IRubricatorRecord/IRubricatorRecord.ValidateRules.htm)


		 Метод ValidateRules
		 осуществляет проверку выполнения правил валидации.


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
