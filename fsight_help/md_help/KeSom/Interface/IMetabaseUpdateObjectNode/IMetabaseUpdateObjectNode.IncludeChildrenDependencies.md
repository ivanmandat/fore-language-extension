# IMetabaseUpdateObjectNode.IncludeChildrenDependencies

IMetabaseUpdateObjectNode.IncludeChildrenDependencies
-


# IMetabaseUpdateObjectNode.IncludeChildrenDependencies


## Синтаксис


IncludeChildrenDependencies: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство IncludeChildrenDependencies
 определяет, включать ли в обновление дочерние объекты.


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором STD_CUBE.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    MDesc: IMetabaseObjectDescriptor;

	    Upd: IMetabaseUpdate;

	    Nd: IMetabaseUpdateObjectNode;

	    RootFolder: IMetabaseUpdateFolderNode;

	    NdFol: IMetabaseUpdateFolderNode;

	Begin

	    Mb := MetabaseClass.Active;

	    Upd := Mb.CreateUpdate;

	    MDesc := Mb.ItemById("STD_CUBE").Edit;

	    RootFolder := Upd.RootFolder;

	    Nd := RootFolder.Add(MetabaseUpdateNodeType.Object) As IMetabaseUpdateObjectNode;

	    Nd.Object := MDesc;

	    Nd.IncludeChildrenDependencies := TriState.OnOption;

	    NdFol := (Nd As IMetabaseUpdateFolderNode);

	    Debug.WriteLine("Число зависимых объектов, добавленных в обновление для объекта '"

	        + MDesc.Name + "': " + NdFol.Count.ToString);

	    Upd.SaveToFileNF("C:\Update.pefx");

	End Sub UserProc;


После выполнения примера будет создано обновление, содержащее указанный
 стандартный куб и все его дочерние объекты. Обновление будет сохранено
 в файл «C:\Update.pefx».


См. также:


[IMetabaseUpdateObjectNode](IMetabaseUpdateObjectNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
