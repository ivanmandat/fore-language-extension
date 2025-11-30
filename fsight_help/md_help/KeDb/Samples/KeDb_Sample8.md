# Создание журнала

Создание журнала
-


# Создание журнала


Для выполнения примера предполагается наличие в репозитории базы данных с идентификатором "BD".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    Log: ILog;

	Begin

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_LOG;

	    CrInfo.Id := "NewLog";

	    CrInfo.Name := "Новый журнал";

	    CrInfo.Parent := MB.Root;

	    Log := MB.CreateObject(CrInfo).Edit As ILog;

	    Log.Database := Mb.ItemById("BD").Bind As IDatabase;

	    Log.NativeName := "NewLog";

	    (Log As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан новый журнал. В дальнейшем данный журнал может использоваться для хранения информационных сообщений, используемых при расчете задачи ETL.


См.также:


[Примеры](KeDb_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
