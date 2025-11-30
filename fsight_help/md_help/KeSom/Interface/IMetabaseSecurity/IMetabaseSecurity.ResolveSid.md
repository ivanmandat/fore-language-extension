# IMetabaseSecurity.ResolveSid

IMetabaseSecurity.ResolveSid
-


# IMetabaseSecurity.ResolveSid


## Синтаксис


		ResolveSid(Sid:
		 [ISid](../ISid/ISid.htm)): [ISecuritySubject](../ISecuritySubject/ISecuritySubject.htm);


## Параметры


Sid. Идентификатор субъекта
 безопасности.


## Описание


Метод ResolveSid возвращает
 параметры субъекта безопасности, идентификатор которого передается в качестве
 параметра Sid.


## Комментарии


Если субъект безопасности не существует, то метод возвращает значение
 Null.


## Пример


Для выполнения примера убедитесь, что в репозитории содержится объект
 с идентификатором «Obj_1».


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Sec: IMetabaseSecurity;

		    SecDesc: ISecurityDescriptor;

		    Acl: IAccessControlList;

		    Ace: IAccessControlEntry;

		    Subject: ISecuritySubject;

		Begin

		    MB := MetabaseClass.Active;

		    Sec := MB.Security;

		    SecDesc := MB.ItemById("Obj_1").SecurityDescriptor;

		    Acl := SecDesc.Acl;

		    For Each Ace In Acl Do

		        Subject := Sec.ResolveSid(Ace.Sid);

		        If Ace.Type = AceType.AccessAllowed Then

		            Debug.Write("Разрешающий параметр. Маска доступа: " + Ace.AccessMask.ToString);

		            Debug.WriteLine("; Субъект безопасности:" + Subject.Name);

		        Else

		            Debug.Write("Запрещающий параметр. Маска доступа: " + Ace.AccessMask.ToString);

		            Debug.WriteLine("; Субъект безопасности: " + Subject.Name);

		        End If;

		    End For;

		End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведена информация
 о дополнительных параметрах безопасности объекта «Obj_1». Информация о
 субъекте безопасности, для которого добавлен конкретный параметр, будет
 получена по идентификатору субъекта безопасности.


См. также:


[IMetabaseSecurity](IMetabaseSecurity.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
