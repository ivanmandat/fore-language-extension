# IMetabaseUpdateAccessSubject.RemappingSid

IMetabaseUpdateAccessSubject.RemappingSid
-


# IMetabaseUpdateAccessSubject.RemappingSid


## Синтаксис


RemappingSid: [ISid](../ISid/ISid.htm);


## Описание


Свойство RemappingSid возвращает соответствующий идентификатор субъекта безопасности при применении обновления.


## Пример


Для выполнения примера добавьте ссылки на системные сборки «Metabase»,, «Collections» и «Stat». Предполагается наличие файла обновления «D:\Update.pefx».


Sub main;

Var

    Mb: IMetabase;

    Upd: IMetabaseUpdate;

Begin

    MB := MetabaseClass.Active;

    Upd := Mb.CreateUpdate;

    Upd.LoadFromFileNF("D:\Update.pefx");

    Upd.Prepare;

    updateprepare(Upd);

    Upd.SaveAvailable("D:\Update.pefx");

End Sub main;


Sub updateprepare (update: IMetabaseUpdate);

    Var

    mbuss: IMetabaseUpdateAccessSubjects;

    mbus: IMetabaseUpdateAccessSubject;

    Upd: IMetabaseUpdate;

    i: Integer;

    Begin

    Upd := update;

    mbuss := Upd.Subjects;

    For i:=0 To mbuss.Count - 1 Do

        mbus := mbuss.Item(i);

        debug.WriteLine("Соответствующий сид пользователя:  "+mbus.RemappingSid.AsString);

        debug.WriteLine("Альтернативный сид пользователя (поиск по имени, если субъект не найден по сиду):  "+mbus.AlternativeSid.AsString);

        If mbus.AlternativeSid.AsString = "" Then

            If mbus.RemappingSid.AsString <> "" Then

                debug.WriteLine(mbuss.FindBySidString(mbus.RemappingSid.AsString).Name);

            Else debug.WriteLine("Новый пользователь: "+mbus.Name +" Sid: "+mbus.Sid.AsString);

            End If;

        End If;

    End For;


    debug.WriteLine("Необходимо обновление пользователей:  "+Upd.RequireUserUpdateMessage.ToString);

End Sub updateprepare;


После выполнения примера в окне консоли будет выдано сообщение, содержащее информацию о субъектах безопасности, для которых будут обновлены права доступа.


См. также:


[IMetabaseUpdateAccessSubject](IMetabaseUpdateAccessSubject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
