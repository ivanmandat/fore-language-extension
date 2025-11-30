# ICubeAttachmentManager.SupportWriteAttachmentsByCoord

ICubeAttachmentManager.SupportWriteAttachmentsByCoord
-


# ICubeAttachmentManager.SupportWriteAttachmentsByCoord


## Синтаксис


SupportWriteAttachmentsByCoord(Coord: [IMatrixModelCoord](ForeSys.chm::/Interface/IMatrixModelCoord/IMatrixModelCoord.htm)):
 Boolean;


## Параметры


Coord. Координата в матрице
 с вложениями.


## Описание


Метод SupportWriteAttachmentsByCoord
 проверяет, может ли быть изменён список вложений по указанной координате
 матрицы с вложениями.


## Комментарии


Список вложений может быть изменён, если в текущей координате имеется
 привязка факта к полю для хранения вложений.


Метод возвращает значение True,
 если список вложений может быть изменён и False,
 если список вложений не доступен для редактирования.


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором «STD_CUBE». В кубе настроена привязка фактов для
 хранения вложений. Справочник, в который сохраняются вложения, в своей
 структуре имеет дополнительный атрибут с идентификатором «OBJ_KEY». Данный
 атрибут имеет целый тип данных, также для него выставлен признак ссылки
 на объект репозитория. В кубе по каким-либо координатам имеются данные
 или вложения. В репозитории должен быть создан документ с идентификатором
 «DOC», а в файловой системе должен иметься файл «C:\File.txt».


Добавьте ссылки на системные сборки: Cubes, Dal, Dimensions, Fore, IO,
 Matrix, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    CubeInst: ICubeInstance;

    Dest: ICubeInstanceDestination;

    Sels: IDimSelectionSet;

    Sel: IDimSelection;

    Exec: ICubeInstanceDestinationExecutor;

    Mat: IMatrix;

    MatEx: IMatrixEx;

    Ite: IMatrixIterator;

    Coord: IMatrixCoord;

    ExecResult: ICubeExecuteResult;

    Manager: ICubeAttachmentManager;

    Ats: ICubeAttachmentsEdited;

    At: ICubeAttachmentEdited;

    NameAttributeKey, FileNameAttributeKey, UrlAttributeKey, TimeStampKey, AttachmentKey, ObjKey: Integer;

    FStream: IFileStream;

    Doc: IMetabaseObjectDescriptor;

    Sto: ICubeInstanceStorage;

    i: integer;

Begin

    MB := MetabaseClass.Active;

    CubeInst := MB.ItemById("STD_CUBE").Open(Null) As ICubeInstance;

    Dest := CubeInst.Destinations.DefaultDestination;

    //Отметка куба

    Sels := Dest.CreateDimSelectionSet;

    For Each Sel In Sels Do

        Sel.SelectAll;

    End For;

    Exec := Dest.CreateExecutor;

    Exec.IncludeAttachments := True;

    Exec.PrepareExecute(Sels);

    Exec.PerformExecute;

    Mat := Exec.Matrix;

    //Результирующая матрица куба

    MatEx := Mat As IMatrixEx;

    If MatEx.AttachmentValueIndex < 0 Then

        Debug.WriteLine("AttachmentValueIndex <0. Aborted ");

        Return;

    End If;

    ExecResult := CubeClass.ExecuteResult(Mat);

    //Менеджер для работы с вложениями куба

    Manager := ExecResult.CreateAttachmentManager;

    //Итератор матрицы

    Mat.ValueFlag := Mat.ValueFlag + 10;

    Ite := Mat.CreateIterator;

    Coord := Mat.CreateCoord;

    Coord.Item(0) := 0;

    //...

    //Формирование Coord по другим измерениям

    //...

    Ite.PutCoord(Coord);

    If Manager.SupportWriteAttachmentsByCoord(Coord) Then

        Ats := Manager.EditAttachments(Ite);

        NameAttributeKey := Ats.Attributes.FindById("NAME").Key;

        FileNameAttributeKey := Ats.Attributes.FindById("FILE_NAME").Key;

        UrlAttributeKey := Ats.Attributes.FindById("URL").Key;

        TimeStampKey := Ats.Attributes.FindById("TIMESTAMP").Key;

        AttachmentKey := Ats.Attributes.FindById("ATTACHMENT").Key;

        ObjKey := Ats.Attributes.FindById("OBJ_KEY").Key;

        //Создание вложений

        //Файл

        At := Ats.AddNew;

        FStream := New FileStream.Create("C:\File.txt", FileOpenMode.Read, FileShare.DenyNone);

        At.Type := CubeAttachmentType.Value;

        At.AttributeValueByKey(AttachmentKey) := FStream;

        At.AttributeValueByKey(FileNameAttributeKey) := "File.txt";

        At.AttributeValueByKey(NameAttributeKey) := "File.txt";

        At.AttributeValueByKey(TimeStampKey) := DateTime.Now;

        //Документ репозитория

        At := Ats.AddNew;

        Doc := MB.ItemById("DOC");

        At.Type := CubeAttachmentType.Document;

        At.AttributeValueByKey(ObjKey) := Doc.Key;

        At.AttributeValueByKey(FileNameAttributeKey) := (Doc.Bind As IDocument).FileName;

        At.AttributeValueByKey(NameAttributeKey) := Doc.Name;

        At.AttributeValueByKey(TimeStampKey) := DateTime.Now;

        //Ссылка

        At := Ats.AddNew;

        At.Type := CubeAttachmentType.URL;

        At.AttributeValueByKey(UrlAttributeKey) := "http://localhost/";

        At.AttributeValueByKey(NameAttributeKey) := "localhost";

        At.AttributeValueByKey(TimeStampKey) := DateTime.Now;

        //Просмотр списка вложений

        For i := 0 To Ats.Count - 1 Do

            At := Ats.Edit(i);

            Debug.WriteLine("Key= " + At.Key.ToString +

                " Name = " + (At As ICubeAttachment).AttributeValueByKey(NameAttributeKey) +

                " Type = " + (At As ICubeAttachment).Type.ToString);

        End For;

        //Сохранение изменений

        Manager.Post(Ite, Ats);

        Sto := Dest.CreateStorage(CubeInstanceStorageOptions.Attachments);

        Sto.AttachmentManager := Manager;

        Sto.SaveMatrix(Mat, Mat.ValueFlag);

    End If;

End Sub UserProc;


При выполнении примера будет вычислена результирующая матрица куба и
 получен менеджер для работы с вложениями. Будет создан итератор для навигации
 по матрице и координата в матрице. По координате будут созданы три различных
 вложения. Информация обо всех вложениях, которые имеются по этой координате,
 будет выведена в консоль среды разработки. После этого все изменения будут
 сохранены обратно в куб.


См. также:


[ICubeAttachmentManager](ICubeAttachmentManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
