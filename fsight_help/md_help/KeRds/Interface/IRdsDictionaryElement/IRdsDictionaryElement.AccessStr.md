# IRdsDictionaryElement.AccessStr

IRdsDictionaryElement.AccessStr
-


# IRdsDictionaryElement.AccessStr


## Синтаксис


AccessStr(Attribute: [RdsAccessAttribute](../../Enums/RdsAccessAttribute.htm)):
 String;


## Параметры


Attribute.
 Вид атрибута доступа, по которому необходимо узнать метку безопасности.


## Описание


Свойство AccessStr возвращает
 метку безопасности, установленную по указанному атрибуту доступа для текущего
 элемента.


## Комментарии


Метка безопасности возвращается в строковом виде. Данное свойство используется,
 если доступ распределен для более 32 субъектов безопасности.


Пример работы с меткой безопасности приведен в подразделе «[Управление
 правами доступа к элементам](../../Samples/KeRds_Sample6.htm)».


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

	    Element: IRdsDictionaryElement;

	    List: IRdsDictionaryElementList;

	Begin

	    MB := MetabaseClass.Active;

	    Dict := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

	    DictInst := Dict.Open(Null);

	    Elements := DictInst.Elements;

	    List := Elements.RootItem.Children;

	    For Each Element In List Do

	        Debug.WriteLine(Element.AccessStr(RdsAccessAttribute.DeleteAccess));

	    End For;

	End Sub UserProc;


После выполнения примера в консоль будут выведены значения метки безопасности,
 установленной для корневых элементов справочника по атрибуту "Право
 на удаление".


См. также:


[IRdsDictionaryElement](IRdsDictionaryElement.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
