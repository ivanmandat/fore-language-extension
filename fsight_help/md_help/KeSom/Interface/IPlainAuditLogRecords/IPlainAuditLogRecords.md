# IPlainAuditLogRecords

IPlainAuditLogRecords
-


# IPlainAuditLogRecords


Сборка: Metabase;


## Описание


Интерфейс IPlainAuditLogRecords
 предназначен для работы с записями протокола доступа в линейном виде.


## Иерархия наследования


           [IDalCursor](Dal.chm::/Interface/IDalCursor/IDalCursor.htm)


           IPlainAuditLogRecords


## Комментарии


Протокол доступа в линейном виде возвращает метод [IAuditLog.OpenPlainLog](../IAuditLog/IAuditLog.OpenPlainLog.htm).
 В список будут включены как записи об операциях над объектами, так и записи
 о подключениях к репозиторию.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Comment](IPlainAuditLogRecords.Comment.htm)
		 Свойство Comment возвращает
		 примечание к выполненному действию.


		 ![](../../Property_Image.gif)
		 [IsLogon](IPlainAuditLogRecords.IsLogon.htm)
		 Свойство IsLogon возвращает
		 значение, указывающее, соответствует ли текущая запись операции
		 подключения к репозиторию.


		 ![](../../Property_Image.gif)
		 [Name](IPlainAuditLogRecords.Name.htm)
		 Свойство Name возвращает
		 наименование операции над объектом.


		 ![](../../Property_Image.gif)
		 [ObjectClass](IPlainAuditLogRecords.ObjectClass.htm)
		 Свойство ObjectClass
		 возвращает класс объекта, над которым произведена операция.


		 ![](../../Property_Image.gif)
		 [ObjectId](IPlainAuditLogRecords.ObjectId.htm)
		 Свойство ObjectId возвращает
		 идентификатор объекта, над которым произведена операция.


		 ![](../../Property_Image.gif)
		 [ObjectName](IPlainAuditLogRecords.ObjectName.htm)
		 Свойство ObjectName
		 возвращает наименование объекта, над которым произведена операция.


		 ![](../../Property_Image.gif)
		 [Stamp](IPlainAuditLogRecords.Stamp.htm)
		 Свойство Stamp возвращает
		 дату и время выполнения действия.


		 ![](../../Property_Image.gif)
		 [StampOut](IPlainAuditLogRecords.StampOut.htm)
		 Свойство StampOut возвращает
		 дату и время выхода из репозитория.


		 ![](../../Property_Image.gif)
		 [Station](IPlainAuditLogRecords.Station.htm)
		 Свойство Station возвращает
		 наименование рабочей станции, с которой выполнялось действие.


		 ![](../../Property_Image.gif)
		 [Succeeded](IPlainAuditLogRecords.Succeeded.htm)
		 Свойство Succeeded
		 возвращает признак успешного выполнения действия.


		 ![](../../Property_Image.gif)
		 [UserIP](IPlainAuditLogRecords.UserIP.htm)
		 Свойство UserIP возвращает
		 IP-адрес компьютера, с которого выполнялось действие.


		 ![](../../Property_Image.gif)
		 [UserName](IPlainAuditLogRecords.UserName.htm)
		 Свойство UserName возвращает
		 наименование пользователя репозитория, которым выполнялось действие.


		 ![](../../Property_Image.gif)
		 [UserOS](IPlainAuditLogRecords.UserOS.htm)
		 Свойство UserOS возвращает
		 наименование пользователя операционной системы, под которым выполнялось
		 действие.


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


[Интерфейсы
 сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
