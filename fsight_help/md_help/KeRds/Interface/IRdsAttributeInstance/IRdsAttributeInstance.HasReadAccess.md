# IRdsAttributeInstance.HasReadAccess

IRdsAttributeInstance.HasReadAccess
-


# IRdsAttributeInstance.HasReadAccess


## Синтаксис


HasReadAccess: Boolean;


## Описание


Свойство HasReadAccess возвращает
 признак наличия прав у текущего пользователя на чтение значений элементов
 по данному атрибуту.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dict: IRdsDictionary;

	    DictInst: IRdsDictionaryInstance;

	    AttrsInst: IRdsAttributesInstance;

	    AttrInst: IRdsAttributeInstance;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Dict := MB.ItemByIdNamespace("DICT_1", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

	    DictInst := Dict.Open(Null) As IRdsDictionaryInstance;

	    AttrsInst := DictInst.Attributes;

	    For i := 0 To AttrsInst.Count - 1 Do

	        AttrInst := AttrsInst.Item(i);

	        Debug.Write("Атрибут: " + AttrInst.Name);

	        If AttrInst.HasReadAccess Then

	            Debug.Write("; Доступ на чтение присутствует");

	        Else

	            Debug.Write("; Доступ на чтение отсутствует");

	        End If;

	        If AttrInst.HasWriteAccess Then

	            Debug.Write("; Доступ на запись присутствует;");

	        Else

	            Debug.Write("; Доступ на запись отсутствует;");

	        End If;

	        Debug.WriteLine("");

	    End For;

	End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведен список
 всех атрибутов, имеющихся в справочнике НСИ. По каждому атрибуту будет
 указано наличие прав на чтение и запись.


См. также:


[IRdsAttributeInstance](IRdsAttributeInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
