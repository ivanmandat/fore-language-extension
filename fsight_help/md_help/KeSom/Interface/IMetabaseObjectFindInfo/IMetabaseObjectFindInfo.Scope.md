# IMetabaseObjectFindInfo.Scope

IMetabaseObjectFindInfo.Scope
-


# IMetabaseObjectFindInfo.Scope


## Синтаксис


Scope: [IMetabaseObjectDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство Scope определяет область
 для осуществления поиска.


## Комментарии


По умолчанию свойству установлено значение Null,
 при этом поиск осуществляется по всему репозиторию.


## Пример


Для выполнения примера предполагается наличие в репозитории папки с
 идентификатором Folder_1.


Для выполнения примера добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MDescs: IMetabaseObjectDescriptors;

	    MDesc: IMetabaseObjectDescriptor;

	    FInfo: IMetabaseObjectFindInfo;

	Begin

	    MB := MetabaseClass.Active;

	    FInfo := MB.CreateFindInfo;

	    FInfo.ClassId := MetabaseObjectClass.KE_CLASS_FORM;

	    FInfo.Scope := MB.ItemById("Folder_1");

	    FInfo.WholeWordsOnly := False;

	    MDescs := MB.Find(FInfo);

	    For Each MDesc In MDescs Do

	        Debug.WriteLine("Идентификатор: " + MDesc.Id + "; Наименование: " + MDesc.Name);

	    End For;

	End Sub UserProc;


После выполнения примера в указанной папке будет осуществлён поиск всех
 форм. Наименования и идентификаторы найденных объектов будут выведены
 в консоль среды разработки.


См. также:


[IMetabaseObjectFindInfo](IMetabaseObjectFindInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
