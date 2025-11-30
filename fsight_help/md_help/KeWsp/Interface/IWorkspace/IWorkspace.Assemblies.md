# IWorkspace.Assemblies

IWorkspace.Assemblies
-


# IWorkspace.Assemblies


## Синтаксис


Assemblies: [IWxAssemblies](../IWxAssemblies/IWxAssemblies.htm);


## Описание


Свойство Assemblies возвращает
 сборку, содержащую коллекцию модулей.


## Комментарии


Коллекция модулей предназначена для определения обработчика событий
 в рабочем пространстве.


## Пример


Для выполнения примера необходимо наличие в репозитории рабочего пространства
 с идентификатором WORKSPACE, модуля с идентификатором MODULE. В модуле
 должен содержаться класс с наименованием «EventsClass», который будет
 использоваться в качестве обработчика событий.


Добавьте ссылки на системные сборки: Metabase, Workspace.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Workspace: IWorkspace;

	    Assembly: IWxAssemblies;

	    Info: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObjectDescriptor;

	    Obj: IMetabaseObject;

	    KeyObj: Integer;

	Begin

	    // Получим текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получим рабочее пространство

	    Workspace := MB.ItemById("WORKSPACE").Edit As IWorkspace;

	    // Получим модуль и его ключ

	    MObj := MB.ItemById("MODULE");

	    KeyObj := MObj.Key;

	    // Получим сборку

	    Assembly := Workspace.Assemblies;

	    // Добавим модуль

	    Assembly.Add(MObj);

	    Assembly.EventsAssembly := KeyObj;

	    // Определим класс с обработчиком событий

	    Assembly.EventsClass := "EventsClass";

	    // Сохраним изменения

	    (Workspace As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будет подключён указанный обработчик событий
 в рабочем пространстве.


См. также:


[IWorkspace](IWorkspace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
