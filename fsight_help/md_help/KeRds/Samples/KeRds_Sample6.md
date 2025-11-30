# Управление правами доступа к элементам

Управление правами доступа к элементам
-


# Управление правами доступа к элементам


Для выполнения примера предполагается наличие справочника НСИ с идентификатором
 RDS_DICT. Для справочника включена опция наличия прав доступа у элементов.
 В список субъектов доступа, кроме базового пользователя Admin и группы
 Администраторы, также включены еще два пользователя. Им сопоставлены метки
 безопасности 2 и 3. Данные пользователи не входят в группу администраторов.


## Пример


Добавьте ссылки на системные сборки: Metabase, Rds.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Dict: IRdsDictionary;

	    Attrs: IRdsAttributes;

	    DictInst: IRdsDictionaryInstance;

	    Elements: IRdsDictionaryElements;

	    Element: IRdsDictionaryElement;

	    Data: IRdsDictionaryElementData;

	    SecLab: ISecurityLabels;

	    User, User1, User2: ISecuritySubject;

	Begin

	    MB := MetabaseClass.Active;

	    // Получаем справочник НСИ

	    MObj := MB.ItemById("RDS_DICT").Bind;

	    Dict := MObj As IRdsDictionary;

	    // Получаем список атрибутов

	    Attrs := Dict.Attributes;

	    // Открытие справочника

	    DictInst := Dict.Open(Null);

	    Elements := DictInst.Elements;

	    // Получение первого элемента, для которого будут розданы права

	    Element := Elements.Item(1);

	    Data := Element.Data;

	    // Субъекты безопасности

	    SecLab := MObj.SecurityDescriptor.LabelSecurity;

	    User := SecLab.Mapping(0); // Admin

	    User1 := SecLab.Mapping(2); // Первый дополнительный пользователь

	    User2 := SecLab.Mapping(3); // Второй дополнительный пользователь

	    // Раздаём права

	    Data.AccessAttribute(Attrs.AccessAccess.Key) := SecLab.ValueStr(User);

	    Data.AccessAttribute(Attrs.DeleteAccess.Key) := (SecLab.Value(User) + SecLab.Value(User1)).ToString;

	    Data.AccessAttribute(Attrs.ReadAccess.Key) := (SecLab.Value(User) + SecLab.Value(User1) + SecLab.Value(User2)).ToString;

	    Data.AccessAttribute(Attrs.WriteAccess.Key) := (SecLab.Value(User) + SecLab.Value(User2)).ToString;

	    // Обновляем информацию об элементе

	    Element.Update(Data);

	End Sub UserProc;


После выполнения примера будут изменены права доступа для первого элемента
 справочника НСИ. Право на просмотр элемента будет у всех пользователей.
 Право на удаление будет у первого дополнительного пользователя, право
 на редактирование - у второго дополнительного пользователя. У пользователя
 Admin будут полные права.


Для проверки имеющихся прав доступа необходимо привести маску к двоичному
 виду и проверить кому сопоставлены биты, имеющие значение «1». Биты, имеющие
 значение «0», соответствуют субъектам безопасности, для которых установлен
 запрет действия, либо биты не сопоставлены с какими-либо субъектами безопасности.
 Для преобразования маски к двоичному виду воспользуемся процедурой DecToBin, код которой представлен
 в примере «[Работа
 с маской доступа](KeSom.chm::/Examples/Example_2_AccessMask.htm)».


	Sub CheckMask;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    DictInst: IRdsDictionaryInstance;

	    Elements: IRdsDictionaryElements;

	    Element: IRdsDictionaryElement;

	    SecLab: ISecurityLabels;

	    AccessMask: Integer;

	    BinMask: String;

	    c: Char;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    // Получаем справочник НСИ

	    MObj := MB.ItemById("RDS_DICT").Bind;

	    // Открываем справочник

	    DictInst := MObj.Open(Null) As IRdsDictionaryInstance;

	    Elements := DictInst.Elements;

	    // Получаем первый элемент, для которого определены права доступа

	    Element := Elements.Item(1);

	    // Получаем параметры меток безопаности

	    SecLab := MObj.SecurityDescriptor.LabelSecurity;

	    // Права на изменение данных первого элемента

	    AccessMask := Element.Access(RdsAccessAttribute.WriteAccess);

	    BinMask := DecToBin(AccessMask);

	    For i := BinMask.Length To 1 Step - 1 Do

	        // Получаем бит из символьной строки и проверяем его значение

	        c := BinMask.Chars(i - 1);

	        // Если значение текущего бита - 1, то получаем пользователя сопоставленного с данным битом

	        If c = '1' Then

	            // Нумерация битов осуществляется справа налево. Для получения номера бита вычитаем

	            // текущую позицию из общей длины.

	            Debug.WriteLine(SecLab.Mapping(BinMask.Length - i).Name);

	        End If;

	    End For;

	End Sub CheckMask;


При выполнении примера в консоль среды разработки будут выведены наименования
 субъектов безопасности, которые имеют права на изменение данных первого
 элемента справочника НСИ.


См. также:


[Примеры](KeRds_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
