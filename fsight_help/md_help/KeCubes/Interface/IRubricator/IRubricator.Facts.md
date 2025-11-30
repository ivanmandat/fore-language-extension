# IRubricator.Facts

IRubricator.Facts
-


# IRubricator.Facts


## Синтаксис


Facts: [IMetaDictionary](KeRds.chm::/Interface/IMetaDictionary/IMetaDictionary.htm);


## Описание


Свойство Facts определяет справочник
 репозитория НСИ, содержащий информацию о показателях базы данных временных
 рядов.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором NewCatalog.


			Sub UserProc;

Var

    MB: IMetabase;

    Rubr: IRubricator;

    Facts: IMetabaseObject;

    Att: IMetaAttribute;

Begin

    MB := MetabaseClass.Active;

    Rubr := MB.ItemById("OBJ_RUBRICATOR").Bind As IRubricator;

    Facts := (Rubr.Facts As IMetabaseObject).Edit;

    Att := (Facts As IMetaDictionary).Attributes.Add;

    Att.DataType := DbDataType.Integer;

    Att.Id := "NewAttribute";

    Att.Name := "Новый дополнительный атрибут";

    Facts.Save;

End Sub UserProc;


После выполнения примера в справочник, содержащий информацию о показателях
 базы, будет добавлен атрибут с заданными параметрами.


См. также:


[IRubricator](IRubricator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
