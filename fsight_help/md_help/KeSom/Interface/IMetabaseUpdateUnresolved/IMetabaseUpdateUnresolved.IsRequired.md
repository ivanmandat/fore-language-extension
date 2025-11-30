# IMetabaseUpdateUnresolved.IsRequired

IMetabaseUpdateUnresolved.IsRequired
-


# IMetabaseUpdateUnresolved.IsRequired


## Синтаксис


IsRequired: Boolean;


## Описание


Свойство IsRequired определяет,
 будет ли обработана ошибка (неразрешенная ссылка) при обновлении.


## Комментарии


По умолчанию свойство имеет значение False
 и ошибка будет пропущена. При установке значения True
 в событии [OnResolve](../IMetabaseUpdateProgress/IMetabaseUpdateProgress.OnResolve.htm) будет осуществлен переход
 к обработке неразрешенных ссылок (событие [OnError](../IMetabaseUpdateProgress/IMetabaseUpdateProgress.OnError.htm)).


## Пример


Для выполнения примера предполагается наличие файла обновления с наименованием
 "Update.pef" по указанному пути.


			Sub main;

Var

    mb: IMetabase;

    u: IMetabaseUpdate;

    progress: MyUpdateProgress;

Begin

    mb := MetabaseClass.Active;

    u := mb.CreateUpdate;

    u.LoadFromFile("c:\Temp\pef\Update.pef");

    progress := New MyUpdateProgress.Create;

    u.ApplyOptions := u.ApplyOptions Or MetabaseUpdateApplyOptions.EnableIgnoreErrors;

    u.Apply(progress);

End Sub main;


Class MyUpdateProgress: UpdateProgress


    Public Sub OnResolve(Node: IMetabaseUpdateNode; Resolver: IMetabaseUpdateResolver);

    Var i: integer;

    Begin

        Debug.WriteLine("Сработал OnResolve для ноды '" + Node.Label + "' !");

        For i := 0 To Resolver.Count - 1 Do

            Debug.WriteLine(i.ToString + " Resolver.Item(" + i.ToString + ").Name " + Resolver.Item(i).Name + "' !");

            Resolver.Item(i).IsRequired := True; //ошибка синхронизации
 будет обработана в OnError

        End For;

    End Sub OnResolve;


    Sub OnError(Data: IMetabaseUpdateProgressData; Var Ignore: Boolean);

    Begin

        Debug.WriteLine("Сработал OnError для ноды '" + Data.Node.Label + "' !");

        Debug.WriteLine("Текст ошибки: " + Data.Error.Message);

        Debug.WriteLine("MessageID: " + Data.Error.MessageID.ToString);

        If Data.Object <> Null Then

            Debug.WriteLine("Источник ошибки: " + Data.Object.Id);

            Debug.WriteLine("Ключ объекта: " + Data.Object.Key.ToString);

        End If;

        //пропускаем объект

        Ignore := True;

    End Sub OnError;

End Class MyUpdateProgress;


Для обработки событий, возникающих во время обновления, используется
 пользовательский класс «MyUpdateProgress». Если в процессе обновления
 будет обнаружен объект, для которого имеются неразрешенные ссылки (зависимость
 объекта обновления от объектов репозитория-источника, которые отсутствуют
 в репозитории назначения), то будет создана ошибка синхронизации объекта
 репозитория с объектом в обновлении (OnError) и в окно консоли среды разработки
 будет выведена информация о неразрешенной ссылке. Объекты с ошибками
 будут пропущены.


См. также:


[IMetabaseUpdateUnresolved](IMetabaseUpdateUnresolved.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
