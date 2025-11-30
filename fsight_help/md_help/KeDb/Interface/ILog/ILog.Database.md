# ILog.Database

ILog.Database
-


# ILog.Database


## Синтаксис


Database: [IDatabase](../IDatabase/IDatabase.htm);


## Описание


Свойство Database определяет базу данных, в которой хранится журнал.


## Пример


	Sub UserProc;

	Var

	    Des: IMetabaseObjectDescriptor;

	    CrInf: IMetabaseObjectCreateInfo;

	    Mb: IMetabase;

	    MObj: IMetabaseObject;

	    Log: ILog;

	Begin

	    Mb:=MetabaseClass.Active;

	    CrInf := Mb.CreateCreateInfo;

	    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_LOG;

	    CrInf.Id := "NewLog";

	    CrInf.Name := "NewLog";

	    CrInf.Parent := Mb.Root;

	    Des := Mb.CreateObject(CrInf);

	    MObj:=Des.Edit;

	    Log:=MObj As ILog;

	    Log.Database:=Mb.ItemById("BD").Bind As IDatabase;

	    Log.NativeName:="NewLog";

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будет создан журнал в базе данных с идентификатором «BD». Идентфикатор журнала - «NewLog», физическое имя журнала - «NewLog».


См.также:


[ILog](ILog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
