# IRubricatorFactsLookup.LookupData

IRubricatorFactsLookup.LookupData
-


# IRubricatorFactsLookup.LookupData


## Синтаксис


LookupData([Options: [DictionaryGetDataOptions](KeRds.chm::/Enums/DictionaryGetDataOptions.htm) = 0]): [IRubricatorFactData](../IRubricatorFactData/IRubricatorFactData.htm);


## Параметры


Options. Параметр получения данных. Необязательный параметр. Значение по умолчанию - [DictionaryGetDataOptions.None](KeRds.chm::/Enums/DictionaryGetDataOptions.htm) - получение данных для чтения.


## Описание


Метод LookupData позволяет получить данные показателя.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных временных рядов с идентификатором «OBJ_RUBRICATOR». В базе показателей должен существовать показатель с ключом «1».


			Sub UserProc;

Var

    MB: IMetabase;

    RubDesc: IMetabaseObjectDescriptor;

    RubrIn: IRubricatorInstance;

    FactsLookup: IRubricatorFactsLookup;

    MetaDLookup: IMetaDictionaryLookup;

    Сond: IOrmCondition;

    FD: IRubricatorFactData;

    FactorObVal: IFactorObservationValues;

Begin

    MB := MetabaseClass.Active;

    RubDesc := MB.ItemById("OBJ_RUBRICATOR");

    RubrIn := RubDesc.Open(Null) As IRubricatorInstance;

    FactsLookup := RubrIn.CreateFactsLookup;

    MetaDLookup := FactsLookup.Lookup;

    Сond := MetaDLookup.Where.Add;

    Сond.AttributeName := "FACTOR";

    Сond.Value := 1;

    FD := FactsLookup.LookupData;

    FactorObVal := RubrIn.GetObservationValues(FD, DateTime.Parse("01.01.2002 00:00:00"));

End Sub UserProc;


После выполнения примера в переменной FactorObVal будет храниться объект, содержащий данные показателя с ключом «1» на первое января 2002 года.


См. также:


[IRubricatorFactsLookup](IRubricatorFactsLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
