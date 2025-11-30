# IMetaDataMembers.FindByTag

IMetaDataMembers.FindByTag
-


# IMetaDataMembers.FindByTag


## Синтаксис


FindByTag(tTag: [MetaAttributeTag](../../Enums/MetaAttributeTag.htm)):
 [IMetaDataMember](../IMetaDataMember/IMetaDataMember.htm);


## Параметры


tTag - вид искомого атрибута.


## Описание


Метод FindByTag осуществляет
 поиск записи в коллекции по виду атрибута.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором OBJ_FC. В данной базе присутствует показатель
 с ключом «90100».


Добавьте ссылки на системные сборки Metabase, Rds, Cubes.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RubrIn: IRubricatorInstance;

	    FactD: IRubricatorFactData;

	    RubRev: IRubricatorRevision;

	    Members: IMetaDataMembers;

	Begin

	    MB := MetabaseClass.Active;

	    RubrIn := MB.ItemById("OBJ_FC").Open(Null) As IRubricatorInstance;

	    RubRev := RubrIn.OpenRevision("Test_Revision");

	    FactD := RubrIn.GetFactData(90100, DictionaryGetDataOptions.EditExisting);

	    If FactD.IsEdited Then

	        Members := FactD.Record.Members;

	        Members.FindByTag(MetaAttributeTag.Unit).Value := 3530;

	        FactD.SaveAndRevise(SaveRubricatorDataOptions.NoRevise);

	    End If;

	End Sub UserProc;


После выполнения примера будет изменено значение атрибута показателя
 с ключом «90100». Атрибут, определяющий единицы измерения, будет получен
 по его виду.


См. также:


[IMetaDataMembers](IMetaDataMembers.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
