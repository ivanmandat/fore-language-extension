# IMetaDataMember.UnmodifiedValue

IMetaDataMember.UnmodifiedValue
-


# IMetaDataMember.UnmodifiedValue


## Синтаксис


UnmodifiedValue: Variant;


## Описание


Свойство UnmodifiedValue возвращает
 значение записи до изменения.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором OBJ_RUBRICATOR. В данной базе должен присутствовать
 показатель с ключом «1».


Добавьте ссылки на системные сборки Metabase, Rds, Cubes.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RubDesc: IMetabaseObjectDescriptor;

	    RubrIn: IRubricatorInstance;

	    Rev: IRubricatorRevision;

	    FactD: IRubricatorFactData;

	    Record: IMetaDataMemberRecord;

	    MemberRecord: IMetaDataMember;

	Begin

	    MB := MetabaseClass.Active;

	    RubDesc := MB.ItemById("OBJ_RUBRICATOR");

	    RubrIn := RubDesc.Open(Null) As IRubricatorInstance;

	    Rev := RubrIn.OpenRevision("Revision");

	    FactD := RubrIn.GetFactData(1, DictionaryGetDataOptions.Edit);

	    Record := FactD.Record;

	    MemberRecord := Record.Members.FindById("DL");

	    MemberRecord.Value := 3;

	    Debug.WriteLine("Значение до изменения: "+MemberRecord.UnmodifiedValue);

	    Debug.WriteLine("Значение после изменения: "+MemberRecord.Value);

	    FactD.Save;

	End Sub UserProc;


После выполнения примера для показателя будет изменен уровень календарного
 измерения. В окно консоли будет выведена информация о календарном уровне
 до и после изменений.


См. также:


[IMetaDataMember](IMetaDataMember.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
