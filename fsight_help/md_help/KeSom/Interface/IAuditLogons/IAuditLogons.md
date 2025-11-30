# IAuditLogons

IAuditLogons
-


# IAuditLogons


Сборка: Metabase;


## Описание


Интерфейс IAuditLogons содержит
 свойства и методы списка входов в репозиторий.


## Иерархия наследования


           [IDalCursor](Dal.chm::/Interface/IDalCursor/IDalCursor.htm)


           IAuditLogons


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Comment](IAuditLogons.Comment.htm)
		 Свойство Comment возвращает
		 примечание к данной сессии.


		 ![](../../Property_Image.gif)
		 [CommentOut](IAuditLogons.CommentOut.htm)
		 Свойство CommentOut
		 возвращает сообщение о том, что пользователь был отключен.


		 ![](../../Property_Image.gif)
		 [Session](IAuditLogons.Session.htm)
		 Свойство Session возвращает
		 ключ сессии.


		 ![](../../Property_Image.gif)
		 [Stamp](IAuditLogons.Stamp.htm)
		 Свойство Stamp возвращает
		 дату и время входа в репозиторий.


		 ![](../../Property_Image.gif)
		 [StampOut](IAuditLogons.StampOut.htm)
		 Свойство StampOut возвращает
		 дату и время выхода из репозитория.


		 ![](../../Property_Image.gif)
		 [Station](IAuditLogons.Station.htm)
		 Свойство Station возвращает
		 наименование рабочей станции, с которой осуществлено подключение
		 к репозиторию.


		 ![](../../Property_Image.gif)
		 [Succeeded](IAuditLogons.Succeeded.htm)
		 Свойство Succeeded
		 возвращает признак удачного подключения к репозиторию.


		 ![](../../Property_Image.gif)
		 [UserDescription](IAuditLogons.UserDescription.htm)
		 Свойство UserDescription
		 возвращает полное наименование пользователя платформы.


		 ![](../../Property_Image.gif)
		 [UserIP](IAuditLogons.UserIP.htm)
		 Свойство UserIP возвращает
		 IP-адрес компьютера, с которого осуществлено подключение к репозиторию.


		 ![](../../Property_Image.gif)
		 [UserName](IAuditLogons.UserName.htm)
		 Свойство UserName возвращает
		 наименование пользователя, под которым осуществлено подключение
		 к платформе.


		 ![](../../Property_Image.gif)
		 [UserOS](IAuditLogons.UserOS.htm)
		 Свойство UserOS возвращает
		 наименование пользователя операционной системы.


		 ![](../../Property_Image.gif)
		 [UserSid](IAuditLogons.UserSid.htm)
		 Свойство UserSid возвращает
		 идентификатор субъекта безопасности пользователя.


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
