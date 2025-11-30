# IEtlPlainDataSplit

IEtlPlainDataSplit
-


# IEtlPlainDataSplit


## Описание


Интерфейс IEtlPlainDataSplit
 содержит свойства и методы объекта преобразования - Разделение.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Condition](IEtlPlainDataSplit.Condition.htm)
		 Свойство Condition
		 возвращает объект, содержащией формулу условия.


		 ![](../../Property_Image.gif)
		 [Count](IEtlPlainDataSplit.Count.htm)
		 Свойство Count возвращает
		 количество условий.


		 ![](../../Property_Image.gif)
		 [Mapper](IEtlPlainDataSplit.Mapper.htm)
		 Свойство Mapper возвращает
		 объект, содержащий связь полей между приёмником и источником.


		 ![](../../Property_Image.gif)
		 [PlainInput](IEtlPlainDataSplit.PlainInput.htm)
		 Свойство PlainInput
		 возвращает объект, содержащий входящий источник данных.


		 ![](../../Property_Image.gif)
		 [PlainOutputs](IEtlPlainDataSplit.PlainOutputs.htm)
		 Свойство PlainOutputs
		 возвращает объект, содержащий исходящие источники данных.


## Свойства, унаследованные от [IEtlPlainDataTransformer](../IEtlPlainDataTransformer/IEtlPlainDataTransformer.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ErrorOutput](../IEtlPlainDataTransformer/IEtlPlainDataTransformer.ErrorOutput.htm)
		 Свойство ErrorOutput
		 возвращает параметры указанного выхода с ошибочными записями.


		 ![](../../Property_Image.gif)
		 [ErrorOverlimitPolicy](../IEtlPlainDataTransformer/IEtlPlainDataTransformer.ErrorOverlimitPolicy.htm)
		 Свойство ErrorOverlimitPolicy
		 определяет действие, выполняемое при превышении максимального
		 количества ошибочных записей.


		 ![](../../Property_Image.gif)
		 [ErrorStopLimit](../IEtlPlainDataTransformer/IEtlPlainDataTransformer.ErrorStopLimit.htm)
		 Свойство ErrorStopLimit
		 определяет максимальное количество записей, выводимых в ошибочный
		 выход.


## Свойства, унаследованные от [IEtlObject](../IEtlObject/IEtlObject.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ConnCompId](../IEtlObject/IEtlObject.ConnCompId.htm)
		 Свойство ConnCompId
		 определяет индекс компоненты связности объекта задачи ETL.


		 ![](../../Property_Image.gif)
		 [Description](../IEtlObject/IEtlObject.Description.htm)
		 Свойство Description
		 определяет описание (примечание) объекта задачи ETL.


		 ![](../../Property_Image.gif)
		 [Id](../IEtlObject/IEtlObject.Id.htm)
		 Свойство Id определяет
		 идентификатор объекта задачи ETL.


		 ![](../../Property_Image.gif)
		 [InputType](../IEtlObject/IEtlObject.InputType.htm)
		 Свойство InputType
		 возвращает тип входа объекта задачи ETL.


		 ![](../../Property_Image.gif)
		 [IsActive](../IEtlObject/IEtlObject.IsActive.htm)
		 Свойство IsActive возвращает
		 признак включения объекта в задачу ETL.


		 ![](../../Property_Image.gif)
		 [Name](../IEtlObject/IEtlObject.Name.htm)
		 Свойство Name определяет
		 наименование объекта задачи ETL.


		 ![](../../Property_Image.gif)
		 [ObjectType](../IEtlObject/IEtlObject.ObjectType.htm)
		 Свойство ObjectType
		 возвращает тип объекта задачи ETL.


		 ![](../../Property_Image.gif)
		 [ObjectTypeName](../IEtlObject/IEtlObject.ObjectTypeName.htm)
		 Свойство ObjectTypeName
		 возвращает название типа объекта задачи ETL.


		 ![](../../Property_Image.gif)
		 [OutputType](../IEtlObject/IEtlObject.OutputType.htm)
		 Свойство OutputType
		 возвращает тип выхода объекта задачи ETL.


		 ![](../../Property_Image.gif)
		 [Task](../IEtlObject/IEtlObject.Task.htm)
		 Свойство Task возвращает
		 задачу ETL, в которой создан объект.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](IEtlPlainDataSplit.Add.htm)
		 Метод Add добавляет
		 новое условие.


		 ![](../../Sub_Image.gif)
		 [Clear](IEtlPlainDataSplit.Clear.htm)
		 Метод Clear осуществляет
		 очистку списка условий.


		 ![](../../Sub_Image.gif)
		 [Delete](IEtlPlainDataSplit.Delete.htm)
		 Метод Delete осуществляет
		 удаление условия.


		 ![](../../Sub_Image.gif)
		 [Edit](IEtlPlainDataSplit.Edit.htm)
		 Метод Edit создает
		 копию объекта для редактирования.


		 ![](../../Sub_Image.gif)
		 [MoveDown](IEtlPlainDataSplit.MoveDown.htm)
		 Метод MoveDown осуществляет
		 перемещение условия на одну позицию вниз.


		 ![](../../Sub_Image.gif)
		 [MoveUp](IEtlPlainDataSplit.MoveUp.htm)
		 Метод MoveUp осуществляет
		 перемещение условия на одну позицию вверх.


		 ![](../../Sub_Image.gif)
		 [Save](IEtlPlainDataSplit.Save.htm)
		 Метод Save сохраняет
		 результаты редактирования.


## Методы, унаследованные от [IEtlObject](../IEtlObject/IEtlObject.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [GetControlledObjects](../IEtlObject/IEtlObject.GetControlledObjects.htm)
		 Метод GetControlledObjects
		 возвращает коллекцию описаний объектов репозитория, управляемых
		 текущим объектом задачи ETL.


		 ![](../../Sub_Image.gif)
		 [Remove](../IEtlObject/IEtlObject.Remove.htm)
		 Метод Remove удаляет
		 объект задачи ETL.


См. также:


[Интерфейсы
 сборки Etl](../KeEtl_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
