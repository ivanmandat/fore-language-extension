# IMetaDataMemberRecord.SetMembersRecord

IMetaDataMemberRecord.SetMembersRecord
-


# IMetaDataMemberRecord.SetMembersRecord


## Синтаксис


SetMembersRecord(Value: [IOrmRecord](KeOrm.chm::/Interface/IOrmRecord/IOrmRecord.htm));


## Параметры


Value. Запись, из которой будут
 установлены значения атрибутов.


## Описание


Метод SetMembersRecord устанавливает
 значения атрибутов из записи.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 Button с идентификатором «Button», компонент MetaAttributesTreeList с
 идентификатором «MetaAttributesTreeList1». К данному компоненту должен
 быть подключен компонент MetaAttributesBreadcrumb с идентификатором «MetaAttributesBreadcrumb1».
 MetaAttributesBreadcrumb1 должен быть настроен на работу с базой данных
 временных рядов, содержащей показатель с ключом «155813». Пример является
 обработчиком события OnClick для компонента «Button1». Перед выполнением
 примера в компоненте MetaAttributesTreeList1 выберите один показатель.


Добавьте ссылки на системные сборки Metabase, Cubes, Orm, Rds.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    mb: IMetabase;

    RubrIn: IRubricatorInstance;

    RubRev: IRubricatorRevision;

    FactD: IRubricatorFactData;

    MemberRecord: IMetaDataMemberRecord;

    memb: IMetaMember;

    Record: IOrmRecord;

Begin

    mb := MetabaseClass.Active;

    RubrIn := MetaAttributesBreadcrumb1.Rubricator;

    RubRev := RubrIn.OpenRevision("Test_Revision");

    FactD := RubrIn.GetFactData(155813, DictionaryGetDataOptions.EditExisting);

    MemberRecord := FactD.Record;

    Memb := MetaAttributesTreeList1.SelectedMembers.Current;

    Record := memb.Tuple;

    MemberRecord.SetMembersRecord(Record);

    FactD.SaveAndRevise(SaveRubricatorDataOptions.NoValidateRules);

End Sub Button1OnClick;


После выполнения примера значения атрибутов выделенного показателя будут
 установлены для показателя с указанным ключом.


См. также:


[IMetaDataMemberRecord](IMetaDataMemberRecord.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
