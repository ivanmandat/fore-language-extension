# IMetaDataMemberRecord.IsEdited

IMetaDataMemberRecord.IsEdited
-


# IMetaDataMemberRecord.IsEdited


## Синтаксис


IsEdited: Boolean;


## Описание


Свойство IsEdited возвращает
 признак того, доступна ли запись для редактирования. True
 - запись доступна для редактирования, False
 - запись доступна только для чтения.


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

	    If MemberRecord.IsEdited Then

	        Members := MemberRecord.Members;

	        Members.FindByKind(MetaAttributeKind.CalendarLevel).Value := DimCalendarLevel.Year;

	        FactD.SaveAndRevise(SaveRubricatorDataOptions.NoRevise);

	    End If;

	End Sub Main;


После выполнения примера для показателя с ключом «94000» будет изменена
 календарная динамика, если он доступен для редактирования.


См. также:


[IMetaDataMemberRecord](IMetaDataMemberRecord.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
