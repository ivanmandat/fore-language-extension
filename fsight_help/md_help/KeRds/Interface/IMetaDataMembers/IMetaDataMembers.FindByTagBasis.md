# IMetaDataMembers.FindByTagBasis

IMetaDataMembers.FindByTagBasis
-


# IMetaDataMembers.FindByTagBasis


## Синтаксис


FindByTagBasis(tTag: [MetaAttributeTag](../../Enums/MetaAttributeTag.htm);
 Basis: Integer): [IMetaDataMember](../IMetaDataMember/IMetaDataMember.htm);


## Параметры


tTag - вид искомого атрибута.


Basis - базис, по которому
 осуществляется поиск.


## Описание


Метод FindByTagBasis осуществляет
 поиск записи в коллекции по виду атрибута и базису.


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

	        Members.FindByTagBasis(MetaAttributeTag.Unit, -1).Value := 3530;

	        FactD.SaveAndRevise(SaveRubricatorDataOptions.NoRevise);

	    End If;

	End Sub UserProc;


После выполнения примера будет изменено значение атрибута показателя
 с ключом «90100». Атрибут, определяющий единицы измерения, будет получен
 по виду и базису.


См. также:


[IMetaDataMembers](IMetaDataMembers.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
