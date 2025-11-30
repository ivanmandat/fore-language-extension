# IRubricatorFactor.CompoundFactor

IRubricatorFactor.CompoundFactor
-


# IRubricatorFactor.CompoundFactor


## Синтаксис


CompoundFactor: Variant;


## Описание


Свойство CompoundFactor возвращает
 составной ключ временного ряда.


## Комментарии


Полные данные о временном ряде возвращает свойство [IRubricatorFactor.FactData](IRubricatorFactor.FactData.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие БД временных
 рядов с идентификатором RUBRICATOR_CUBE. Данная база должна быть основана
 на таблице данных.


Добавьте ссылки на системные сборки: Cubes, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    RubI: IRubricatorInstance;

	    Key: Array[2];

	    KeyRes: Array Of Variant;

	    FactD: IRubricatorFactData;

	    Factor: IRubricatorFactor;

	    i: Integer;

	Begin

	    mb := MetabaseClass.Active;

	    // Получаем  БД временных рядов

	    RubI := mb.ItemById("RUBRICATOR_CUBE").Open(Null) As IRubricatorInstance;

	    // Задаем составной ключ

	    Key[0] := 512;

	    Key[1] := 1009;

	    // Получаем временной ряд по значению составного ключа

	    FactD := RubI.GetCompoundFactData(Key);

	    Factor := FactD.Factor;

	    KeyRes := Factor.CompoundFactor As Array Of Variant;

	    For i := 0 To KeyRes.Length - 1 Do

	        Debug.WriteLine(KeyRes[i]);

	    End For;

	End Sub UserProc;


Результат выполнения примера: в окно консоли будут выведены значения,
 образующие составной ключ для найденного временного ряда.


См. также:


[IRubricatorFactor](IRubricatorFactor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
