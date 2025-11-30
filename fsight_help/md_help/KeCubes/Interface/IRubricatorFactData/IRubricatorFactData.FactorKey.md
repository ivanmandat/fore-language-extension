# IRubricatorFactData.FactorKey

IRubricatorFactData.FactorKey
-


# IRubricatorFactData.FactorKey


## Синтаксис


FactorKey: Integer;


## Описание


Свойство FactorKey возвращает
 ключ временного ряда.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором OBJ_RUBRICATOR. В данной базе присутствует временной
 ряд с ключом 94173.


			Sub UserProc;

Var

    MB: IMetabase;

    RubrIn: IRubricatorInstance;

    FactD: IRubricatorFactData;

    RubRev: IRubricatorRevision;

Begin

    MB := MetabaseClass.Active;

    RubrIn := MB.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    RubRev := RubrIn.OpenRevision("Test_Revision");

    FactD := RubrIn.GetFactData(94173, DictionaryGetDataOptions.Edit);

    FactD.CalendarLevel := DimCalendarLevel.Year Or DimCalendarLevel.Quarter;

    FactD.Units := 3436;

    Debug.WriteLine("Наименование текущей ревизии: " + FactD.Revision.Name);

    Debug.WriteLine("Ключ ревизии, в которой создан показатель: " + FactD.RevisionKey.ToString);

    Debug.WriteLine("Ключ показателя: " + FactD.FactorKey.ToString);

    Debug.WriteLine("Наименование: " + FactD.RecordName);

    Debug.WriteLine("Ключ объекта импорта: " + FactD.ObjectKey.ToString);

    FactD.SaveAndRevise(SaveRubricatorDataOptions.NoRevise);

End Sub UserProc;


После выполнения примера для указанного временного ряда будут изменены
 календарная динамика и единицы измерения. В окно консоли будет выведена
 информация о показателе.


См. также:


[IRubricatorFactData](IRubricatorFactData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
