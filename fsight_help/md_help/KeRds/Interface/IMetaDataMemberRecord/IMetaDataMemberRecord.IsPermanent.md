# IMetaDataMemberRecord.IsPermanent

IMetaDataMemberRecord.IsPermanent
-


# IMetaDataMemberRecord.IsPermanent


## Синтаксис


IsPermanent: Boolean;


## Описание


Свойство IsPermanent возвращает
 признак того, сохранены ли данные записи в базе данных. True
 - запись сохранена, False - запись
 не сохранена.


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

	    MemberRecord: IMetaDataMemberRecord;

	Begin

	    MB := MetabaseClass.Active;

	    RubrIn := MB.ItemById("OBJ_FC").Open(Null) As IRubricatorInstance;

	    FactD := RubrIn.GetFactData(94000);

	    MemberRecord := FactD.Record;

	    If MemberRecord.IsPermanent

	        Then Debug.WriteLine("Данные сохранены");

	        Else Debug.WriteLine("Данные не сохранены");

	    End If;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведена информация о
 том, сохранены ли данные показателя.


См. также:


[IMetaDataMemberRecord](IMetaDataMemberRecord.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
