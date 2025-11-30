# ICubeMetaUpdateEx.TargetRubricator

ICubeMetaUpdateEx.TargetRubricator
-


# ICubeMetaUpdateEx.TargetRubricator


## Синтаксис


TargetRubricator: [IRubricator](../IRubricator/IRubricator.htm);


## Описание


Свойство TargetRubricator определяет
 существующую базу данных временных рядов, в которую будут скопированы
 данные.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором FC (источник данных) и базы данных временных
 рядов с идентификатором FC_COPY (приёмник данных).


			Sub UserProc;

Var

    Mb: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    Obj: IMetabaseObject;

    ObjDesc: IMetabaseObjectDescriptor;

    RubUpdateEx: ICubeMetaUpdateEx;

    Rub: IRubricator;

Begin

    Mb := MetabaseClass.Active;

    CrInfo := Mb.CreateCreateInfo;

    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_CUBEMETAUPDATE;

    CrInfo.Id := Mb.GenerateId("Cube_Meta_Upd");

    CrInfo.Permanent := True;

    CrInfo.Parent := Mb.Root;

    ObjDesc := Mb.CreateObject(CrInfo);

    Obj := ObjDesc.Edit;

    RubUpdateEx := Obj As ICubeMetaUpdateEx;

    Rub := Mb.ItemById("FC").Bind As IRubricator;

    RubUpdateEx.Rubricator := Rub;

    RubUpdateEx.Metabase := Mb;

    RubUpdateEx.RdsDatabase := Rub.Database;

    RubUpdateEx.TargetRubricator := Mb.ItemById("FC_COPY").Bind As IRubricator;

    Obj.Save;

End Sub UserProc;


После выполнения примера данные базы данных временных рядов FC будут
 скопированы в базу FC_COPY. Объект, содержащий настройки копирования,
 будет сохранен с идентификатором Cube_Meta_Upd.


См. также:


[ICubeMetaUpdateEx](ICubeMetaUpdateEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
