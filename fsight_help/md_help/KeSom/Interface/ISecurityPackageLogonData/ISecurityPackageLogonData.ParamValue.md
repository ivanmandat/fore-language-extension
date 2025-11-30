# ISecurityPackageLogonData.ParamValue

ISecurityPackageLogonData.ParamValue
-


# ISecurityPackageLogonData.ParamValue


## Синтаксис


		ParamValue(ParamName: String): [Variant](ForeSys.chm::/Class/Variant/Variant.htm);


## Параметры


ParamName. Наименование параметра модуля безопасности.


## Описание


Свойство ParamValue определяет
 значение параметра модуля безопасности.


## Комментарии


Для получения наименования параметра модуля безопасности используйте
 свойство [ISecurityPackageLogonData.ParamName](ISecurityPackageLogonData.ParamName.htm).


В качестве значения параметра модуля безопасности можно использовать
 подстановки с использованием [глобальных
 переменных](UiNav.chm::/02_Navigator/UiNav_GlobalVariables.htm) в формате: «%<идентификатор
 глобальной переменной>%».


## Пример


Для выполнения примера предполагается наличие в репозитории [базы данных](UiNavObj.chm::/database/UiDb_database.htm)
 с идентификатором OBJ_DB.


Добавьте ссылки на системные сборки: Db, Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MBObj: IMetabaseObject;

		    DB: IDatabase;

		    LogonData: ISecurityPackageLogonData;

		Begin

		    MB := MetabaseClass.Active;

		    // Получим базу данных

		    MBObj := MB.IteMById("OBJ_DB").Edit;

		    DB := MBObj As IDatabase;

		    // Изменим настройки подключения к базе данных

		    DB.UseMetabaseLogonData := False;

		    DB.Authentication := AuthenticationMode.Password;

		    DB.DriverId := "POSTGRES";

		    LogonData := DB.LogonData;

		    LogonData.ParamValue("SERVER") := "Test";

		    LogonData.ParamValue("SCHEME") := "%METABASE_DATABASE%";

		    LogonData.ParamValue("CASESENSITIVE") := "True";

		    // Сохраним изменения

		    MBObj.Save;

		End Sub UserProc;


В результате выполнения примера для базы данных с идентификатором OBJ_DB
 будут изменены настройки подключения.


См. также:


[ISecurityPackageLogonData](ISecurityPackageLogonData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
