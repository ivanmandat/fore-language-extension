# ICubeMetaUpdateAttributeRemapping.Source

ICubeMetaUpdateAttributeRemapping.Source
-


# ICubeMetaUpdateAttributeRemapping.Source


## Синтаксис


Source: String;


## Описание


Свойство Source определяет идентификатор
 атрибута показателей копируемой базы, являющейся источником данных для
 атрибута показателей базы-копии.


Примечание.
 Данное свойство учитывается, если значение свойства [ICubeMetaUpdateAttributeRemapping.Type](ICubeMetaUpdateAttributeRemapping.Type.htm)
 - [CubeMetaUpdateAttributeRemappingType.Source](../../Enums/CubeMetaUpdateAttributeRemappingType.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором FC, содержащей пользовательский атрибут
 показателей COUNTRY. Также должна присутствовать база данных временных
 рядов с идентификатором FC_COPY, содержащая пользовательский атрибут показателей
 A_COUNTRY. Данные атрибуты должны иметь одинаковые характеристики.


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

    Rub := Mb.ItemById("FC").Bind As IRubricator;

    RubUpdateEx.Rubricator := Rub;

    RubUpdateEx.Metabase := Mb;

    RubUpdateEx.RdsDatabase := Rub.Database;

    RubUpdateEx.TargetRubricator := mb.ItemById("FC_COPY").Bind As IRubricator;

    AttrRemapping := RubUpdateEx.MetafactsAttributeRemappings;

    AttrR := AttrRemapping.FindById("A_COUNTRY");

    AttrR.Source := "COUNTRY";

    AttrR.Type := CubeMetaUpdateAttributeRemappingType.Source;

    Obj.Save;

End Sub UserProc;


После выполнения примера будет задано соответствие между атрибутами
 A_COUNTRY и COUNTRY: При копировании данных из одной базы в другую данные
 атрибута COUNTRY будут скопированы в атрибут A_COUNTRY. Объект, содержащий
 настройки копирования, будет сохранен с идентификатором Cube_Meta_Upd.


См. также:


[ICubeMetaUpdateAttributeRemapping](ICubeMetaUpdateAttributeRemapping.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
