# IRubricatorInstance.GetObservationValues

IRubricatorInstance.GetObservationValues
-


# IRubricatorInstance.GetObservationValues


## Синтаксис


GetObservationValues(FactData: [IRubricatorFactData](../IRubricatorFactData/IRubricatorFactData.htm);
 CalendarDate: DateTime; [Options: [DictionaryGetDataOptions](KeRds.chm::/Enums/DictionaryGetDataOptions.htm)
 = 0]): [IFactorObservationValues](../IFactorObservationValues/IFactorObservationValues.htm);


## Параметры


FactData. Данные справочника
 показателей.


CalendarDate. Дата, данные
 для которой необходимо получить.


Options. Параметр получения
 данных. Необязательный параметр.


## Описание


Метод GetObservationValues возвращает
 значения показателя для определенной даты.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR. В базе показателей должен
 существовать показатель с ключом 1.


			Sub UserProc;

Var

    MB: IMetabase;

    RubrInst: IRubricatorInstance;

    FactD: IRubricatorFactData;

    FactorObVal: IFactorObservationValues;

Begin

    MB := MetabaseClass.Active;

    RubrInst := MB.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    FactD := RubrInst.GetFactData(1);

    FactorObVal := RubrInst.GetObservationValues(FactD, DateTime.Parse("01.01.2020 00:00:00"));

End Sub UserProc;


После выполнения примера в переменной FactorObVal будет храниться объект,
 содержащий данные показателя с указанным ключом на первое января 2020
 года.


См. также:


[IRubricatorInstance](IRubricatorInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
