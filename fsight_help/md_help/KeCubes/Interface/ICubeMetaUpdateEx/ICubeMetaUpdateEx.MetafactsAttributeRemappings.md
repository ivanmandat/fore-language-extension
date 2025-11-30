# ICubeMetaUpdateEx.MetafactsAttributeRemappings

ICubeMetaUpdateEx.MetafactsAttributeRemappings
-


# ICubeMetaUpdateEx.MetafactsAttributeRemappings


## Синтаксис


MetafactsAttributeRemappings: [ICubeMetaUpdateAttributeRemappings](../ICubeMetaUpdateAttributeRemappings/ICubeMetaUpdateAttributeRemappings.htm);


## Описание


Свойство MetafactsAttributeRemappings
 возвращает коллекцию соответствий атрибутов временных рядов копируемой
 базы данных временных рядов и атрибутов временных рядов базы-копии.


## Комментарии


Для определения коллекции соответствий атрибутов наблюдений копируемой
 базы и атрибутов наблюдений базы-копии используйте свойство [ICubeMetaUpdateEx.MetavalsAttributeRemappings](ICubeMetaUpdateEx.MetavalsAttributeRemappings.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «FC», содержащая пользовательский атрибут
 временных рядов «COUNTRY» и база данных временных рядов с идентификатором
 «FC_COPY», содержащая пользовательский атрибут временных рядов «A_COUNTRY».
 Данные атрибуты должны иметь одинаковые характеристики.


Добавьте ссылки на системные сборки «Metabase», «Cubes».


			Sub UserProc;

Var

    mb: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    Obj: IMetabaseObject;

    ObjDesc: IMetabaseObjectDescriptor;

    RubUpdateEx: ICubeMetaUpdateEx;

    Rub: IRubricator;

    AttrRemapping: ICubeMetaUpdateAttributeRemappings;

    AttrR: ICubeMetaUpdateAttributeRemapping;

Begin

    mb := MetabaseClass.Active;

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

    RubUpdateEx.TargetRubricator := mb.ItemById("FC_COPY_").Bind As IRubricator;

    AttrRemapping := RubUpdateEx.MetafactsAttributeRemappings;

    AttrR := AttrRemapping.FindById("A_COUNTRY");

    AttrR.Source := "COUNTRY";

    AttrR.Type := CubeMetaUpdateAttributeRemappingType.Source;

    Obj.Save;

End Sub UserProc;


После выполнения примера будет задано соответствие между атрибутами
 «A_COUNTRY» и «COUNTRY»: при копировании данных из базы «FC» в базу «FC_COPY»
 данные атрибута «COUNTRY» будут скопированы в атрибут «A_COUNTRY». Объект,
 содержащий настройки копирования, будет сохранен с идентификатором «Cube_Meta_Upd».


См. также:


[ICubeMetaUpdateEx](ICubeMetaUpdateEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
