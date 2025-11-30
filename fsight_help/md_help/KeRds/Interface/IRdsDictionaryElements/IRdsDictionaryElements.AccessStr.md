# IRdsDictionaryElements.AccessStr

IRdsDictionaryElements.AccessStr
-


# IRdsDictionaryElements.AccessStr


## Синтаксис


AccessStr(Element: Integer; Attribute: [RdsAccessAttribute](../../Enums/RdsAccessAttribute.htm)):
 String;


## Параметры


Element. Ключ элемента, для
 которого необходимо получить значение метки безопасности по указанному
 атрибуту доступа.


Attribute. Вид атрибута доступа,
 по которому необходимо узнать метку безопасности для элемента Element.


## Описание


Свойство AccessStr возвращает
 метку безопасности, установленную для элемента Element
 по атрибуту доступа Attribute.
 Метка безопасности возвращается в строковом виде. Данное свойство используется,
 если доступ распределен для более 32-х субъектов безопасности.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1". Для справочника
 включено управление правами доступа к элементам.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dict: IRdsDictionary;

	    DictInst: IRdsDictionaryInstance;

	    Elements: IRdsDictionaryElements;

	    Arr: IRdsDictionaryElementArray;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Dict := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

	    DictInst := Dict.Open(Null);

	    Elements := DictInst.Elements;

	    Arr := Elements.Children(-2);

	    For Each i In Arr Do

	        Debug.WriteLine(Elements.AccessStr(i, RdsAccessAttribute.DeleteAccess));

	    End For;

	End Sub UserProc;


После выполнения примера в консоль будут выведены значения метки безопасности,
 установленной для корневых элементов справочника по атрибуту "Право
 на удаление".


См. также:


[IRdsDictionaryElements](IRdsDictionaryElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
