# ICubeMetaUpdateEx.ResultRubricator

ICubeMetaUpdateEx.ResultRubricator
-


# ICubeMetaUpdateEx.ResultRubricator


## Синтаксис


ResultRubricator: [IRubricator](../IRubricator/IRubricator.htm);


## Описание


Свойство ResultRubricator возвращает
 созданную копию базы данных временных рядов.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором FC.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubUpdateEx: ICubeMetaUpdateEx;

    Rub: IRubricator;

    CrInfo: IMetabaseObjectCreateInfo;

    RubRes: IMetabaseObject;

    s: String;

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

    RubUpdateEx.CopyData := True;

    RubUpdateEx.CopyExtraObjects := True;

    RubUpdateEx.RdsDatabase := Rub.Database;

    RubUpdateEx.Apply(Null);

    RubRes := RubUpdateEx.ResultRubricator As IMetabaseObject;

    Debug.WriteLine(RubRes.Key);

End Sub UserProc;


После выполнения примера в корневую папку репозитория будет среплицирована
 база данных временных рядов FC. Идентификатор копии - FC_COPY. В окно
 консоли будет выведен ключ копии.


См. также:


[ICubeMetaUpdateEx](ICubeMetaUpdateEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
