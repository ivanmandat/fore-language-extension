# ICubeMetaUpdateAttributeRemapping.SourceKey

ICubeMetaUpdateAttributeRemapping.SourceKey
-


# ICubeMetaUpdateAttributeRemapping.SourceKey


## Синтаксис


SourceKey: Integer;


## Описание


Свойство SourceKey определяет
 ключ атрибута показателей копируемой базы, являющейся источником данных
 для атрибута показателей базы-копии.


## Комментарии


Привязка между атрибутом показателей копируемой базы и атрибутом показателей
 базы-копии может осуществляться несколькими способами:


	- используя идентификатор атрибута: свойство [ICubeMetaUpdateAttributeRemapping.Source](ICubeMetaUpdateAttributeRemapping.Source.htm);


	- используя ключи атрибутов: свойство SourceKey;


	- используя ключ и идентификатор атрибута одновременно.


Если для привязки используется лишь идентификатор атрибута, то в процессе
 копирования могут возникнуть ошибки, если идентификатор атрибута в базе
 данных временных рядов был изменен. Более надежной является привязка с
 использованием ключа атрибута.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором FC, содержащего пользовательский атрибут
 показателей COUNTRY. Также должна присутствовать база данных временных
 рядов с идентификатором FC_COPY, содержащая пользовательский атрибут показателей
 A_COUNTRY. Данные атрибуты должны иметь одинаковые характеристики.


Добавьте ссылки на системные сборки: Cubes, Metabase, Rds.


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

	        FactsDict: IMetaDictionary;

	        Attr: IMetaAttribute;

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

	        RubUpdateEx.TargetRubricator := mb.ItemById("FC_COPY").Bind As IRubricator;

	        AttrRemapping := RubUpdateEx.MetafactsAttributeRemappings;

	        AttrR := AttrRemapping.FindById("A_COUNTRY");

	        AttrR.Source := "COUNTRY";

	        FactsDict := Rub.Facts;

	        Attr := FactsDict.Attributes.FindById("COUNTRY");

	        AttrR.SourceKey := Attr.Key;

	        AttrR.Type := CubeMetaUpdateAttributeRemappingType.Source;

	        Obj.Save;

	    End Sub UserProc;


После выполнения примера будет задано соответствие по ключу и идентификатору
 между атрибутами A_COUNTRY и COUNTRY: при копировании данных из базы FC
 в базу FC_COPY данные атрибута COUNTRY будут скопированы в атрибут A_COUNTRY.
 Объект, содержащий настройки копирования, будет сохранен с идентификатором
 Cube_Meta_Upd.


См. также:


[ICubeMetaUpdateAttributeRemapping](ICubeMetaUpdateAttributeRemapping.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
