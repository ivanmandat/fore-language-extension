# IMetaDataMembers.FindByKind

IMetaDataMembers.FindByKind
-


# IMetaDataMembers.FindByKind


## Синтаксис


FindByKind(kKind: [MetaAttributeKind](../../Enums/MetaAttributeKind.htm);
 [StartIndex: Integer = 0]): [IMetaDataMember](../IMetaDataMember/IMetaDataMember.htm);


## Параметры


kKind - тип атрибута.


StartIndex - начальный индекс.
 Необязательный параметр, значение по умолчанию «0».


## Описание


Метод FindByKind осуществляет
 поиск записи в коллекции по типу атрибута.


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

	End Sub UserProc;


После выполнения примера для показателя с ключом «94000» будет изменена
 календарная динамика. Атрибут, определяющий единицы измерения, будет получен
 по типу.


См. также:


[IMetaDataMembers](IMetaDataMembers.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
