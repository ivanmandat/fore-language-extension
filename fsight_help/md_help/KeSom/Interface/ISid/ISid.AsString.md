# ISid.AsString

ISid.AsString
-


# ISid.AsString


## Синтаксис


AsString: String;


## Описание


Свойство AsString определяет идентификатор субъекта безопасности в строковом виде.


## Комментарии


При создании субъектов безопасности строковое представление идентификатора генерируется автоматически. В последствии его изменить нельзя.


Значение идентификатора в строковом виде можно изменить, если был создан новый экземпляр класса . В дальнейшем данный экземпляр может использоваться, например, для поиска субъектов безопасности.


## Пример


			Function FindSubjectToSid(MB: IMetabase; sSid: String): ISecuritySubject;

Var

    MBSec: IMetabaseSecurity;

    NewSid: ISid;

    Subject: ISecuritySubject;

Begin

    NewSid := New MetabaseSid.Create;

    NewSid.AsString := sSid;

    MBSec := MB.Security;

    Subject := MBSec.ResolveSid(NewSid);

    If IsNull(Subject) Then

        Return Null;

    Else

        Return Subject;

    End If;

End Function FindSubjectToSid;


Указанная функция может использоваться для поиска субъектов безопасности, если известно строковое представление их идентификатора безопасности. Идентификатор передается в качестве входного параметра sSid. В случае удачного поиска функция вернет параметры найденного субъекта, иначе - значение Null.


См. также:


[ISid](ISid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
