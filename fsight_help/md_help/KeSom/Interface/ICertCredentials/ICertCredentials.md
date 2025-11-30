# ICertCredentials

ICertCredentials
-


# ICertCredentials


Сборка: Metabase;


## Описание


Интерфейс ICertCredentials содержит
 свойства учетных данных, используемых при подключении с цифровой подписью.


## Иерархия наследования


           [ICredentials](../ICredentials/ICredentials.htm)


           ICertCredentials


## Комментарии


Для создания учетных данных используйте метод [ISecurityPackage.CreateCredentials](../ISecurityPackage/ISecurityPackage.CreateCredentials.htm),
 указав в качестве значения параметра [AuthenticationMode.Certificate](../../Enums/AuthenticationMode.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AccessTokenStr](ICertCredentials.AccessTokenStr.htm)
		 Свойство AccessTokenStr
		 определяет параметры мандатного доступа пользователя.


		 ![](../../Property_Image.gif)
		 [Certificate](ICertCredentials.Certificate.htm)
		 Свойство Certificate
		 определяет идентификатор сертификата, который будет использоваться
		 для проверки цифровой подписи.


		 ![](../../Property_Image.gif)
		 [Cookie](ICertCredentials.Cookie.htm)
		 Свойство Cookie определяет
		 случайное значение, используемое для установления соответствия
		 между цифровой подписью и полученным блоком данных.


		 ![](../../Property_Image.gif)
		 [RolesStr](ICertCredentials.RolesStr.htm)
		 Свойство RolesStr определяет
		 группы пользователей, в которые будет включен пользователь.


		 ![](../../Property_Image.gif)
		 [Signature](ICertCredentials.Signature.htm)
		 Свойство Signature
		 определяет блок данных, подписанный цифровой подписью.


		 ![](../../Property_Image.gif)
		 [UserName](ICertCredentials.UserName.htm)
		 Свойство UserName определяет
		 пользователя, под которым осуществляется подключение к репозиторию.


## Свойства, унаследованные от [ICredentials](../ICredentials/ICredentials.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Authentication](../ICredentials/ICredentials.Authentication.htm)
		 Свойство Authentication
		 возвращает тип аутентификации, используемый при подключении с
		 текущими учетными данными.


		 ![](../../Property_Image.gif)
		 [ConnectAsPrivilege](../ICredentials/ICredentials.ConnectAsPrivilege.htm)
		 Свойство ConnectAsPrivilege
		 определяет подключение к серверу баз данных с заданной привилегией.

		Примечание.
		 Свойство не предназначено для использования в прикладном коде.
		 Оставлено для совместимости с предыдущими версиями.


		 ![](../../Property_Image.gif)
		 [ErrorMessage](../ICredentials/ICredentials.ErrorMessage.htm)
		 Свойство ErrorMessage
		 определяет комментарий для заведомо неудачного входа.


		 ![](../../Property_Image.gif)
		 [ForceError](../ICredentials/ICredentials.ForceError.htm)
		 Свойство ForceError
		 определяет заведомо неудачный вход в систему.


		 ![](../../Property_Image.gif)
		 [Role](../ICredentials/ICredentials.Role.htm)
		 Свойство Role
		 определяет параметры роли приложения.


		 ![](../../Property_Image.gif)
		 [SlotCount](../ICredentials/ICredentials.SlotCount.htm)
		 Свойство SlotCount
		 возвращает количество столбцов в таблице учетных данных репозитория.


		 ![](../../Property_Image.gif)
		 [SlotName](../ICredentials/ICredentials.SlotName.htm)
		 Свойство SlotName возвращает
		 наименование столбца таблицы учетных данных репозитория.


		 ![](../../Property_Image.gif)
		 [SlotValue](../ICredentials/ICredentials.SlotValue.htm)
		 Свойство SlotValue
		 определяет значение столбца таблицы учетных данных репозитория.


		 ![](../../Property_Image.gif)
		 [UserCertificate](../ICredentials/ICredentials.UserCertificate.htm)
		 Свойство UserCertificate
		 определяет подключения пользователя по сертификату.


		 ![](../../Property_Image.gif)
		 [UserDescription](../ICredentials/ICredentials.UserDescription.htm)
		 Свойство UserDescription
		 определяет полное имя пользователя для занесения в протокол доступа.


		 ![](../../Property_Image.gif)
		 [UserIP](../ICredentials/ICredentials.UserIP.htm)
		 Свойство UserIP определяет
		 IP адрес пользователя для занесения в протокол доступа.


		 ![](../../Property_Image.gif)
		 [UserOS](../ICredentials/ICredentials.UserOS.htm)
		 Свойство UserOS определяет
		 имя пользователя ОС для занесения в протокол доступа.


		 ![](../../Property_Image.gif)
		 [UserStation](../ICredentials/ICredentials.UserStation.htm)
		 Свойство UserStation
		 определяет название рабочей станции пользователя для занесения
		 в протокол доступа.


		 ![](../../Property_Image.gif)
		 [UseUserOSForDocumentLabels](../ICredentials/ICredentials.UseUserOSForDocumentLabels.htm)
		 Свойство UseUserOSForDocumentLabels
		 определяет, будет ли отображено в маркировке документа имя пользователя
		 ОС.


## Методы, унаследованные от [ICredentials](../ICredentials/ICredentials.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Assign](../ICredentials/ICredentials.Assign.htm)
		 Метод Assign заполняет
		 учетные данные пользователя, учетными данными, передаваемыми посредством
		 параметра.


См. также:


[Интерфейсы
 сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
