# IRdsDictionary.TimeDependent

IRdsDictionary.TimeDependent
-


# IRdsDictionary.TimeDependent


## Синтаксис


TimeDependent: Boolean;


## Описание


Свойство TimeDependent определяет
 признак изменения элементов справочника во времени.


## Комментарии


По умолчанию свойству установлено значение False,
 если свойству установить значение True
 - в справочнике будет вестись история изменений значений элементов. Для
 отслеживания и управления историей в справочнике будут присутствовать
 три базовых атрибута "VERSION", "INDATE" и "OUTDATE".
 Также в справочнике будет присутствовать системный параметр [CurDate](../IRdsParams/IRdsParams.CurDate.htm)
 используемый для отбора элементов по дате актуальности.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Dict: IRdsDictionary;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemByIdNamespace("Dict_1",MB.ItemById("NSI_1").Key).Edit;

	    Dict := MObj As IRdsDictionary;

	    Dict.TimeDependent := True;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в справочнике "Dict_1" будет установлен
 признак изменения элементов во времени.


См. также:


[IRdsDictionary](IRdsDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
