# ICubeMetaUpdateEx.ObjectsFilter

ICubeMetaUpdateEx.ObjectsFilter
-


# ICubeMetaUpdateEx.ObjectsFilter


## Синтаксис


ObjectsFilter: [IMetabaseObjectDescriptors](kesom.chm::/interface/imetabaseobjectdescriptors/imetabaseobjectdescriptors.htm);


## Описание


Свойство ObjectsFilter возвращает
 коллекцию вложенных объектов базы данных временных рядов, которые будут
 скопированы.


## Комментарии


По умолчанию копируются все вложенные объекты базы-источника.


Примечание.
 Данное свойство учитывается, если база данных временных рядов копируется
 вместе со вложенными объектами, т.е. свойство
 [ICubeMetaUpdateEx.CopyExtraObjects](ICubeMetaUpdateEx.CopyExtraObjects.htm)
 имеет значение True.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором FC.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubUpdateEx: ICubeMetaUpdateEx;

    Rub: IRubricator;

    Progress: IMetabaseUpdateProgress;

    CrInfo: IMetabaseObjectCreateInfo;

    ObjectsF: IMetabaseObjectDescriptors;

    ObjF: IMetabaseObjectDescriptor;

    s: String;

    i: Integer;

Begin

    Mb := MetabaseClass.Active;

    RubUpdateEx := New CubeMetaUpdateClass.Create As ICubeMetaUpdateEx;

    Rub := mb.ItemById("FC").Bind As IRubricator;

    RubUpdateEx.Rubricator := Rub;

    RubUpdateEx.Metabase := Mb;

    CrInfo := RubUpdateEx.CreateInfo;

    CrInfo.Parent := Mb.Root;

    s := Mb.GenerateId("FC_COPY");

    CrInfo.Id := s;

    CrInfo.Name := s;

    RubUpdateEx.CopyExtraObjects := True;

    ObjectsF := RubUpdateEx.ObjectsFilter;

    ObjF := Rub.Container(RubricatorContainerType.Data);

    ObjectsF.Add(ObjF);

    For i := 0 To ObjF.Children.Count - 1 Do

        ObjectsF.Add(ObjF.Children.Item(i));

    End For;

    RubUpdateEx.RdsDatabase := Rub.Database;

    RubUpdateEx.Apply(Progress);

End Sub UserProc;


После выполнения примера база данных временных рядов FC будет скопирована
 в корневую папку репозитория. Идентификатор копии - FC_COPY. Будут скопированы
 только вложенные объекты, которые содержатся в папке данных базы данных
 временных рядов.


См. также:


[ICubeMetaUpdateEx](ICubeMetaUpdateEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
