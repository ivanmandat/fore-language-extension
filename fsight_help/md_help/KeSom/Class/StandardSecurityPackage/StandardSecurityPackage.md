# StandardSecurityPackage

StandardSecurityPackage
-


# StandardSecurityPackage


## Описание


Класс StandardSecurityPackage
 реализует стандартный пакет безопасности платформы.


## Свойства, унаследованные от [ISecurityPackage](../../Interface/ISecurityPackage/ISecurityPackage.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CertProvider](../../Interface/ISecurityPackage/ISecurityPackage.CertProvider.htm)
		 Свойство CertProvider
		 возвращает поставщик сертификатов.


		 ![](../../Property_Image.gif)
		 [Id](../../Interface/ISecurityPackage/ISecurityPackage.Id.htm)
		 Свойство Id возвращает
		 идентификатор модуля безопасности.


		 ![](../../Property_Image.gif)
		 [Name](../../Interface/ISecurityPackage/ISecurityPackage.Name.htm)
		 Свойство Name возвращает
		 наименование модуля безопасности.


## Методы, унаследованные от [ISecurityPackage](../../Interface/ISecurityPackage/ISecurityPackage.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CopyCredentials](../../Interface/ISecurityPackage/ISecurityPackage.CopyCredentials.htm)
		 Метод CopyCredentials
		 копирует учетные данные из объекта, который передается в качестве
		 входного параметра.


		 ![](../../Sub_Image.gif)
		 [CreateCredentials](../../Interface/ISecurityPackage/ISecurityPackage.CreateCredentials.htm)
		 Метод CreateCredentials
		 создает учетные данные репозитория с заданным типом аутентификации.


		 ![](../../Sub_Image.gif)
		 [CreateLogonData](../../Interface/ISecurityPackage/ISecurityPackage.CreateLogonData.htm)
		 Метод CreateLogonData
		 возвращает объект, содержащий свойства параметров модуля безопасности.


		 ![](../../Sub_Image.gif)
		 [GetAdminCredentials](../../Interface/ISecurityPackage/ISecurityPackage.GetAdminCredentials.htm)
		 Метод GetAdminCredentials
		 создает учетные данные администратора в соответствии с параметрами
		 указанного подключения.


		 ![](../../Sub_Image.gif)
		 [IsCompatibleDriver](../../Interface/ISecurityPackage/ISecurityPackage.IsCompatibleDriver.htm)
		 Метод IsCompatibleDriver
		 возвращает признак поддержки текущим модулем безопасности указанного
		 драйвера БД.


		 ![](../../Sub_Image.gif)
		 [PerformLogon](../../Interface/ISecurityPackage/ISecurityPackage.PerformLogon.htm)
		 Метод PerformLogon
		 возвращает объект, содержащий новое соединение с сервером БД.


		 ![](../../Sub_Image.gif)
		 [SupportsAuthentication](../../Interface/ISecurityPackage/ISecurityPackage.SupportsAuthentication.htm)
		 Метод SupportsAuthentication
		 возвращает признак поддержки текущим модулем безопасности указанного
		 вида аутентификации.


См. также:


[Классы сборки Metabase](../KeSom_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
