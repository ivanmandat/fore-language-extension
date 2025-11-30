# IAuditOperations

IAuditOperations
-


# IAuditOperations


Сборка: Metabase;


## Описание


Интерфейс IAuditOperations предназначен
 для работы с записями протокола безопасности.


## Иерархия наследования


           [IDalCursor](Dal.chm::/Interface/IDalCursor/IDalCursor.htm)


           IAuditLogons


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Comment](IAuditOperations.Comment.htm)
		 Свойство Comment возвращает
		 примечание к операции над объектом.


		 ![](../../Property_Image.gif)
		 [DateOrderAsccending](IAuditOperations.DateOrderAsccending.htm)
		 Свойство DateOrderAsccending
		 возвращает порядок сортировки протокола доступа по дате.


		 ![](../../Property_Image.gif)
		 [IsLogon](IAuditOperations.IsLogon.htm)
		 Свойство IsLogon возвращает
		 значение, указывающее, соответствует ли текущая запись операции
		 подключения к репозиторию.


		 ![](../../Property_Image.gif)
		 [IsObjectLabelSupported](IAuditOperations.IsObjectLabelSupported.htm)
		 Свойство IsObjectLabelSupported
		 возвращает признак того, установлена ли для объекта, над
		 которым производится операция, метка критичности, соответствующая
		 уровню доступа.


		 ![](../../Property_Image.gif)
		 [Level](IAuditOperations.Level.htm)
		 Свойство Level возвращает
		 уровень вложенности операции.


		 ![](../../Property_Image.gif)
		 [Logon](IAuditOperations.Logon.htm)
		 Свойство Logon возвращает
		 вход в репозиторий, которому соответствует данная операция.


		 ![](../../Property_Image.gif)
		 [Mask](IAuditOperations.Mask.htm)
		 Свойство Mask возвращает
		 маску операции.


		 ![](../../Property_Image.gif)
		 [Name](IAuditOperations.Name.htm)
		 Свойство Name возвращает
		 наименование операции над объектом.


		 ![](../../Property_Image.gif)
		 [ObjectClass](IAuditOperations.ObjectClass.htm)
		 Свойство ObjectClass
		 возвращает класс объекта, над которым произведена операция.


		 ![](../../Property_Image.gif)
		 [ObjectId](IAuditOperations.ObjectId.htm)
		 Свойство ObjectId возвращает
		 идентификатор объекта, над которым произведена операция.


		 ![](../../Property_Image.gif)
		 [ObjectKey](IAuditOperations.ObjectKey.htm)
		 Свойство ObjectKey
		 возвращает ключ объекта, над которым произведена операция.


		 ![](../../Property_Image.gif)
		 [ObjectLabel](IAuditOperations.ObjectLabel.htm)
		 Свойство ObjectLabel
		 возвращает метку критичности, соответствующую уровню доступа объекта,
		 над которым произведена операция.


		 ![](../../Property_Image.gif)
		 [ObjectName](IAuditOperations.ObjectName.htm)
		 Свойство ObjectName
		 возвращает наименование объекта, над которым произведена операция.


		 ![](../../Property_Image.gif)
		 [Operation](IAuditOperations.Operation.htm)
		 Свойство Operation
		 возвращает номер операции.


		 ![](../../Property_Image.gif)
		 [Position](IAuditOperations.Position.htm)
		 Свойство Position возвращает
		 номер выполнения операции, относительно операции, связанной с
		 зависимым объектом.


		 ![](../../Property_Image.gif)
		 [Session](IAuditOperations.Session.htm)
		 Свойство Session возвращает
		 ключ сессии, в которой произошла операция.


		 ![](../../Property_Image.gif)
		 [Stamp](IAuditOperations.Stamp.htm)
		 Свойство Stamp возвращает
		 дату и время операции. Дата представляется в системном формате
		 дат.


		 ![](../../Property_Image.gif)
		 [Succeeded](IAuditOperations.Succeeded.htm)
		 Свойство Succeeded
		 возвращает признак удачного выполнения операции.


## Свойства, унаследованные от [IDalCursor](Dal.chm::/Interface/IDalCursor/IDalCursor.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Command](Dal.chm::/Interface/IDalCursor/IDalCursor.Command.htm)

		 Свойство Command возвращает
		 объект, предназначенный для работы с базой данных с помощью SQL-запросов.


		 ![](../../Property_Image.gif)
		 [Fields](Dal.chm::/Interface/IDalCursor/IDalCursor.Fields.htm)
		 Свойство Fields возвращает
		 коллекцию полей курсора, полученного после выполнения SQL-запроса.


## Методы, унаследованные от [IDalCursor](Dal.chm::/Interface/IDalCursor/IDalCursor.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Close](../../../dal/interface/idalcursor/idalcursor.close.htm)
		 Метод Close осуществляет
		 закрытие курсора.


		 ![](../../Sub_Image.gif)
		 [Eof](Dal.chm::/Interface/IDalCursor/IDalCursor.Eof.htm)
		 Метод Eof возвращает
		 признак, является ли текущая запись последней в таблице, получившейся
		 в результате выполнения команды на сервере БД.


		 ![](../../Sub_Image.gif)
		 [Next](Dal.chm::/Interface/IDalCursor/IDalCursor.Next.htm)
		 Метод Next осуществляет
		 переход на следующую запись в таблице, которая получилась в результате
		 выполнения команды на сервере БД.


См. также:


[Интерфейсы сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
