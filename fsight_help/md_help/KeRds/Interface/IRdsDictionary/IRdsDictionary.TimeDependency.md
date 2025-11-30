# IRdsDictionary.TimeDependency

IRdsDictionary.TimeDependency
-


# IRdsDictionary.TimeDependency


## Синтаксис


TimeDependency: [DictionaryTimeDependencyType](../../Enums/DictionaryTimeDependencyType.htm);


## Описание


Свойство TimeDependency определяет
 режим, в котором будет формироваться период действия элементов.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Dict: IRdsDictionary;

	    Attrs: IRdsAttributes;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Edit;

	    Dict := MObj As IRdsDictionary;

	    Dict.TimeDependent := True;

	    Dict.TimeDependency := DictionaryTimeDependencyType.TimeMutable;

	    Attrs := Dict.Attributes;

	    Attrs.FindById("INDATE").TimeDependent := True;

	    Attrs.FindById("OUTDATE").TimeDependent := True;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в справочнике "Dict_1" будет установлен
 признак изменения элементов во времени. Для управления историей изменения
 элементов будет доступно ручное формирование периода действия, а также
 в периодах будет учитываться время.


См. также:


[IRdsDictionary](IRdsDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
