# ISid.Valid

ISid.Valid
-


# ISid.Valid


## Синтаксис


Valid: Boolean;


## Описание


Свойство Valid возвращает признак
 корректности (валидности) идентификатора субъекта безопасности.


## Комментарии


Свойство доступно только для чтения.


Допустимые значения:


	- True. Идентификатор
	 валидный;


	- False. Идентификатор
	 не валидный.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором «SID».


Добавьте ссылку на системную сборку «Metabase».


			Sub UserProc;

Var

    MB: IMetabase;

    SDesc: ISecurityDescriptor;

    SID: ISid;

    sValid: Boolean;

Begin

    MB := MetabaseClass.Active;

    SDesc := MB.ItemById("SID").SecurityDescriptor;

    SID := SDesc.Acl.Item(0).Sid;

    sValid := SID.Valid;

    If sValid = True Then

        Debug.WriteLine("Valid");

        Else Debug.WriteLine("Not Valid");

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведен результат проверки
 на валидность идентификатора субъекта безопасности первого в списке пользователя,
 обладающего правами доступа к объекту «SID».


См. также:


[ISid](ISid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
