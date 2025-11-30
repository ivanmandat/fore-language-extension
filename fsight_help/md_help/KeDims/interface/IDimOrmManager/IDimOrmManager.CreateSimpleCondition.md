# IDimOrmManager.CreateSimpleCondition

IDimOrmManager.CreateSimpleCondition
-


# IDimOrmManager.CreateSimpleCondition


## Синтаксис


CreateSimpleCondition(


Dimension: [IOrmSimpleClass](KeOrm.chm::/Interface/IOrmSimpleClass/IOrmSimpleClass.htm);


Criteria: [IDimTextCriteria](../IDimTextCriteria/IDimTextCriteria.htm)):
 [IDimOrmCondition](../IDimOrmCondition/IDimOrmCondition.htm);


## Параметры


Dimension. Справочник, реализуемый
 интерфейсом [IOrmSimpleClass](KeOrm.chm::/Interface/IOrmSimpleClass/IOrmSimpleClass.htm).
 В качестве значения параметра можно передавать структуру справочника,
 либо справочника НСИ репозитория.


Criteria. Критерий поиска элементов.


## Описание


Метод CreateSimpleCondition
 создает объект для работы с условиями поиска элементов в справочниках
 и справочниках НСИ.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 «RDS». В данном репозитории создан справочник НСИ с идентификатором «Dict_1».


			Sub UserProc;

Var

    MB: IMetabase;

    RdsDict: IRdsDictionary;

    RdsDictInst: IRdsDictionaryInstance;

    OrmMan: IDimOrmManager;

    Condition: IDimOrmCondition;

    Crit: IDimTextCriteria;

    Elems: IRdsDictionaryElements;

    Elem: IRdsDictionaryElement;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    RdsDict := MB.ItemByIdNamespace("Dict_1", MB.ItemById("RDS").Key).Bind As IRdsDictionary;

    RdsDictInst := RdsDict.Open(Null);

    OrmMan := New DimOrmManager.Create;

    Crit := New DimTextCriteria.Create;

    Crit.CriteriaOptions := TextCriteriaOptions.SearchStringAttributes Or TextCriteriaOptions.FreeText;

    Crit.Text := "Данные";

    Condition := OrmMan.CreateSimpleCondition(RdsDict As IOrmSimpleClass, Crit);

    Elems := RdsDictInst.Elements;

    For i := 0 To Elems.Count - 1 Do

        Elem := Elems.Item(i);

        Debug.WriteLine(Elem.Name + ": Условиям поиска удовлетворяет - " +

            Condition.EvaluateRec(Elem.Record).ToString);

    End For;

End Sub UserProc;


При выполнения примера будет создан объект для работы с условиями поиска
 на основе указанного справочника НСИ и критерия поиска. После этого будет
 осуществлена проверка всех элементов на соответствии условиям поиска.
 Наименования элементов и результат проверки будут выведены в консоль среды
 разработки.


См. также:


[IDimOrmManager](IDimOrmManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
