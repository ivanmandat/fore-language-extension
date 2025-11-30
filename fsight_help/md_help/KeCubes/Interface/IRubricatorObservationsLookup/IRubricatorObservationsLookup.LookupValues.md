# IRubricatorObservationsLookup.LookupValues

IRubricatorObservationsLookup.LookupValues
-


# IRubricatorObservationsLookup.LookupValues


## Синтаксис


LookupValues([Options: [DictionaryGetDataOptions](KeRds.chm::/Enums/DictionaryGetDataOptions.htm)
 = 0]): [IFactorObservationValues](../IFactorObservationValues/IFactorObservationValues.htm);


## Параметры


Options.
 Параметр
 получения данных.


## Описание


Метод LookupValues осуществляет
 поиск.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR.


			Sub UserProc;

Var

    MB: IMetabase;

    RubrInst: IRubricatorInstance;

    FactsLookup: IRubricatorFactsLookup;

    MetaDLookup: IMetaDictionaryLookup;

    Cond: IOrmCondition;

    FD: IRubricatorFactData;

    ObsLook: IRubricatorObservationsLookup;

    ObsVal: IFactorObservationValues;

Begin

    MB := MetabaseClass.Active;

    RubrInst := MB.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    FactsLookup := RubrInst.CreateFactsLookup;

    MetaDLookup := FactsLookup.Lookup;

    Cond := MetaDLookup.Where.Add;

    Cond.AttributeName := "FACTOR";

    Cond.Value := 1;

    FD := FactsLookup.LookupData;

    ObsLook := RubrInst.CreateObservationsLookup(FD);

    ObsLook.WhereCalendarPoint := DateTime.Parse("01.01.2020 00:00:00");

    ObsLook.WhereCalendarLevel := DimCalendarLevel.Year;

    ObsLook.WhereScenario := -1;

    ObsVal := ObsLook.LookupValues;

End Sub UserProc;


После выполнения примера в переменной ObsVal будут храниться данные
 найденных показателей.


См. также:


[IRubricatorObservationsLookup](IRubricatorObservationsLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
