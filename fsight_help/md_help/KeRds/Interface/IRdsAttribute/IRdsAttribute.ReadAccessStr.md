# IRdsAttribute.ReadAccessStr

IRdsAttribute.ReadAccessStr
-


# IRdsAttribute.ReadAccessStr


## Синтаксис


ReadAccessStr: String;


## Описание


Свойство ReadAccessStr определяет
 значение метки безопасности, определяющей пользователей, которые будут
 иметь право на чтение значений элементов справочника по данному атрибуту.
 Метка безопасности задается десятичным числом, записанным в строковом
 виде. Данное свойство используется, если необходимо распределить доступ
 для более 32 субъектов безопасности.


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

	        Debug.WriteLine(Attr.ReadAccessStr);

	    End For;

	End Sub UserProc;


После выполнения примера для каждого атрибута справочника будет выведено
 значение метки безопасности в строковом виде, определяющей наличие прав
 на чтение значений элементов по данному атрибуту.


См. также:


[IRdsAttribute](IRdsAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
