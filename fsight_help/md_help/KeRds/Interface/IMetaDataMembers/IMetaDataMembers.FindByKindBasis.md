# IMetaDataMembers.FindByKindBasis

IMetaDataMembers.FindByKindBasis
-


# IMetaDataMembers.FindByKindBasis


## Синтаксис


FindByKindBasis(kKind: [MetaAttributeKind](../../Enums/MetaAttributeKind.htm);
 Basis: Integer): [IMetaDataMember](../IMetaDataMember/IMetaDataMember.htm);


## Параметры


kKind - тип искомого атрибута.


Basis - базис, по которому
 осуществляется поиск.


## Описание


Метод FindByKindBasis осуществляет
 поиск записи в коллекции по типу атрибута и базису.


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

	        Members.FindByKindBasis(MetaAttributeKind.Unit, -1).Value := 3530;

	        FactD.SaveAndRevise(SaveRubricatorDataOptions.NoRevise);

	    End If;

	End Sub Userproc;


После выполнения примера будет изменено значение атрибута показателя
 с ключом «90100». Атрибут, определяющий единицы измерения, будет получен
 по типу и базису.


См. также:


[IMetaDataMembers](IMetaDataMembers.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
