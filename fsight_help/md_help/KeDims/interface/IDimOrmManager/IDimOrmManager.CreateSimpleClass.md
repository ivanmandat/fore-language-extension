# IDimOrmManager.CreateSimpleClass

IDimOrmManager.CreateSimpleClass
-


# IDimOrmManager.CreateSimpleClass


## Синтаксис


CreateSimpleClass(Dimension: [IOrmSimpleClass](KeOrm.chm::/Interface/IOrmSimpleClass/IOrmSimpleClass.htm)):
 [IDimOrmClass](../IDimOrmClass/IDimOrmClass.htm);


## Параметры


Dimension. Справочник, реализуемый
 интерфейсом [IOrmSimpleClass](KeOrm.chm::/Interface/IOrmSimpleClass/IOrmSimpleClass.htm).
 В качестве значения параметра можно передавать структуру справочника,
 либо справочника НСИ репозитория.


## Описание


Метод CreateSimpleClass создает
 объект, используемый для работы с условиями для поиска элементов в справочниках
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

    OrmClass: IDimOrmClass;

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

    OrmClass := OrmMan.CreateSimpleClass(RdsDict As IOrmSimpleClass);

    Condition := OrmClass.CreateCondition;

    Crit := New DimTextCriteria.Create;

    Crit.CriteriaOptions := TextCriteriaOptions.SearchStringAttributes Or TextCriteriaOptions.FreeText;

    Crit.Text := "Данные";

    Condition.SetTextCriteria(Crit);

    Elems := RdsDictInst.Elements;

    For i := 0 To Elems.Count - 1 Do

        Elem := Elems.Item(i);

        Debug.WriteLine(Elem.Name + ": Условиям поиска удовлетворяет - " +

            Condition.EvaluateRec(Elem.Record).ToString);

    End For;

End Sub UserProc;


При выполнения примера будет создан объект для работы с условиями поиска
 по указанному справочнику. Будет задан критерий поиска элементов. После
 этого будет осуществлена проверка всех элементов на соответствии условиям
 поиска. Наименования элементов и результат проверки будут выведены в консоль
 среды разработки.


См. также:


[IDimOrmManager](IDimOrmManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
