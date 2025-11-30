# IMetaDataMemberRecord.Key

IMetaDataMemberRecord.Key
-


# IMetaDataMemberRecord.Key


## Синтаксис


Key: Integer;


## Описание


Свойство Key возвращает ключ
 записи.


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

	    Debug.WriteLine(MemberRecord.Key.ToString);

	End Sub UserProc;


После выполнения примера для показателя с ключом «94000» в окно консоли
 будет выведен ключ записи с данными о показателе.


См. также:


[IMetaDataMemberRecord](IMetaDataMemberRecord.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
