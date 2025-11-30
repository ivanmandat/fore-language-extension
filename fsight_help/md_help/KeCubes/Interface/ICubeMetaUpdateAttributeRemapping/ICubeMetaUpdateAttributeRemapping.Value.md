# ICubeMetaUpdateAttributeRemapping.Value

ICubeMetaUpdateAttributeRemapping.Value
-


# ICubeMetaUpdateAttributeRemapping.Value


## Синтаксис


Value: Variant;


## Описание


Свойство Value определяет значение
 атрибута показателей базы-копии.


Примечание.
 Данное свойство учитывается, если значение свойства [ICubeMetaUpdateAttributeRemapping.Type](ICubeMetaUpdateAttributeRemapping.Type.htm)
 - [CubeMetaUpdateAttributeRemappingType.Const_](../../Enums/CubeMetaUpdateAttributeRemappingType.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «FC». Также должна присутствовать база
 данных временных рядов с идентификатором «FC_COPY», содержащая пользовательский
 атрибут показателей «A_COUNTRY».


			Sub UserProc;

Var

    Mb: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    Obj: IMetabaseObject;

    ObjDesc: IMetabaseObjectDescriptor;

    RubUpdateEx: ICubeMetaUpdateEx;

    Rub: IRubricator;

    AttrRemapping: ICubeMetaUpdateAttributeRemappings;

    AttrR: ICubeMetaUpdateAttributeRemapping;

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

    Rub := mb.ItemById("FC").Bind As IRubricator;

    RubUpdateEx.Rubricator := Rub;

    RubUpdateEx.Metabase := Mb;

    RubUpdateEx.RdsDatabase := Rub.Database;

    RubUpdateEx.TargetRubricator := mb.ItemById("FC_COPY").Bind As IRubricator;

    AttrRemapping := RubUpdateEx.MetafactsAttributeRemappings;

    AttrR := AttrRemapping.FindById("A_COUNTRY");

    AttrR.Value := 512;

    AttrR.Type := CubeMetaUpdateAttributeRemappingType.Const_;

    Obj.Save;

End Sub UserProc;


После выполнения примера будет задано постоянное значение для атрибута
 «A_COUNTRY»: при копировании данных из базы «FC» в базы «FC_COPY» атрибут
 «A_COUNTRY» всегда будет иметь значение «512». Объект, содержащий настройки
 копирования, будет сохранен с идентификатором «Cube_Meta_Upd».


См. также:


[ICubeMetaUpdateAttributeRemapping](ICubeMetaUpdateAttributeRemapping.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
