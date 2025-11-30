# IDimInstance.DefaultElement

IDimInstance.DefaultElement
-


# IDimInstance.DefaultElement


## Синтаксис


DefaultElement: Integer;


## Описание


Свойство DefaultElement возвращает
 индекс элемента по умолчанию.


## Комментарии


Если в справочнике элемента по умолчанию нет, то возвращается значение
 -1.


## Пример


Для выполнения примера в репозитории предполагается наличие параметрического
 табличного справочника НСИ с идентификатором RDS_DICT_OBJ и установленным
 элементом по умолчанию. Элемент по умолчанию должен входить в выборку
 элементов, атрибут которых равен 2 и привязан к параметру.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Rds.


			Sub UserProc;

Var

    MB: IMetabase;

    Obj: IMetabaseObject;

    Dict: IRdsDictionary;

    ParamsVal: IRdsParamValues;

    DictInst: IRdsDictionaryInstance;

    DimInst: IDimInstance;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Получаем табличный справочник НСИ

    Obj := MB.ItemById("RDS_DICT_OBJ").Bind;

    Dict := Obj As IRdsDictionary;

    // Задаем значение параметра и открываем справочник НСИ с учетом значения

    If Dict.Params.Count > 0 Then

        ParamsVal := Dict.Params.CreateValues;

        ParamsVal.Item(0).Value := "2";

        DictInst := Dict.Open(ParamsVal);

    Else

        DictInst := Dict.Open(Null);

    End If;

    DimInst := DictInst As IDimInstance;

    // Выводим значения ключа элемента и элемента по умолчанию

    Debug.WriteLine("Ключ элемента по умолчанию:" + Dict.DefaultElementKey.ToString);

    Debug.WriteLine("Элемент по умолчанию : " + DimInst.DefaultElement.ToString);

End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены ключ элемента
 заданного по умолчанию и индекс элемента по умолчанию.


См. также:


[IDimInstance](IDimInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
