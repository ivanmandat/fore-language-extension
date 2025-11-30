# ILog.CreateLog

ILog.CreateLog
-


# ILog.CreateLog


## Синтаксис


CreateLog;


## Описание


Метод CreateLog осуществляет создание журнала в базе данных на основе имеющихся метаданных.


## Пример


	Sub UserProc;

	Var

	    Des: IMetabaseObjectDescriptor;

	    CrInf: IMetabaseObjectCreateInfo;

	    Mb: IMetabase;

	    MbObj: IMetabaseObject;

	    Log: ILog;

	Begin

	    Mb:=MetabaseClass.Active;

	    CrInf := Mb.CreateCreateInfo;

	    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_LOG;

	    CrInf.Id := "NewLog";

	    CrInf.Name := "NewLog";

	    CrInf.Parent := Mb.Root;

	    Des := Mb.CreateObject(CrInf);

	    MbObj:=Des.Edit;

	    Log:=MbObj.GetExtensionDispatch As ILog;

	    Log.Database:=Mb.ItemById("BD").Bind As IDatabase;

	    Log.NativeName:="NewLog";

	    MbObj.Save;

	    Log.DropLog;

	    Log.CreateLog;

	End Sub UserProc;


После выполнения примера будет создан журнал в базе данных с идентификатором «BD». Идентфикатор журнала - «NewLog», физическое имя журнала - «NewLog».


См.также:


[ILog](ILog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
