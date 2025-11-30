# Создание контейнера запланированных задач

Создание контейнера запланированных задач
-


# Создание контейнера запланированных задач


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	Begin

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_TASK_CONTAINTER;

	    CrInfo.Id := "NewSTCont";

	    CrInfo.Name := "Новый контейнер запланированных задач";

	    CrInfo.Parent := MB.Root;

	    MObj := MB.CreateObject(CrInfo).Edit;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан
 новый контейнер запланированных задач.


См. также:


[Примеры](KeFore_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
