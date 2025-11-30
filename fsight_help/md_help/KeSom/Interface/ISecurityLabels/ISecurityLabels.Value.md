# ISecurityLabels.Value

ISecurityLabels.Value
-


# ISecurityLabels.Value


## Синтаксис


Value([Subject: [ISecuritySubject](../ISecuritySubject/ISecuritySubject.htm)
 = Null]): Integer;


## Параметры


Subject. Необязательный параметр,
 определяющий субъект безопасности: пользователь или группа. По умолчанию
 - текущий пользователь.


## Описание


Свойство Value возвращает значение
 маски для субъекта безопасности, передаваемого посредством входного параметра,
 в десятичном виде.


## Комментарии


Если субъекту безопасности не сопоставлен ни один бит маски, то свойство
 возвращает значение «0».


Для пользователя значение ValueStr
 возвращает значение маски, включающее в себе все группы, в которые входит
 пользователь, и для которых также сопоставлен бит маски.


Примеры по работе с правами доступа приведены в подразделах «[Управление правами доступа
 к элементам](KeRds.chm::/Samples/KeRds_Sample6.htm)» и «[Управление правами доступа
 к атрибутам](KeRds.chm::/Samples/KeRds_Sample7.htm)».


## Пример


Для выполнения примера предполагается наличие табличного справочника
 с идентификатором Dim_1.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MDesc: IMetabaseObjectDescriptor;

	    SecDesc: ISecurityDescriptor;

	    SecLab: ISecurityLabels;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    MDesc := MB.ItemById("Dim_1");

	    SecDesc := MDesc.SecurityDescriptor;

	    SecLab := SecDesc.LabelSecurity;

	    i := SecLab.Value(MB.Security.Users.Item(1));

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться значение
 маски для второго пользователя текущего репозитория.


См. также:


[ISecurityLabels](ISecurityLabels.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
