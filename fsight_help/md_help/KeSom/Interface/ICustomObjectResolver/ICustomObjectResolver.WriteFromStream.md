# ICustomObjectResolver.WriteFromStream

ICustomObjectResolver.WriteFromStream
-


# ICustomObjectResolver.WriteFromStream


## Синтаксис


WriteFromStream(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm));


## Параметры


Stream. Поток, из которого
 будут получены данные для записи.


## Описание


Метод WriteFromStream записывает
 данные в пользовательский объект из потока.


## Комментарии


Для чтения данных из пользовательского объекта в поток используйте метод
 [ICustomObjectResolver.ReadToStream](ICustomObjectResolver.ReadToStream.htm).


## Пример


Для выполнения примера в файловой системе предполагается наличие файла
 обновления «C:\CustomObjData.pefx». Данный файл должен содержать пользовательский
 объект, в котором записаны какие-либо данные. Также предполагается наличие
 текстового файла «C:\From.txt», содержащего данные, которые должны быть
 записаны в пользовательский объект.


Добавьте ссылки на системные сборки: IO, Metabase.


			Sub UserProc;

Var

    Mb: IMetabase;

    Update: IMetabaseUpdate;

    Progress: MyUpdateProgress;

Begin

    // Получаем текущий репозиторий

    Mb := MetabaseClass.Active;

    // Создаем обновление

    Update := Mb.CreateUpdate;

    // Загружаем параметры обновления из файла

    Update.LoadFromFileNF("C:\CustomObjData.pefx");

    // Создаем объект, реализующий события, которые происходят во время обновления

    Progress := New MyUpdateProgress.Create;

    // Выполняем обновление

    Update.ApplyEx(Progress, Null);

End Sub UserProc;


// Класс, реализующий события, которые происходят во время обновления

Class MyUpdateProgress: UpdateProgress

    // Событие, возникающее после применения обновления пользовательского объекта,

    // но до момента сохранения его в репозиторий

    Sub OnAfterApplyCustomObject(Resolver: ICustomObjectResolver);

    Var

        StreamR, StreamW: IFileStream;

    Begin

        // Создаем поток, связанный с текстовым файлом «C:\To.txt»

        StreamR := New FileStream.Create("C:\To.txt", FileOpenMode.Create, FileShare.DenyNone);

        // Читаем данные из пользовательского объекта в поток, связанный с файлом

        Resolver.ReadToStream(StreamR);

        // Создаем поток, связанный с текстовым файлом «C:\From.txt»

        StreamW := New FileStream.Create("C:\From.txt", FileOpenMode.Read, FileShare.DenyNone);

        // Записываем данные в пользовательский объект из потока, связанного с файлом

        Resolver.WriteFromStream(StreamW);

    End Sub OnAfterApplyCustomObject;


End Class MyUpdateProgress;


В результате выполнения примера будет применено обновление «C:\CustomObjData.pefx».
 С помощью потока данные из пользовательского объекта в обновлении будут
 выгружены в файл «C:\To.txt», а в объект будут записаны данные из файла
 «C:\From.txt».


См. также:


[ICustomObjectResolver](ICustomObjectResolver.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
