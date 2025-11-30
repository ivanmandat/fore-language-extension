# ISecurityLabels.ValueStr

ISecurityLabels.ValueStr
-


# ISecurityLabels.ValueStr


## Синтаксис


ValueStr([Subject: [ISecuritySubject](../ISecuritySubject/ISecuritySubject.htm)
 = Null]): String;


## Параметры


Subject. Необязательный
 параметр, определяющий субъект безопасности (пользователь, группа). По
 умолчанию - текущий пользователь.


## Описание


Свойство ValueStr возвращает
 значение маски для субъекта безопасности, передаваемого посредством входного
 параметра, в строковом виде.


## Комментарии


Вся маска разбивается на группы по 32 бита. Данная символьная строка
 представляет собой последовательность десятичных чисел, каждое из которых
 представляет собой маску в десятичном виде, биты которой сопоставлены
 субъектам безопасности.


Для пользователя значение ValueStr
 возвращает значение маски, включающее в себе все группы, в которые входит
 пользователь, и для которых также сопоставлен бит маски.


Свойство актуально, если метки безопасности сопоставлены для более 32
 субъектов безопасности. Если субъекту безопасности не сопоставлен ни один
 бит маски - возвращает 0.


## Пример


Для выполнения примера предполагается наличие табличного справочника
 с идентификатором "Tab_Dict".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MDesc: IMetabaseObjectDescriptor;

	    Group1, User1, User2: ISecuritySubject;

	    SecDesc: ISecurityDescriptor;

	    SecLab: ISecurityLabels;

	    AttributeValue: IAccessAttributeValue;

	Begin

	    MB := MetabaseClass.Active;

	    MDesc := MB.ItemById("Tab_Dict");

	    //Субъекты безопасности, которые будут добавлены в справочник

	    Group1 := MB.Security.ResolveName("Users");

	    User1 := MB.Security.ResolveName("Name1");

	    User2 := MB.Security.ResolveName("Name2");

	    SecDesc := MDesc.SecurityDescriptor;

	    SecDesc.Edit;

	    SecLab := SecDesc.LabelSecurity;

	    //Установка новых соответствий

	    SecLab.BitCount := 35;

	    SecLab.Mapping(32) := Group1;

	    SecLab.Mapping(33) := User1;

	    SecLab.Mapping(34) := User2;

	    SecDesc.Apply(False);

	    Debug.WriteLine("Значение маски для субъектов, включая группу в которую они входят");

	    Debug.WriteLine("Group1 :" + SecLab.ValueStr(Group1));

	    Debug.WriteLine("User1 :" + SecLab.ValueStr(User1));

	    Debug.WriteLine("User2 :" + SecLab.ValueStr(User2));

	    Debug.WriteLine("Значение маски для субъектов без групп, в которые они входят");

	    AttributeValue := New AccessAttributeValue.Create(SecLab.BitCount, 0);

	    AttributeValue.Value(32) := True;

	    Debug.WriteLine("Group1 :" + AttributeValue.ToString);

	    AttributeValue := New AccessAttributeValue.Create(SecLab.BitCount, 0);

	    AttributeValue.Value(33) := True;

	    Debug.WriteLine("User1 :" + AttributeValue.ToString);

	    AttributeValue := New AccessAttributeValue.Create(SecLab.BitCount, 0);

	    AttributeValue.Value(34) := True;

	    Debug.WriteLine("User2 :" + AttributeValue.ToString);

	End Sub UserProc;


После выполнения примера для табличного справочника будут изменены метки
 безопасности. Для указанных битов маски будут сопоставлены указанные субъекты
 безопасности, созданные для текущего репозитория. После этого сформированные
 значения маски будут выведены в консоль среды разработки.


См. также:


[ISecurityLabels](ISecurityLabels.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
