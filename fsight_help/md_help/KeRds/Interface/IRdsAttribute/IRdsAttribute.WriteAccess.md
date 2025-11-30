# IRdsAttribute.WriteAccess

IRdsAttribute.WriteAccess
-


# IRdsAttribute.WriteAccess


## Синтаксис


WriteAccess: Integer;


## Описание


Свойство WriteAccess определяет
 значение метки безопасности, определяющей пользователей, которые будут
 иметь право на изменение значений элементов справочника по данному атрибуту.
 Метка безопасности задается в десятичном виде. Данное свойство используется,
 если необходимо распределить доступ для 32 или менее субъектов безопасности.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - «NSI_1»,
 содержащего справочник НСИ с идентификатором «Dict_1».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dict: IRdsDictionary;

	    Attrs: IRdsAttributes;

	    Attr: IRdsAttribute;

	Begin

	    MB := MetabaseClass.Active;

	    Dict := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

	    Attrs := Dict.Attributes;

	    For Each Attr In Attrs Do

	        Debug.WriteLine(Attr.WriteAccess);

	    End For;

	End Sub UserProc;


После выполнения примера для каждого атрибута справочника будет выведено
 значение метки безопасности в десятичном виде, определяющей наличие прав
 на изменение значений элементов по данному атрибуту.


См. также:


[IRdsAttribute](IRdsAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
