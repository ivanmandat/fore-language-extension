# IMetaAttributes.Add

IMetaAttributes.Add
-


# IMetaAttributes.Add


## Синтаксис


Add([AddField: Boolean = True]):
 [IMetaAttribute](../IMetaAttribute/IMetaAttribute.htm);


## Параметры


AddField - параметр, определяющий,
 будет ли создаваться новое поле в таблице для хранения значений атрибута.


По умолчанию передается значение True,
 при этом создается новое поле в таблице.


Если передавать значение False,
 то поле создано не будет. Для создания новой, либо обновления текущей
 таблицы, после изменения списка атрибутов будет необходимо вызвать метод
 [CreateTable](IMetaAttributes.CreateTable.htm) (Для обновления
 списка полей в существующей таблице можно использовать метод [BuildFieldsByAttributes](IMetaAttributes.BuildFieldsByAttributes.htm)).


## Описание


Метод Add осуществляет добавление
 атрибута в коллекцию.


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


После выполнения примера в справочнике, содержащем информацию о показателях
 базы данных временных рядов с идентификатором «OBJ_FC», будет добавлен
 атрибут с наименованием «Новый атрибут». Данный атрибут является ссылкой
 на справочник и поддерживает множественные значения. Также будет создана
 системная таблица для хранения множественных значений нового атрибута.


См. также:


[IMetaAttributes](IMetaAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
