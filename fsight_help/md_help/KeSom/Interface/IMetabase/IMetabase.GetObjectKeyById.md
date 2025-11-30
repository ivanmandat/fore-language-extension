# IMetabase.GetObjectKeyById

IMetabase.GetObjectKeyById
-


# IMetabase.GetObjectKeyById


## Синтаксис


GetObjectKeyById(Value: String): Integer;


## Параметры


Value.
 Идентификатор объекта.


## Описание


Метод GetObjectKeyById возвращает
 уникальный ключ объекта, идентификатор которого передается посредством
 входного параметра.


## Комментарии


При использовании метода в коде на Fore, если объект с указанным идентификатором
 не существует, то метод возвращает значение «-1».


Если код пишется в сторонних средах разработки и объект с указанным
 идентификатором не существует, то метод возвращает значение UInteger.MaxValue.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором TestObj.


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    ObjKey: Integer;

Begin

    MB := MetabaseClass.Active;

    ObjKey := MB.GetObjectKeyById("TestObj");

    If ObjKey <> -1 Then

        MB.DeleteObject(ObjKey);

    End If;

End Sub UserProc;


После выполнения примера, если в репозитории существует объект с идентификатором
 TestObj, то он будет удалён.


См. также:


[IMetabase](IMetabase.htm) | [IMetabase.GetObjectKeyByIdNamespace](IMetabase.GetObjectKeyByIdNamespace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
