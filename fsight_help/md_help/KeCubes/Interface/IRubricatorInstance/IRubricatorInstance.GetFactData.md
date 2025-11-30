# IRubricatorInstance.GetFactData

IRubricatorInstance.GetFactData
-


# IRubricatorInstance.GetFactData


## Синтаксис


GetFactData(

    FactorKey: Integer;

    [Options: [DictionaryGetDataOptions](KeRds.chm::/Enums/DictionaryGetDataOptions.htm)
 = 0]): [IRubricatorFactData](../IRubricatorFactData/IRubricatorFactData.htm);


## Параметры


FactorKey. Ключ показателя;


Options. Параметр получения
 данных.


## Описание


Метод GetFactData возвращает
 данные из справочника показателей по ключу показателя.


## Комментарии


Если Options = DictionaryGetDataOptions.Create
 или Options = DictionaryGetDataOptions.Edit,
 т.е. данные создаются или редактируются, то должна быть создана ревизия.
 Для создания ревизии используйте метод [IRubricatorInstance.OpenRevision](IRubricatorInstance.OpenRevision.htm).


## Пример


Для выполнения примера в репозитории должна существовать БД временных
 рядов с идентификатором TSDB, содержащая показатель с ключом 1.


Добавьте ссылки на системные сборки: Cubes, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RubDesc: IMetabaseObjectDescriptor;

	    RubrIn: IRubricatorInstance;

	    FactD: IRubricatorFactData;

	Begin

	    MB := MetabaseClass.Active;

	    RubDesc := MB.ItemById("TSDB");

	    RubrIn := RubDesc.Open(Null) As IRubricatorInstance;

	    FactD := RubrIn.GetFactData(1);

	    If FactD.IsEdited Then

	        Debug.WriteLine("Показатель доступен для редактирования");

	    Else

	        Debug.WriteLine("Показатель доступен только для чтения");

	    End If;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведена информация о
 том, доступен ли показатель с ключом 1 для редактирования .


См. также:


[IRubricatorInstance](IRubricatorInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
