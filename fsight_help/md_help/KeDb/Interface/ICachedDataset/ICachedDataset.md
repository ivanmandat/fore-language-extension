# ICachedDataset

ICachedDataset
-


# ICachedDataset


## Описание


Интерфейс ICachedDataset содержит
 свойства и методы для работы с кешем источника данных.


## Комментарии


Кеш источника данных представляет из себя организованный в памяти компьютера
 буфер, содержащий определенное количество записей источника, с которыми
 осуществляется работа в текущий момент. В кеше доступна фильтрация, поиск
 необходимых данных, а также редактирование существующих и создание новых
 записей. После сохранения изменений в кеше организуются соответствующие
 запросы и осуществляется обновление данных в соответствующем источнике
 данных.


Примечание.
 Если с использованием драйвера ODBC осуществляется подключение к файлу
 с данными (текстовый файл, файл Microsoft Excel и другие), то работа с
 записями будет производиться только в режиме чтения. Добавление/удаление/изменение
 записей не поддерживается.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Filter](ICachedDataset.Filter.htm)
		 Свойство Filter возвращает
		 условие фильтрации данных в кеше.


		 ![](../../Property_Image.gif)
		 [Filtered](ICachedDataset.Filtered.htm)
		 Свойство Filtered определяет
		 текущее состояние фильтрации данных в кеше.


		 ![](../../Property_Image.gif)
		 [IndexFields](ICachedDataset.IndexFields.htm)
		 Свойство IndexFields
		 определяет поля сортировки кеша источника данных.


		 ![](../../Property_Image.gif)
		 [Instance](ICachedDataset.Instance.htm)
		 Свойство Instance возвращает
		 объект-родитель кеша источника данных.


		 ![](../../Property_Image.gif)
		 [MasterFields](ICachedDataset.MasterFields.htm)
		 Свойство MasterFields
		 определяет список полей главного источника данных, по которым
		 будет осуществляться фильтрация данных в привязанном источнике
		 данных.


		 ![](../../Property_Image.gif)
		 [MasterSource](ICachedDataset.MasterSource.htm)
		 Свойство MasterSource
		 определяет источник данных, который является главным при связи
		 нескольких источников данных.


		 ![](../../Property_Image.gif)
		 [ReadOnly](ICachedDataset.ReadOnly.htm)
		 Свойство ReadOnly определяет,
		 будет ли источник данных открыт только для чтения.


		 ![](../../Property_Image.gif)
		 [RecNo](ICachedDataset.RecNo.htm)
		 Свойство RecNo определяет
		 индекс записи, на которой установлен курсор в кеше.


		 ![](../../Property_Image.gif)
		 [RecordCount](ICachedDataset.RecordCount.htm)
		 Свойство RecordCount
		 возвращает текущее количество кешированных записей.


		 ![](../../Property_Image.gif)
		 [RecordCountAll](ICachedDataset.RecordCountAll.htm)
		 Свойство RecordCountAll
		 возвращает общее количество записей в источнике данных, которое
		 может быть помещено в кеш.


		 ![](../../Property_Image.gif)
		 [RecordsBufferThreshold](ICachedDataset.RecordsBufferThreshold.htm)
		 Свойство RecordsBufferThreshold
		 определяет пороговое количество записей в кеше.


		 ![](../../Property_Image.gif)
		 [RecRange](ICachedDataset.RecRange.htm)
		 Свойство RecRange определяет
		 количество кешируемых от текущей позиции вперед записей.


		 ![](../../Property_Image.gif)
		 [State](ICachedDataset.State.htm)
		 Свойство State возвращает
		 текущее состояние источника данных.


