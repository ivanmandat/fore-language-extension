# IMetabaseCustomClasses.FindByClassId

IMetabaseCustomClasses.FindByClassId
-


# IMetabaseCustomClasses.FindByClassId


## Синтаксис


FindByClassId(ClassId: Integer): [IMetabaseCustomClass](../IMetabaseCustomClass/IMetabaseCustomClass.htm);


## Описание


Метод FindByClassId выполняет
 поиск класса по числовому идентификатору пользовательского объекта репозитория.


## Пример


Для выполнения примера в репозитории необходимо наличие пользовательского
 объекта репозитория с идентификатором CUSTOM_OBJECT.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Extender: IMetabaseCustomExtender;

	    Custom: IMetabaseCustomClass;

	Begin

	    MB := MetabaseClass.Active;

	    Extender := MB.SpecialObject(MetabaseSpecialObject.CustomExtender).Edit As IMetabaseCustomExtender;

	    Custom := Extender.Classes.FindByClassId(MB.ItemById("CUSTOM_OBJECT").ClassId);

	    Debug.WriteLine(Custom = Null ? "Null" : Custom.Name);

	End Sub UserProc;


После выполнения примера будет произведен поиск класса по идентификатору.
 В случае если описание получено, то оно будет выведено в консоль среды
 разработки.


См. также:


[IMetabaseCustomClasses](IMetabaseCustomClasses.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
