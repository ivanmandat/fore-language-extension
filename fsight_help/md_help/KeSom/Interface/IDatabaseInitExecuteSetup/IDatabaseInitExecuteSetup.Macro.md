# IDatabaseInitExecuteSetup.Macro

IDatabaseInitExecuteSetup.Macro
-


# IDatabaseInitExecuteSetup.Macro


## Синтаксис


Macro: String;


## Описание


Свойство Macro определяет наименование
 метода, который будет выполняться после подключения к базе данных.


## Комментарии


В качестве значения данного свойства должно быть указано наименование
 статической процедуры, имеющей только один параметр с типом [ISecurityConnection](../ISecurityConnection/ISecurityConnection.htm).
 Процедура должна быть реализована в том объекте, который указан в свойстве
 [Module](IDatabaseInitExecuteSetup.Module.htm). Наименование
 указывается в следующем формате: <НаименованиеКласса>.<НаименованиеПроцедуры>.


Процедура будет выполняться непосредственно после самого подключения
 и перед выполнением каких-либо других запросов. Созданное подключение
 будет доступно во входном параметре процедуры. Используя интерфейсы сборки
 [Dal](Dal.chm::/Dal_Title.htm)
 можно произвести какие-либо дополнительные настройки подключения.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором BD. Также в репозитории должен быть создан модуль с
 идентификатором PREPAREDB. В модуле реализована процедура, которая будет
 вызываться после подключения к БД.


[![](../../opened.gif)![](../../closed.gif)Текст модуля](javascript:TextPopup(this))


		Class PrepareDB: Object

		    Public Shared Sub OnDBConnecting(Connection: ISecurityConnection);

		    Begin

		        //Подготовка подключения

		     End Sub OnDBConnecting;

		End Class PrepareDB;


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DB: IDatabaseInitExecuteSetup;

	Begin

	    MB := MetabaseClass.Active;

	    DB := MB.ItemById("BD").Edit As IDatabaseInitExecuteSetup;

	    DB.Module := MB.ItemById("PREPAREDB");

	    DB.Macro := "PrepareDB.OnDBConnecting";

	    (DB As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будут определены дополнительные настройки базы
 данных репозитория. После подключения будет выполняться указанная процедура.


См. также:


[IDatabaseInitExecuteSetup](IDatabaseInitExecuteSetup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
