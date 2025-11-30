# IRdsDatabase.Database

IRdsDatabase.Database
-


# IRdsDatabase.Database


## Синтаксис


Database: [IDatabase](KeDb.chm::/Interface/IDatabase/IDatabase.htm);


## Описание


Свойство Database определяет
 базу данных репозитория, в которой будут содержаться данные объектов репозитория
 НСИ.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором «NSI_BD».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    NSI: IRdsDatabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	Begin

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_RDS_DATABASE;

	    CrInfo.Id := "NSI_1";

	    CrInfo.Name := "Репозиторий НСИ";

	    CrInfo.Parent := Null;

	    NSI := MB.CreateObject(CrInfo).Edit As IRdsDatabase;

	    NSI.Database := MB.ItemById("NSI_BD").Bind As IDatabase;

	    (NSI As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан
 новый репозиторий НСИ с идентификатором "NSI_1".


См. также:


[IRdsDatabase](IRdsDatabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
