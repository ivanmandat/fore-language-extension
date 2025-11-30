# IMetabase.GetObjectKeyByIdNamespace

IMetabase.GetObjectKeyByIdNamespace
-


# IMetabase.GetObjectKeyByIdNamespace


## Синтаксис


GetObjectKeyByIdNamespace(Value: String; [Namespace_:
 Integer = 0]): Integer;


## Параметры


Value. Идентификатор объекта
 репозитория;


Namespace.
 Ключ объекта-контейнера, в котором будет производиться поиск объекта репозитория.


## Описание


Метод GetObjectKeyByIdNamespace
 возвращает ключ объекта, расположенного в указанном контейнере, по его
 идентификатору.


## Комментарии


Для параметра Namespace по
 умолчанию установлено значение 0, то есть поиск производится по объектам
 всего репозитория (объектам, содержащимся в корневой папке с ключом 0).


При использовании метода в коде на Fore, если объект с указанным идентификатором
 не существует, то метод возвращает значение «-1».


Если код пишется в сторонних средах разработки и объект с указанным
 идентификатором не существует, то метод возвращает значение UInteger.MaxValue.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта,
 с идентификатором «OBJ123» и контейнера с ключом 63.


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    ObjKey: Integer;

Begin

    MB := MetabaseClass.Active;

    ObjKey := MB.GetObjectKeyByIdNamespace("OBJ123", 63);

    Debug.WriteLine(ObjKey);

End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведен ключ
 объекта с идентификатором «OBJ123».


См. также:


[IMetabase](IMetabase.htm)
 | [IMetabase.GetObjectKeyById](IMetabase.GetObjectKeyById.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
