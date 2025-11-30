# IMetaAttributesSubset.Add

IMetaAttributesSubset.Add
-


# IMetaAttributesSubset.Add


## Синтаксис


Add(Value: [IMetaAttribute](../IMetaAttribute/IMetaAttribute.htm)):
 Integer;


## Параметры


Value - добавляемый атрибут.


## Описание


Метод Add осуществляет добавление
 атрибута в набор и возвращает индекс добавленного атрибута в наборе.


## Пример


Для выполнения примера предполагается наличие
 в репозитории базы данных временных рядов с идентификатором OBJ_FC и репозитория
 НСИ с идентификатором RDS_REPO. В репозитории НСИ должен присутствовать
 справочник с идентификатором DICT_CTR.


Добавьте ссылки на системные сборки Metabase, Rds, Cubes.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Rubr: IRubricator;

	    Facts: IMetaDictionary;

	    Atts: IMetaAttributes;

	    Attr: IMetaAttribute;

	    SS: IMetaAttributesSubset;

	    Rds: IMetabaseObjectDescriptor;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Rubr := MB.ItemById("OBJ_FC").Bind As IRubricator;

	    Facts := Rubr.Facts;

	    Atts := Facts.Attributes;

	    SS := Atts.CreateSubset("KEY;REV", SubsetOperation.Select_);

	    Rds := mb.ItemById("RDS_REPO");

	    Attr := Atts.FindByValuesObject(MB.GetObjectKeyByIdNamespace("DICT_CTR", Rds.Key));

	    If Attr <> Null Then

	        SS.Add(Attr);

	    End If;

	    For i := 0 To SS.Count - 1 Do

	        Debug.WriteLine(SS.Item(i).Name);

	    End For;

	End Sub UserProc;


После выполнения примера будет создан набор, состоящий из атрибутов
 «KEY» и «REV».
 Если у показателей базы данных временных рядов присутствует атрибут, ссылающийся
 на справочник с идентификатором DICT_CTR в репозитории НСИ, то данный
 атрибут также будет добавлен в набор. В окно консоли будут выведены наименования
 всех атрибутов, входящих в набор.


См. также:


[IMetaAttributesSubset](IMetaAttributesSubset.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
