# IRubricator.HasEmptyAttribute

IRubricator.HasEmptyAttribute
-


# IRubricator.HasEmptyAttribute


## Синтаксис


HasEmptyAttribute: Boolean;


## Описание


Свойство HasEmptyAttribute определяет,
 присутствует ли в базе данных временных рядов признак пустоты показателей.


## Комментарии


Признак пустоты показателя зависит от значения атрибута показателей
 «Пустой» (идентификатор - «EMPT»).


Допустимые значения:


	- True. В базе присутствует
	 атрибут показателей «Пустой»;


	- False. Значение по умолчанию.
	 Атрибут показателей «Пустой» отсутствует в базе.


Если у показателя все значения в БД на актуальную ревизию являются пустыми
 (отсутствуют или равны Null),
 то у него устанавливается признак пустоты. Новый показатель считается
 пустым, пока в него не сохранили данные.


Для обновления признака пустоты показателей используйте метод [IRubricatorInstance.RegenerateEmpty](../IRubricatorInstance/IRubricatorInstance.RegenerateEmpty.htm).


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором «FC_IS_EMPTY». Добавьте ссылки на системные
 сборки «Metabase», «Cubes».


			Sub UserProc;

Var

    mb: IMetabase;

    RubObj: IMetabaseObject;

    Rubr: IRubricator;

    RubrInst: IRubricatorInstance;

    FactsLookup: IRubricatorFactsLookup;

    LookupRes: Array Of Integer;

    Key: integer;

    FactD: IRubricatorFactData;

Begin

    mb := MetabaseClass.Active;

    RubObj := mb.ItemById("FC_IS_EMPTY").Edit;

    Rubr := RubObj As IRubricator;

    If Not Rubr.HasEmptyAttribute Then

        Rubr.HasEmptyAttribute := True;

        RubObj.Save;

    End If;

    RubrInst := RubObj.Open(Null) As IRubricatorInstance;

    RubrInst.RegenerateEmpty(Null);

    FactsLookup := RubrInst.CreateFactsLookup;

    FactsLookup.WhereIsEmpty := TriState.OnOption;

    LookupRes := FactsLookup.LookupFactors;

    If LookupRes <> Null Then

        For Each Key In LookupRes Do

            FactD := RubrInst.GetFactData(Key);

            Debug.WriteLine("Ключ = " + Key.ToString + " Мнемоника = " + FactD.Mnemo);

        End For;

    Else

        Debug.WriteLine("Показатели не найдены");

    End If;

End Sub UserProc;


После выполнения примера для базы данных временных рядов будет добавлен
 признак пустоты показателя и обновлено значение данного признака. Ключи
 и мнемоники пустых показателей будут выведены в окно консоли.


См. также:


[IRubricator](IRubricator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