## Свойства, унаследованные от [IDatasetInstance](../IDatasetInstance/IDatasetInstance.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Dataset](../IDatasetInstance/IDatasetInstance.Dataset.htm)
		 Свойство Dataset возвращает
		 структуру источника данных.


		 ![](../../Property_Image.gif)
		 [FieldDefs](../IDatasetInstance/IDatasetInstance.FieldDefs.htm)
		 Свойство FieldDefs
		 возвращает структуру всех полей источника данных.


		 ![](../../Property_Image.gif)
		 [Fields](../IDatasetInstance/IDatasetInstance.Fields.htm)
		 Свойство Fields возвращает
		 коллекцию значений полей текущей записи источника данных.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddCalculatedField](ICachedDataset.AddCalculatedField.htm)
		 Метод AddCalculatedField
		 создает вычисляемое поле в кеше.


		 ![](../../Sub_Image.gif)
		 [Append](ICachedDataset.Append.htm)
		 Метод Append добавляет
		 запись в конце таблицы и переходит к ее редактированию.


		 ![](../../Sub_Image.gif)
		 [Bof](ICachedDataset.Bof.htm)
		 Метод Bof возвращает
		 True, если курсор расположен
		 на первой записи кеша.


		 ![](../../Sub_Image.gif)
		 [Cancel](ICachedDataset.Cancel.htm)
		 Метод Cancel отменяет
		 изменения в текущей записи.


		 ![](../../Sub_Image.gif)
		 [CreateLookup](ICachedDataset.CreateLookup.htm)
		 Метод CreateLookup
		 создает объект, осуществляющий поиск значений в кеше источника
		 данных.


		 ![](../../Sub_Image.gif)
		 [Delete](ICachedDataset.Delete.htm)
		 Метод Delete удаляет
		 текущую запись.


		 ![](../../Sub_Image.gif)
		 [Edit](ICachedDataset.Edit.htm)
		 Метод Edit переводит
		 источник данных в режим редактирования текущей записи.


		 ![](../../Sub_Image.gif)
		 [EofData](ICachedDataset.EofData.htm)
		 Метод EofData возвращает
		 True, если курсор стоит
		 на записи, соответствующей последней записи в исходных данных
		 источника.


		 ![](../../Sub_Image.gif)
		 [FetchToRecord](ICachedDataset.FetchToRecord.htm)
		 Метод FetchToRecord
		 осуществляет загрузку записей из источника данных в кеш.


		 ![](../../Sub_Image.gif)
		 [GetFieldValue](ICachedDataset.GetFieldValue.htm)
		 Метод GetFieldValue
		 возвращает значение кешированного поля без перемещения по записям.


		 ![](../../Sub_Image.gif)
		 [Insert](ICachedDataset.Insert.htm)
		 Метод Insert вставляет
		 запись в текущую позицию и переходит к ее редактированию.


		 ![](../../Sub_Image.gif)
		 [Last](ICachedDataset.Last.htm)
		 Метод Last осуществляет
		 переход к последней записи в кеше.


		 ![](../../Sub_Image.gif)
		 [Post](ICachedDataset.Post.htm)
		 Метод Post сохраняет
		 изменения в текущей записи.


		 ![](../../Sub_Image.gif)
		 [Prior](ICachedDataset.Prior.htm)
		 Метод Prior осуществляет
		 переход к предыдущей записи.


		 ![](../../Sub_Image.gif)
		 [Truncate](ICachedDataset.Truncate.htm)
		 Метод Truncate удаляет
		 все записи источника данных.


## Методы, унаследованные от [IDatasetInstance](../IDatasetInstance/IDatasetInstance.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Close](../IDatasetInstance/IDatasetInstance.Close.htm)
		 Метод Close закрывает
		 источник данных.


		 ![](../../Sub_Image.gif)
		 [CreateBatchUpdate](../IDatasetInstance/IDatasetInstance.CreateBatchUpdate.htm)
		 Метод CreateBatchUpdate
		 создает обновления данных источника данных.


		 ![](../../Sub_Image.gif)
		 [Eof](../IDatasetInstance/IDatasetInstance.Eof.htm)
		 Метод Eof возвращает
		 True, если курсор находится
		 на последней записи в источнике данных, либо если в источнике
		 данных нет ни одной записи.


		 ![](../../Sub_Image.gif)
		 [Execute](../IDatasetInstance/IDatasetInstance.Execute.htm)
		 Метод Execute запускает
		 запрос на выполнение и возвращает количество обработанных записей.


		 ![](../../Sub_Image.gif)
		 [First](../IDatasetInstance/IDatasetInstance.First.htm)
		 Метод First осуществляет
		 переход на первую запись источника данных.


		 ![](../../Sub_Image.gif)
		 [Next](../IDatasetInstance/IDatasetInstance.Next.htm)
		 Метод Next осуществляет
		 переход на следующую запись в источнике данных.


		 ![](../../Sub_Image.gif)
		 [OpenCached](../IDatasetInstance/IDatasetInstance.OpenCached.htm)
		 Метод OpenCached позволяет
		 работать с кешем источника данных.


См. также:


[Интерфейсы сборки Db](../KeDb_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
