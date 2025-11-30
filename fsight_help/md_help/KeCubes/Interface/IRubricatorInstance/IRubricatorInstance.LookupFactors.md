# IRubricatorInstance.LookupFactors

IRubricatorInstance.LookupFactors
-


# IRubricatorInstance.LookupFactors


## Синтаксис


LookupFactors(Facts: [IRubricatorFactsLookup](../IRubricatorFactsLookup/IRubricatorFactsLookup.htm);
 Observations: [IRubricatorObservationsLookup](../IRubricatorObservationsLookup/IRubricatorObservationsLookup.htm)):
 Array;


## Параметры


Facts. Ограничения, накладываемые
 на показатели.


Observations. Ограничения,
 накладываемые на данные показателей.


## Описание


Метод LookupFactors осуществляет
 поиск показателей по условиям, заданным во входных параметрах.


## Комментарии


Метод возвращает массив, содержащий ключи найденных показателей.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR. В данной базе должен
 присутствовать атрибут показателя с идентификатором COUNTRIES.


			Sub UserProc;

Var

    MB: IMetabase;

    RubrInst: IRubricatorInstance;

    FactsLookup: IRubricatorFactsLookup;

    MetaDLookup: IMetaDictionaryLookup;

    Cond: IOrmCondition;

    ObservLookup: IRubricatorObservationsLookup;

    Key: Array Of Integer;

Begin

    MB := MetabaseClass.Active;

    RubrInst := MB.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    FactsLookup := RubrInst.CreateFactsLookup;

    MetaDLookup := FactsLookup.Lookup;

    Cond := MetaDLookup.Where.Add;

    Cond.AttributeName := "COUNTRIES";

    Cond.Value := 512;

    ObservLookup := RubrInst.CreateObservationsLookup(Null);

    ObservLookup.WhereCalendarLevel := DimCalendarLevel.Year;

    Key := RubrInst.LookupFactors(FactsLookup, ObservLookup);

End Sub UserProc;


После выполнения примера массив Key будет содержать ключи показателей
 соответствующих следующим условиям: в показателе присутствует годовая
 динамика и значение атрибута COUNTRIES равняется 512.


См. также:


[IRubricatorInstance](IRubricatorInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
