# IMetaDataMember.Value

IMetaDataMember.Value
-


# IMetaDataMember.Value


## Синтаксис


Value: Variant;


## Описание


Свойство Value определяет значение
 записи.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «OBJ_FC». В базе данных временных рядов
 должен существовать показатель с ключом «1».


Добавьте ссылки на системные сборки Metabase, Rds, Cubes.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RubDesc: IMetabaseObjectDescriptor;

	    RubrIn: IRubricatorInstance;

	    FactD: IRubricatorFactData;

	    Record: IRubricatorRecord;

	    DataMember: IMetaDataMember;

	    a: Array;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    RubDesc := MB.ItemById("OBJ_FC");

	    RubrIn := RubDesc.Open(Null) As IRubricatorInstance;

	    FactD := RubrIn.GetFactData(1);

	    Record := FactD As IRubricatorRecord;

	    DataMember := Record.Record As IMetaDataMember;

	    a := DataMember.Value As Array;

	    If a <> Null Then

	        For i := 0 To a.Length - 1 Do

	            Debug.WriteLine(a[i] As String);

	        End For;

	    End If;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены данные записи
 системной таблицы, содержащей информацию о показателе с ключом «1».


См. также:


[IMetaDataMember](IMetaDataMember.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
