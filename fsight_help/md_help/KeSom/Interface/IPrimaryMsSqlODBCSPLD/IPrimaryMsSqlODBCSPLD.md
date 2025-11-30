# IPrimaryMsSqlODBCSPLD

IPrimaryMsSqlODBCSPLD
-


# IPrimaryMsSqlODBCSPLD


Сборка: Metabase;


## Описание


Интерфейс IPrimaryMsSqlODBCSPLD
 содержит свойства и методы модуля безопасности, используемого при подключении
 к репозиторию с помощью ODBC драйвера Microsoft SQL Server.


## Иерархия наследования


           [ISecurityPackageLogonData](../ISecurityPackageLogonData/ISecurityPackageLogonData.htm)


           [IPrimaryMsSqlSPLD](../IPrimaryMsSqlSPLD/IPrimaryMsSqlSPLD.htm)


           IPrimaryMsSqlODBCSPLD


## Комментарии


ODBC драйвер должен быть установлен в операционной системе.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ODBCParamCount](IPrimaryMsSqlODBCSPLD.ODBCParamCount.htm)
		 Свойство ODBCParamCount
		 возвращает количество параметров, для которых определены значения.


		 ![](../../Property_Image.gif)
		 [ODBCParamName](IPrimaryMsSqlODBCSPLD.ODBCParamName.htm)
		 Свойство ODBCParamName
		 возвращает наименование параметра с указанным индексом.


		 ![](../../Property_Image.gif)
		 [ODBCParamValue](IPrimaryMsSqlODBCSPLD.ODBCParamValue.htm)
		 Свойство ODBCParamValue
		 определяет значение для параметра с указанным наименованием.


## Свойства, унаследованные от [IPrimaryMsSqlSPLD](../IPrimaryMsSqlSPLD/IPrimaryMsSqlSPLD.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Database](../IPrimaryMsSqlSPLD/IPrimaryMsSqlSPLD.Database.htm)
		 Свойство Database определяет
		 идентификатор базы данных на сервере MS SQL, в которой хранятся
		 данные репозитория.


		 ![](../../Property_Image.gif)
		 [DatabaseOnly](../IPrimaryMsSqlSPLD/IPrimaryMsSqlSPLD.DatabaseOnly.htm)
		 Свойство DatabaseOnly
		 определяет идентификатор базы данных на сервере MS SQL. Свойство
		 актуально, если используется пользовательская схема в базе данных.


		 ![](../../Property_Image.gif)
		 [ODBCParams](../IPrimaryMsSqlSPLD/IPrimaryMsSqlSPLD.ODBCParams.htm)
		 Свойство ODBCParams
		 определяет строку значений дополнительных параметров.


		 ![](../../Property_Image.gif)
		 [FileGroup](../IPrimaryMsSqlSPLD/IPrimaryMsSqlSPLD.FileGroup.htm)
		 Свойство FileGroup
		 определяет файловую группу для создания таблиц.


		 ![](../../Property_Image.gif)
		 [SchemaOnly](../IPrimaryMsSqlSPLD/IPrimaryMsSqlSPLD.SchemaOnly.htm)
		 Свойство SchemaOnly
		 определяет идентификатор пользовательской схемы в базе данных.


		 ![](../../Property_Image.gif)
		 [Server](../IPrimaryMsSqlSPLD/IPrimaryMsSqlSPLD.Server.htm)
		 Свойство Server определяет
		 псевдоним, под которым зарегистрирован сервер MS SQL.


## Свойства, унаследованные от [ISecurityPackageLogonData](../ISecurityPackageLogonData/ISecurityPackageLogonData.htm)


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


## Методы, унаследованные от [ISecurityPackageLogonData](../ISecurityPackageLogonData/ISecurityPackageLogonData.htm)


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
