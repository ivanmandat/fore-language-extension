# ISecurityPackageLogonData

ISecurityPackageLogonData
-


# ISecurityPackageLogonData


## Описание


Интерфейс ISecurityPackageLogonData
 содержит базовые свойства параметров модуля безопасности репозитория.


## Комментарии


Параметры модуля безопасности возвращают следующие свойства:


	- [IDatabase.LogonData](KeDb.chm::/Interface/IDatabase/IDatabase.LogonData.htm);


	- [ILogonParams.Data](../ILogonParams/ILogonParams.Data.htm);


	- [ILogonSession.LogonData](../ILogonSession/ILogonSession.LogonData.htm);


	- [IMetabaseLinkBase.LogonData](../IMetabaseLinkBase/IMetabaseLinkBase.LogonData.htm);


	- [IPrimaryServiceSPLD.OriginLogonData](../IPrimaryServiceSPLD/IPrimaryServiceSPLD.OriginLogonData.htm);


	- [ISecurityConnection.LogonData](../ISecurityConnection/ISecurityConnection.LogonData.htm);


Данные свойства также могут быть приведены к следующим интерфейсам,
 для которых ISecurityPackageLogonData
 является базовым:


	- [IPrimaryMsSqlSPLD](../IPrimaryMsSqlSPLD/IPrimaryMsSqlSPLD.htm);


	- [IPrimaryOracleSPLD](../IPrimaryOracleSPLD/IPrimaryOracleSPLD.htm);


	- [IPrimaryPostgresSPLD](../IPrimaryPostgresSPLD/IPrimaryPostgresSPLD.htm);


	- [IPrimaryServiceSPLD](../IPrimaryServiceSPLD/IPrimaryServiceSPLD.htm);


	- [IPrimarySQLiteSPLD](../IPrimarySQLiteSPLD/IPrimarySQLiteSPLD.htm);


	- [IPrimaryODBCSPLD](../IPrimaryODBCSPLD/IPrimaryODBCSPLD.htm).


Инициализировать новый набор параметров модуля безопасности для определенной
 СУБД можно с помощью метода [ISecurityPackage.CreateLogonData](../ISecurityPackage/ISecurityPackage.CreateLogonData.htm).


Дополнительные параметры модуля безопасности задаются с помощью свойств
 интерфейса [ISecurityPackageLogonDataEx](../ISecurityPackageLogonDataEx/ISecurityPackageLogonDataEx.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [IsUnicode](ISecurityPackageLogonData.IsUnicode.htm)
		 Свойство IsUnicode
		 возвращает признак того, используется ли кодировка юникод.


		 ![](../../Property_Image.gif)
		 [LogonEvent](ISecurityPackageLogonData.LogonEvent.htm)
		 Свойство LogonEvent
		 определяет использование событий при подключении к репозиторию.


		 ![](../../Property_Image.gif)
		 [ParamCount](ISecurityPackageLogonData.ParamCount.htm)
		 Свойство ParamCount
		 возвращает количество параметров модуля безопасности.


		 ![](../../Property_Image.gif)
		 [ParamName](ISecurityPackageLogonData.ParamName.htm)
		 Свойство ParamName
		 возвращает наименование параметра модуля безопасности.


		 ![](../../Property_Image.gif)
		 [ParamValue](ISecurityPackageLogonData.ParamValue.htm)
		 Свойство ParamValue
		 определяет значение параметра модуля безопасности.


		 ![](../../Property_Image.gif)
		 [Unicode](ISecurityPackageLogonData.Unicode.htm)
		 Свойство Unicode определяет,
		 использовать ли кодировку юникод.


		 ![](../../Property_Image.gif)
		 [Valid](ISecurityPackageLogonData.Valid.htm)
		 Свойство Valid возвращает
		 признак корректности параметров модуля безопасности.


## Методы


		 Имя свойства
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Clone](ISecurityPackageLogonData.Clone.htm)
		 Метод Clone возвращает
		 объект, содержащий копию параметров модуля безопасности.


		 ![](../../Sub_Image.gif)
		 [DbObjectO](ISecurityPackageLogonData.DbObjectO.htm)
		 Метод DbObjectO
		 возвращает идентификатор объекта с префиксом, соответствующим
		 текущему репозиторию.


См. также:


[Интерфейсы сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
