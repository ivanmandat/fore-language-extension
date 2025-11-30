# IValidationUserComponents.FindByKey

IValidationUserComponents.FindByKey
-


# IValidationUserComponents.FindByKey


## Синтаксис


FindByKey(UserComponentKey: Integer): [IValidationUserComponent](../IValidationUserComponent/IValidationUserComponent.htm);


## Параметры


UserComponentKey. Ключ искомого пользовательского компонента.


## Описание


Метод FindByKey находит пользовательский компонент в коллекции по ключу.


## Комментарии


Если пользовательский компонент с указанным ключом не найден, то FindByKey возвращает значение Null.


## Пример


Для выполнения примера предполагается наличие объекта «UserComponents» типа [IValidationUserComponents](IValidationUserComponents.htm).


			Sub UserProc;

Var

    UserComponents: IValidationUserComponents;

    Del: Boolean;

    Component: IValidationUserComponent;

Begin

    Del := UserComponents.Remove(0);

    If Del Then

        Debug.WriteLine("Первый пользовательский компонент успешно удален");

    Else

        Debug.WriteLine("Не удается удалить первый пользовательский компонент");

    End If;

    Component := UserComponents.FindByKey(1);

    If Component = Null Then

        Debug.WriteLine("Не найден пользовательский компонент с ключом «1»");

    Else

        Del := UserComponents.RemoveByKey(1);

        If Del Then

            Debug.WriteLine("Пользовательский компонент с ключом «1» успешно удален");

        Else

            Debug.WriteLine("Не удается удалить пользовательский компонент с ключом «1»");

        End If;

    End If;

End Sub UserProc;


После выполнения примера из коллекции будет удален первый пользовательский компонент и компонент с ключом «1». Результат удаления будет выведен в окно консоли.


См. также:


[IValidationUserComponents](IValidationUserComponents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
