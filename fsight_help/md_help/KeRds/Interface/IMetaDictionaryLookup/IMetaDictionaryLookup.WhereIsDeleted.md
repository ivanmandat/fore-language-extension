# IMetaDictionaryLookup.WhereIsDeleted

IMetaDictionaryLookup.WhereIsDeleted
-


# IMetaDictionaryLookup.WhereIsDeleted


## Синтаксис


WhereIsDeleted: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство WhereIsDeleted определяет,
 участвуют ли в поиске удаленные записи:


	- TriState.OnOption - поиск производится только среди удаленных
	 записей.


	- TriState.OffOption - поиск производится только среди не удаленных
	 записей.


	- TriState.Undefined - поиск производится по всем записям.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_FC.


Добавьте ссылки на системные сборки: Metabase, Cube, Rds.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RubDesc: IMetabaseObjectDescriptor;

	    RubrIn: IRubricatorInstance;

	    DictInst: IMetaDictionaryInstance;

	    MetaDLookup: IMetaDictionaryLookup;

	    Atts: IMetaAttributes;

	    DeleteMark: String;

	    i: Integer;

	    Res: Array Of Integer;

	Begin

	    MB := MetabaseClass.Active;

	    RubDesc := MB.ItemById("OBJ_FC");

	    RubrIn := RubDesc.Open(Null) As IRubricatorInstance;

	    DictInst := RubrIn.Facts;

	    MetaDLookup := DictInst.CreateLookup("");

	    Atts := DictInst.Dictionary.Attributes;

	    DeleteMark := Atts.FindByTag(MetaAttributeTag.DeleteMark).Id;

	    MetaDLookup.DeleteMarkAttribute := DeleteMark;

	    MetaDLookup.WhereIsDeleted := TriState.OnOption;

	    i := MetaDLookup.LookupKeys("FACTOR").Length;

	    Res := New Integer[i];

	    Res := MetaDLookup.LookupKeys("FACTOR");

	    For i := 0 To Res.Length - 1 Do

	        Debug.WriteLine(Res[i].ToString);

	    End For;

	End Sub Userproc;


После выполнения примера в окно консоли будут выведены ключи удаленных
 показателей.


См. также:


[IMetaDictionaryLookup](IMetaDictionaryLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
