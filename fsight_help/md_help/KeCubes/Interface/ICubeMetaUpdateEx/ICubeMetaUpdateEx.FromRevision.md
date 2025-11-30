# ICubeMetaUpdateEx.FromRevision

ICubeMetaUpdateEx.FromRevision
-


# ICubeMetaUpdateEx.FromRevision


## Синтаксис


FromRevision: Integer;


## Описание


Свойство FromRevision определяет
 ключ ревизии, начиная с которой будет производиться копирование данных
 базы данных временных рядов.


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

    s: string;

Begin

    Mb := MetabaseClass.Active;

    RubUpdateEx := New CubeMetaUpdateClass.Create As ICubeMetaUpdateEx;

    Rub := Mb.ItemById("FC").Bind As IRubricator;

    RubUpdateEx.Rubricator := Rub;

    RubUpdateEx.Metabase := Mb;

    CrInfo := RubUpdateEx.CreateInfo;

    CrInfo.Parent := Mb.Root;

    s := Mb.GenerateId("FC_COPY");

    CrInfo.Id := s;

    CrInfo.Name := s;

    RubUpdateEx.FromRevision := 10;

    RubUpdateEx.RdsDatabase := Rub.Database;

    RubUpdateEx.Apply(Progress);

End Sub UserProc;


После выполнения примера базы данных временных рядов FC будет скопирована
 в корневую папку репозитория. Идентификатор копии - FC_COPY. Будут скопированы
 только данные показателей, которые были изменены, начиная с ревизии с
 ключом 10.


См. также:


[ICubeMetaUpdateEx](ICubeMetaUpdateEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
