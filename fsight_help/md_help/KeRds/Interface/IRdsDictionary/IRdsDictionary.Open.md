# IRdsDictionary.Open

IRdsDictionary.Open
-


# IRdsDictionary.Open


## Синтаксис


Open(Values: [IRdsParamValues](../IRdsParamValues/IRdsParamValues.htm)):
 [IRdsDictionaryInstance](../IRdsDictionaryInstance/IRdsDictionaryInstance.htm);


## Параметры


Values. Значения параметров
 справочника, в соответствии с которыми осуществляется открытие.


## Описание


Метод Open открывает справочник
 НСИ.


## Комментарии


Открытие выполняется с учетом значений параметров, передаваемых посредством
 параметра Values.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1". В справочнике
 имеется один параметр.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    ParamsVal: IRdsParamValues;

	    Dict: IRdsDictionary;

	    DictInst: IRdsDictionaryInstance;

	    Elements: IRdsDictionaryElements;

	    Element: IRdsDictionaryElement;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Dict := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

	    ParamsVal := Dict.Params.CreateValues;

	    ParamsVal.Item(0).Value := "1";

	    DictInst := Dict.Open(ParamsVal);

	    Elements := DictInst.Elements;

	    For i := 0 To Elements.Count - 1 Do

	    Element := Elements.Item(i);

	    Debug.WriteLine(Element.Name);

	    End For;

	End Sub UserProc;


После выполнения примера будет создан объект, управляющий значениями
 параметров. С установленным значением параметра справочник будет открыт
 и в консоль будут выведены значения атрибута Наименование для всех полученных
 элементов справочника.


См. также:


[IRdsDictionary](IRdsDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
