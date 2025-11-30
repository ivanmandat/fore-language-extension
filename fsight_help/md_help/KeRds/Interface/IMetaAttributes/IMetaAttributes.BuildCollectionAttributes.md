# IMetaAttributes.BuildCollectionAttributes

IMetaAttributes.BuildCollectionAttributes
-


# IMetaAttributes.BuildCollectionAttributes


## Синтаксис


BuildCollectionAttributes;


## Описание


Метод BuildCollectionAttributes
 создает атрибуты в системной таблице, необходимые для хранения множественных
 значений. Следует использовать данный метод при создании атрибута, поддерживающего
 множественные значения.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_FC и репозитория НСИ с идентификатором
 RDS_REPO. В репозитории НСИ должен присутствовать справочник с идентификатором
 DICT_COUNTRY.


Добавьте ссылки на системные сборки Metabase, Rds, Cubes.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Rubr: IRubricator;

	    Facts: IMetabaseObject;

	    Att: IMetaAttribute;

	    CollectionAtt: IMetaAttributes;

	Begin

	    MB := MetabaseClass.Active;

	    Rubr := MB.ItemById("OBJ_FC").Bind As IRubricator;

	    Facts := (Rubr.Facts As IMetabaseObject).Edit;

	    Att := (Facts As IMetaDictionary).Attributes.Add;

	    Att.DataType := DbDataType.Integer;

	    Att.Id := "A_M_REF";

	    Att.Name := "Новый атрибут";

	    Att.Kind := (MetaAttributeKind.Collection) Or (MetaAttributeKind.Dimension);

	    Att.ValuesObject := MB.ItemByIdNamespace("DICT_COUNTRY", Mb.ItemById("RDS_REPO").Key);

	    Att.DataType := DbDataType.Integer;

	    Att.HasMultipleValues := True;

	    CollectionAtt := Att.CollectionAttributes;

	    CollectionAtt.BuildCollectionAttributes;

	    CollectionAtt.CreateTable(True);

	    Facts.Save;

	End Sub UserProc;


После выполнения примера для базы данных временных рядов с идентификатором
 OBJ_FC будет добавлен атрибут с наименованием «Новый
 атрибут», который является ссылкой на справочник с идентифиатором
 DICT_COUNTRY и поддерживает множественные значения. Также будет создана
 системная таблица для хранения множественных значений атрибута.


См. также:


[IMetaAttributes](IMetaAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
