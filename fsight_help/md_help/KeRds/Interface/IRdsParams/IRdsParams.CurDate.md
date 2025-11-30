# IRdsParams.CurDate

IRdsParams.CurDate
-


# IRdsParams.CurDate


## Синтаксис


CurDate: [IRdsParam](../IRdsParam/IRdsParam.htm);


## Описание


Свойство CurDate возвращает
 системный параметр справочника, назначение которого - Дата актуальности.


## Комментарии


Данный параметр доступен, если свойству [TimeDependent](../IRdsDictionary/IRdsDictionary.TimeDependent.htm)
 установлено значение True и используется
 для фильтрации элементов, в период действия которых попадает значение
 данного параметра.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1". Для справочника
 установлено изменение элементов во времени.


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

	    ParamsVal.CurDate := DateTime.ComposeDay(2008, 1, 1);

	    DictInst := Dict.Open(ParamsVal);

	    Elements := DictInst.Elements;

	    For i := 1 To Elements.Count - 1 Do

	        Element := Elements.Item(i);

	        Debug.WriteLine(Element.Name);

	    End For;

	    Debug.WriteLine("Next date");

	    ParamsVal.CurDate := DateTime.ComposeDay(2008, 5, 1);

	    DictInst := Dict.Open(ParamsVal);

	    Elements := DictInst.Elements;

	    For i := 1 To Elements.Count - 1 Do

	        Element := Elements.Item(i);

	        Debug.WriteLine(Element.Name);

	    End For;

	End Sub UserProc;


После выполнения примера в консоль будут выведены наименования элементов
 актуальных в различные периоды времени.


См. также:


[IRdsParams](IRdsParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
