# IMetaDictionaryLookup.WhereIsEmpty

IMetaDictionaryLookup.WhereIsEmpty
-


# IMetaDictionaryLookup.WhereIsEmpty


## Синтаксис


WhereIsEmpty: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство WhereIsEmpty определяет,
 участвуют ли в поиске записи, для которых установлен признак пустоты.


## Комментарии


Признак пустоты показателя зависит от значения атрибута показателей
 «Пустой». Идентификатор данного атрибута определяет свойство [IMetaDictionaryLookup.EmptyMarkAttribute](IMetaDictionaryLookup.EmptyMarkAttribute.htm).


Допустимые значения:


	- TriState.OnOption. Поиск
	 производится только среди пустых записей;


	- TriState.OffOption.
	 Поиск производится только среди непустых записей;


	- TriState.Undefined.
	 По умолчанию. Поиск производится по всем записям.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором FC_IS_EMPTY. В данной базе присутствует признак
 пустоты показателей.


Добавьте ссылки на системные сборки: Cubes, Metabase, Rds.


			Sub UserProc;

Var

    MB: IMetabase;

    RubDesc: IMetabaseObjectDescriptor;

    RubrIn: IRubricatorInstance;

    DictInst: IMetaDictionaryInstance;

    MetaDLookup: IMetaDictionaryLookup;

    i: Integer;

    Res: Array Of Integer;

Begin

    MB := MetabaseClass.Active;

    RubDesc := MB.ItemById("FC_IS_EMPTY");

    RubrIn := RubDesc.Open(Null) As IRubricatorInstance;

    DictInst := RubrIn.Facts;

    MetaDLookup := DictInst.CreateLookup("");

    MetaDLookup.EmptyMarkAttribute := "EMPT";

    MetaDLookup.WhereIsEmpty := TriState.OnOption;

    i := MetaDLookup.LookupKeys("FACTOR").Length;

    Res := New Integer[i];

    Res := MetaDLookup.LookupKeys("FACTOR");

    For i := 0 To Res.Length - 1 Do

        Debug.WriteLine(Res[i].ToString);

    End For;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены ключи показателей,
 для которых установлен признак пустоты.


См. также:


[IMetaDictionaryLookup](IMetaDictionaryLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
