# IMetabaseUpdateProgress.OnAfterApplyCustomObject

IMetabaseUpdateProgress.OnAfterApplyCustomObject
-


# IMetabaseUpdateProgress.OnAfterApplyCustomObject


## Синтаксис


OnBeforeCustomObjectSaveToPef(Resolver: [ICustomObjectResolver](../ICustomObjectResolver/ICustomObjectResolver.htm));


## Параметры


Resolver. Объект, предназначенный
 для работы с пользовательским объектом.


## Описание


Метод OnAfterApplyCustomObject
 реализует событие, возникающее после применения обновления пользовательского
 объекта, но до его сохранения в репозиторий.


## Комментарии


Событие возникает для каждого пользовательского объекта, присутствующего
 в обновлении.


## Пример


Для выполнения примера в файловой системе предполагается наличие файла
 обновления «C:\CustomObjData.pefx». Данный файл должен содержать пользовательский
 объект, в котором записаны какие-либо данные. Также предполагается наличие
 текстового файла «C:\From.txt», содержащего данные, которые должны быть
 записаны в пользовательский объект.


Добавьте ссылки на системную сборку Metabase.


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

    Begin

        // Читаем данные из пользовательского объекта в текстовый файл

        Resolver.ReadToFile("C:\To.txt");

        // Записываем данные в пользовательский объект из текстового файла

        Resolver.WriteFromFile("C:\From.txt");

    End Sub OnAfterApplyCustomObject;


End Class MyUpdateProgress;


В результате выполнения примера будет применено обновление «C:\CustomObjData.pefx».
 Данные из пользовательского объекта в обновлении будут выгружены в файл
 «C:\To.txt», а в объект будут записаны данные из файла «C:\From.txt».


См. также:


[IMetabaseUpdateProgress](IMetabaseUpdateProgress.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
