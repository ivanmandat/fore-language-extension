# IMetabaseUpdateObjectNode.BoundType

IMetabaseUpdateObjectNode.BoundType
-


# IMetabaseUpdateObjectNode.BoundType


## Синтаксис


BoundType: [MetabaseObjectUpdateBoundType](../../Enums/MetabaseObjectUpdateBoundType.htm);


## Описание


Свойство BoundType определяет
 тип обновления.


## Комментарии


Свойство BoundType и [IMetabaseUpdateObjectNode.Constraint](IMetabaseUpdateObjectNode.Constraint.htm)
 следует использовать вместо свойства [IMetabaseUpdateObjectNode.UpdateType](IMetabaseUpdateObjectNode.UpdateType.htm).


## Пример


Для выполнения примера предполагается наличие файла обновления «C:\Update.pefx».
 В репозитории должен присутствовать объект с идентификатором «OBJ_FOR_PEF».
 Добавьте ссылку на системную сборку Metabase.


			    Sub UserProc;

    Var

        MB: IMetabase;

        Update: IMetabaseUpdate;

        UFN: IMetabaseUpdateFolderNode;

        UON: IMetabaseUpdateObjectNode;

    Begin

        MB := MetabaseClass.Active;

        Update := Mb.CreateUpdate;

        Update.LoadFromFileNF("C:\Update.pefx");

        UFN := Update.RootFolder;

        UON := UFN.Add(MetabaseUpdateNodeType.DataObject) As IMetabaseUpdateObjectNode;

        UON.Object := MB.ItemById("OBJ_FOR_PEF");

        UON.Constraint := MetabaseObjectUpdateConstraint.CreateOnly;

        UON.BoundType := MetabaseObjectUpdateBoundType.ById;

        Update.SaveToFileNF("C:\Update.pefx");

    End Sub UserProc;


После выполнения примера в обновление, загруженное из файла «C:\Update.pefx»,
 будет добавлен объект с идентификатором «OBJ_FOR_PEF». Для данного объекта
 будут установлены следующие параметры:


	- тип обновления - по идентификаторам;


	- способ обновления - всегда создавать новые объекты.


Затем обновление будет сохранено.


См. также:


[IMetabaseUpdateObjectNode](IMetabaseUpdateObjectNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
