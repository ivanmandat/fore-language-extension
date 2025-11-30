# IMetaDataMembers.FindById

IMetaDataMembers.FindById
-


# IMetaDataMembers.FindById


## Синтаксис


FindById(Id: String): [IMetaDataMember](../IMetaDataMember/IMetaDataMember.htm);


## Параметры


Id - идентификатор атрибута.


## Описание


Метод FindById осуществляет
 поиск записи в коллекции по идентификатору атрибута.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором OBJ_FC. В данной базе присутствует показатель
 с ключом «94000».


Добавьте ссылки на системные сборки Metabase, Rds, Cubes.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RubrIn: IRubricatorInstance;

	    FactD: IRubricatorFactData;

	    RubRev: IRubricatorRevision;

	    Members: IMetaDataMembers;

	    MemberRecord: IMetaDataMemberRecord;

	Begin

	    MB := MetabaseClass.Active;

	    RubrIn := MB.ItemById("OBJ_FC").Open(Null) As IRubricatorInstance;

	    RubRev := RubrIn.OpenRevision("Test_Revision");

	    FactD := RubrIn.GetFactData(94000, DictionaryGetDataOptions.EditExisting);

	    MemberRecord := FactD.Record;

	    Members := MemberRecord.Members;

	    Debug.WriteLine(Members.FindById("REV").Value);

	End Sub UserProc;


После выполнения примера в окно консоли для показателя с ключом «94000»
 будет выведено значение атрибута «REV» («Ревизия»).


См. также:


[IMetaDataMembers](IMetaDataMembers.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
