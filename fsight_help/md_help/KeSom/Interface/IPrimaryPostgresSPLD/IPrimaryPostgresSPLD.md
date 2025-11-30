# IPrimaryPostgresSPLD

IPrimaryPostgresSPLD
-


# IPrimaryPostgresSPLD


Сборка: Metabase;


## Описание


Интерфейс IPrimaryPostgresSPLD
 содержит свойства и методы модуля безопасности, используемого при подключении
 к серверам на базе СУБД PostgreSQL.


## Иерархия наследования


           [ISecurityPackageLogonData](../ISecurityPackageLogonData/ISecurityPackageLogonData.htm)


           IPrimaryPostgresSPLD


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CaseSensitive](IPrimaryPostgresSPLD.CaseSensitive.htm)
		 Свойство CaseSensitive
		 определяет признак учёта регистра при работе с репозиторием на
		 сервере PostgreSQL.


		 ![](../../Property_Image.gif)
		 [Database](IPrimaryPostgresSPLD.Database.htm)
		 Свойство Database определяет
		 идентификатор базы данных на сервере PostgreSQL с возможностью
		 указания пользовательской схемы.


		 ![](../../Property_Image.gif)
		 [DatabaseOnly](IPrimaryPostgresSPLD.DatabaseOnly.htm)
		 Свойство DatabaseOnly
		 определяет идентификатор базы данных на сервере PostgreSQL, в
		 которой создан репозиторий.


		 ![](../../Property_Image.gif)
		 [KrbSrvName](IPrimaryPostgresSPLD.KrbSrvName.htm)
		 Свойство KrbSrvName
		 определяет наименование сервиса MIT Kerberos, с использованием
		 которого осуществляется подключение.


		 ![](../../Property_Image.gif)
		 [Server](IPrimaryPostgresSPLD.Server.htm)
		 Свойство Server определяет
		 наименование сервера, на котором расположена СУБД PostgreSQL.


		 ![](../../Property_Image.gif)
		 [SchemaOnly](IPrimaryPostgresSPLD.SchemaOnly.htm)
		 Свойство SchemaOnly
		 определяет идентификатор пользовательской схемы в базе данных.


		 ![](../../Property_Image.gif)
		 [SSLMode](IPrimaryPostgresSPLD.SSLMode.htm)
		 Свойство SSLMode определяет
		 режим работы SSL-соединения.


		 ![](../../Property_Image.gif)
		 [SupportBinaryProtocol](IPrimaryPostgresSPLD.SupportBinaryProtocol.htm)
		 Свойство SupportBinaryProtocol
		 определяет, будут ли для работы с сервером использоваться запросы
		 в бинарном виде.


		 ![](../../Property_Image.gif)
		 [UseGssApi](IPrimaryPostgresSPLD.UseGssApi.htm)
		 Свойство UseGssApi
		 определяет использование аутентификации к серверу PostgreSQL по
		 механизму GSS API.


## Свойства, унаследовано от [ISecurityPackageLogonData](../ISecurityPackageLogonData/ISecurityPackageLogonData.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [IsUnicode](../ISecurityPackageLogonData/ISecurityPackageLogonData.IsUnicode.htm)
		 Свойство IsUnicode
		 возвращает признак того, используется ли кодировка юникод.


		 ![](../../Property_Image.gif)
		 [LogonEvent](../ISecurityPackageLogonData/ISecurityPackageLogonData.LogonEvent.htm)
		 Свойство LogonEvent
		 определяет использование событий при подключении к репозиторию.


		 ![](../../Property_Image.gif)
		 [ParamCount](../ISecurityPackageLogonData/ISecurityPackageLogonData.ParamCount.htm)
		 Свойство ParamCount
		 возвращает количество параметров модуля безопасности.


		 ![](../../Property_Image.gif)
		 [ParamName](../ISecurityPackageLogonData/ISecurityPackageLogonData.ParamName.htm)
		 Свойство ParamName
		 возвращает наименование параметра модуля безопасности.


		 ![](../../Property_Image.gif)
		 [ParamValue](../ISecurityPackageLogonData/ISecurityPackageLogonData.ParamValue.htm)
		 Свойство ParamValue
		 определяет значение параметра модуля безопасности.


		 ![](../../Property_Image.gif)
		 [Unicode](../ISecurityPackageLogonData/ISecurityPackageLogonData.Unicode.htm)
		 Свойство Unicode определяет,
		 использовать ли кодировку юникод.


		 ![](../../Property_Image.gif)
		 [Valid](../ISecurityPackageLogonData/ISecurityPackageLogonData.Valid.htm)
		 Свойство Valid возвращает
		 признак корректности параметров модуля безопасности.


## Методы, унаследовано от [ISecurityPackageLogonData](../ISecurityPackageLogonData/ISecurityPackageLogonData.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Clone](../ISecurityPackageLogonData/ISecurityPackageLogonData.Clone.htm)
		 Метод Clone возвращает
		 объект, содержащий копию параметров модуля безопасности.


		 ![](../../Sub_Image.gif)
		 [DbObjectO](../ISecurityPackageLogonData/ISecurityPackageLogonData.DbObjectO.htm)
		 Метод DbObjectO
		 возвращает идентификатор объекта с префиксом, соответствующим
		 текущему репозиторию.


См. также:


[Интерфейсы
 сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
