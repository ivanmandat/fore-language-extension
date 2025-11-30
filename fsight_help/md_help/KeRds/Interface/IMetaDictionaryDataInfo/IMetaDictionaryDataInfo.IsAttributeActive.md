# IMetaDictionaryDataInfo.IsAttributeActive

IMetaDictionaryDataInfo.IsAttributeActive
-


# IMetaDictionaryDataInfo.IsAttributeActive


## Синтаксис


IsAttributeActive(Attribute: Variant): Boolean;


## Параметры


Attribute. Атрибут.


## Описание


Метод IsAttributeActive возвращает
 признак того, что указанный групповой атрибут доступен для показателя.


## Комментарии


Если IsAttributeActive возвращает
 значение True, то групповой
 атрибут доступен для показателя.


В качестве значения параметра Attribute
 можно передавать:


	- атрибут, реализованный интерфейсом [IMetaAttribute](../IMetaAttribute/IMetaAttribute.htm);


	- идентификатор атрибута в строковом виде;


	- ключ атрибута в виде целого числа.


Признак того, что показатель входит в указанную группу возвращает метод
 [IMetaDictionaryDataInfo](IMetaDictionaryDataInfo.htm).


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором FC_GROUPS, содержащей групповой атрибут с идентификатором
 ATTR_GROUP.


Добавьте ссылки на системные сборки: Rds, Metabase, Cubes.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    RubDesc: IMetabaseObjectDescriptor;

	    Rub: IRubricator;

	    RubrIn: IRubricatorInstance;

	    Dic: IMetaDictionary;

	    i: Integer;

	    key: Array Of Integer;

	    FactsLookup: IRubricatorFactsLookup;

	    FactData: IRubricatorFactData;

	    FactInfo: IMetaDictionaryDataInfo;

	    Attr: IMetaAttribute;

	    Memb: IMetaDataMember;

	    MembGroup: IMetaDataMemberGroup;

	    GroupRecord: IMetaDataMemberRecord;

	Begin

	    mb := MetabaseClass.Active;

	    RubDesc := mb.ItemById("FC_GROUPS");

	    Rub := RubDesc.Bind As IRubricator;

	// Получаем справочник показателей базы
	 данных временных рядов

	    Dic := (Rub.Facts As IMetabaseObject).Edit As IMetaDictionary;

	// Получаем групповой атрибут показателей

	    Attr := Dic.Attributes.FindById("ATTR_GROUP");

	// Получаем массив ключей показателей

	    RubrIn := RubDesc.Open(Null) As IRubricatorInstance;

	    FactsLookup := RubrIn.CreateFactsLookup;

	    i := FactsLookup.LookupFactors.Length;

	    key := New Integer[i];

	    key := FactsLookup.LookupFactors;

	    For Each i In key Do

	        FactData := RubrIn.GetFactData(i);

	        FactInfo := FactData As IMetaDictionaryDataInfo;

	        If FactInfo.IsAttributeActive(Attr) Then

	            Debug.WriteLine("Показатель: " + FactData.Mnemo);

	            Memb := FactData.Record.Members.FindById(Attr.Id);

	            MembGroup := Memb As IMetaDataMemberGroup;

	            Debug.WriteLine("  значение группового атрибута: " + MembGroup.SelfValue);

	            GroupRecord := MembGroup.GroupRecord;

	            Debug.WriteLine("  доступность для редактирования: " + GroupRecord.IsEdited.ToString);

	        End If;

	    End For;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены значение и доступность
 для редактирования группового атрибута для всех показателей, которые входят
 в группу.


См. также:


[IMetaDictionaryDataInfo](IMetaDictionaryDataInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
