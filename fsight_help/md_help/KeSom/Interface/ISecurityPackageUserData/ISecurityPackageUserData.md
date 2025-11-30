# ISecurityPackageUserData

ISecurityPackageUserData
-


# ISecurityPackageUserData


## Описание


Интерфейс ISecurityPackageUserData
 предназначен для определения параметров безопасности пользователя репозитория.


## Иерархия наследования


ISecurityPackageUserData


## Комментарии


Параметры безопасности пользователя можно получить, используя свойство
 [IMetabaseUser.PackageData](../IMetabaseUser/IMetabaseUser.PackageData.htm).


Интерфейс является базовым для следующих интерфейсов:


	- [IMsSqlUserSPUD](../IMsSqlUserSPUD/IMsSqlUserSPUD.htm);


	- [IOracleUserSPUD](../IOracleUserSPUD/IOracleUserSPUD.htm);


	- [IPostgresUserSPUD](../IPostgresUserSPUD/IPostgresUserSPUD.htm);


	- [ISQLiteUserSPUD](../ISQLiteUserSPUD/ISQLiteUserSPUD.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AllPrivilegies](ISecurityPackageUserData.AllPrivilegies.htm)
		 Свойство AllPrivilegies
		 возвращает общее количество привилегий у пользователя.


		 ![](../../Property_Image.gif)
		 [Authentication](ISecurityPackageUserData.Authentication.htm)
		 Свойство Authentication
		 определяет тип аутентификации пользователя.


		 ![](../../Property_Image.gif)
		 [Credentials](ISecurityPackageUserData.Credentials.htm)
		 Свойство Credentials
		 определяет учетные данные пользователя репозитория.


		 ![](../../Property_Image.gif)
		 [HasPrivilege](ISecurityPackageUserData.HasPrivilege.htm)
		 Свойство HasPrivilege
		 определяет, обладает ли пользователь заданной привилегией.


		 ![](../../Property_Image.gif)
		 [IsGroup](ISecurityPackageUserData.IsGroup.htm)
		 Свойство IsGroup определяет
		 признак того, является ли пользователь пакета безопасности членом
		 группы.


		 ![](../../Property_Image.gif)
		 [Modified](ISecurityPackageUserData.Modified.htm)
		 Свойство Modified определяет
		 признак наличия изменений в параметрах безопасности пользователя.


		 ![](../../Property_Image.gif)
		 [ParamCount](ISecurityPackageUserData.ParamCount.htm)
		 Свойство ParamCount
		 возвращает общее количество параметров пользователя.


		 ![](../../Property_Image.gif)
		 [ParamName](ISecurityPackageUserData.ParamName.htm)
		 Свойство ParamName
		 возвращает наименование параметра пользователя.


		 ![](../../Property_Image.gif)
		 [ParamValue](ISecurityPackageUserData.ParamValue.htm)
		 Свойство ParamValue
		 определяет значение параметра пользователя.


		 ![](../../Property_Image.gif)
		 [UserName](ISecurityPackageUserData.UserName.htm)
		 Свойство UserName определяет
		 наименование пользователя пакета безопасности.


См. также:


[Интерфейсы сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
