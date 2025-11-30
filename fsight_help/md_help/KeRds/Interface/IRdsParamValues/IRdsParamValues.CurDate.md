# IRdsParamValues.CurDate

IRdsParamValues.CurDate
-


# IRdsParamValues.CurDate


## Синтаксис


CurDate: DateTime;


## Описание


Свойство CurDate определяет
 значение системного параметра - Дата актуальности.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1". В справочнике
 включена возможность изменения элементов во времени.


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
 параметров. С установленным значением даты актуальности справочник будет
 открыт и в консоль будут выведены значения атрибута Наименование для всех
 полученных элементов справочника.


См. также:


[IRdsParamValues](IRdsParamValues.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
