# IMetabaseUpdateProgress.OnBeforeCustomObjectSaveToPef

IMetabaseUpdateProgress.OnBeforeCustomObjectSaveToPef
-


# IMetabaseUpdateProgress.OnBeforeCustomObjectSaveToPef


## Синтаксис


OnBeforeCustomObjectSaveToPef(Resolver: [ICustomObjectResolver](../ICustomObjectResolver/ICustomObjectResolver.htm));


## Параметры


Resolver. Объект, предназначенный
 для работы с пользовательским объектом.


## Описание


Метод OnBeforeCustomObjectSaveToPef
 реализует событие, возникающее перед сохранением пользовательского объекта
 в pef-файл.


## Комментарии


Событие возникает для каждого пользовательского объекта, присутствующего
 в обновлении.


Также событие возникает при репликации базы данных временных рядов,
 содержащих пользовательские объекты, в zip-файл.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором «TSDB_PEF». Данная база данных должна
 содержать дочерний пользовательский объект, в котором записаны какие-либо
 данные в формате XML.


Добавьте ссылки на системные сборки: Cubes, Metabase, Xml.


			Sub UserProc;

Var

    Mb: IMetabase;

    metaUpdate: ICubeMetaUpdateEx;

    Rub: IRubricator;

    Progress: MyUpdateProgress;

    objects: ICubeMetaUpdateAdditionalObjects;

    object: ICubeMetaUpdateAdditionalObject;

Begin

    // Получаем текущий репозиторий

    Mb := MetabaseClass.Active;

    // Создаем объект для репликации

    metaUpdate := New CubeMetaUpdateClass.Create As ICubeMetaUpdateEx;

    // Указываем репозиторий в который будет выполняться репликация

    metaUpdate.Metabase := Mb;

    // Получаем базу данных временных рядов

    rub := mb.ItemById("TSDB_PEF").Bind As IRubricator;

    // Указываем, что полученная база данных временных рядов будет реплицироваться

    metaUpdate.Rubricator := rub;

    // Указываем репозиторий НСИ, используемый для репликации

    metaUpdate.RdsDatabase := rub.Database;

    // Указываем, что данные не будут реплицированы

    metaUpdate.CopyData := False;

    // Указываем, что репликация будет выполняться с дочерними объектами

    metaUpdate.CopyExtraObjects := True;

    // Создаем объект для обработки событий, возникающих во время репликации

    Progress := New MyUpdateProgress.Create;

    // Выполняем репликацию в файл

    metaUpdate.SaveEx("C:\Replication.zip", Progress);

End Sub UserProc;


// Класс, реализующий события, которые происходят во время репликации

Class MyUpdateProgress: UpdateProgress


    // Событие, возникающее до сохранения пользовательских объектов в файл

    Sub OnBeforeCustomObjectSaveToPef(Resolver: ICustomObjectResolver);

    Var

        i: Integer;

        Refs: IMetabaseCustomObjectReferences;

        Ref: IMetabaseCustomObjectReference;

        XmlVar: Variant;

        xmlDE: IXmlDomElement;

        XmlDoc: IXmlDomDocument;

    Begin

        // Выводим базовую информацию о пользовательском объекте

        Debug.WriteLine("Класс объекта: " + Resolver.ClassId.ToString);

        Debug.WriteLine("Наименование: " + Resolver.Name);

        Debug.WriteLine("Описание: " + Resolver.Description);

        Debug.WriteLine("Идентификатор: " + Resolver.Id);

        Debug.WriteLine("Ключ: " + Resolver.Key.ToString);

        // Выводим информацию о зависимостях объекта

        Refs := Resolver.References;

        For i := 0 To Refs.Count - 1 Do

            Ref := Refs.Item(i);

            Debug.WriteLine("Объект :" + Ref.Object.Name);

            Debug.WriteLine("Владелец :" + Ref.Owner.Name);

        End For;

        // Читаем данные из объекта в формат XML

        Resolver.ReadToXML(XmlVar);

        // Представляем считанные данные в виде документа

        XmlDoc := XmlVar As IXmlDomDocument;

        // Если документ содержит данные, то выводим их в окно консоли

        If (XmlDoc <> Null) Then

            Debug.WriteLine("До:");

            Debug.WriteLine(XmlDoc.xml);

            // Формируем новые данные в формате XML

            XmlDoc.loadXML("<nodes> <node1>ITEM1=13</node1> <node2>ITEM2=10</node2> </nodes>");

            Debug.WriteLine("После:");

            // Выводим сформированные данные в окно консоли

            Debug.WriteLine(XmlDoc.xml);

            // Записываем обновленные данные в пользовательский объект

            Resolver.WriteFromXML(XmlDoc);

        End If;

    End Sub OnBeforeCustomObjectSaveToPef;


End Class MyUpdateProgress;


В результате выполнения примера база данных временных рядов «TSDB_PEF»
 будет реплицирована в файл «C:\Replication.zip». Будет обработано событие,
 возникающее перед сохранением пользовательского объекта. Для каждого пользовательского
 объекта в окно консоли будет выведена базовая информация о нём, информация
 о зависимостях. Также будут изменены данные в формате XML, содержащиеся
 в пользовательском объекте.


См. также:


[IMetabaseUpdateProgress](IMetabaseUpdateProgress.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
