# ILog.DropLog

ILog.DropLog
-


# ILog.DropLog


## Синтаксис


DropLog;


## Описание


Метод DropLog осуществляет удаление журнала из базы данных.


## Пример


	Sub UserProc;

	Var

	    Des: IMetabaseObjectDescriptor;

	    CrInf: IMetabaseObjectCreateInfo;

	    Mb: IMetabase;

	    MbObj: IMetabaseObject;

	    Log: ILog;

	Begin

	    Mb := MetabaseClass.Active;

	    CrInf := Mb.CreateCreateInfo;

	    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_LOG;

	    CrInf.Id := "NewLog";

	    CrInf.Name := "NewLog";

	    CrInf.Parent := Mb.Root;

	    Des := Mb.CreateObject(CrInf);

	    MbObj := Des.Edit;

	    Log := MbObj.GetExtensionDispatch As ILog;

	    Log.Database := Mb.ItemById("BD").Bind As IDatabase;

	    Log.NativeName := "NewLog";

	    MbObj.Save;

	    Log.DropLog;

	    Log.CreateLog;

	End Sub UserProc;


После выполнения примера произойдет создание нового журнала в базе данных и в репозитории, затем этот журнал будет удален из базы данных и снова создан по имеющимся в переменной «Log» метаданным.


См.также:


[ILog](ILog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
