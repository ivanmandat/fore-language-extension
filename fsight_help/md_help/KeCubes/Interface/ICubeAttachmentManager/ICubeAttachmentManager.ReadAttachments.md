# ICubeAttachmentManager.ReadAttachments

ICubeAttachmentManager.ReadAttachments
-


# ICubeAttachmentManager.ReadAttachments


## Синтаксис


ReadAttachments(Iterator: [IMatrixModelIterator](ForeSys.chm::/Interface/IMatrixModelIterator/IMatrixModelIterator.htm)):
 [ICubeAttachments](../ICubeAttachments/ICubeAttachments.htm);


## Параметры


Iterator.
 Итератор матрицы с вложениями.


## Описание


Метод ReadAttachments возвращает
 коллекцию вложений, сохранённых в кубе.


## Комментарии


Метод возвращает те значения, которые имеются по текущей позиции итератора.
 Полученные вложения будут доступны только на чтение. Для редактирования
 вложений используйте метод [EditAttachments](ICubeAttachmentManager.EditAttachments.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором «STD_CUBE». В кубе настроена привязка фактов для
 хранения вложений. По каким-либо координатам куба сохранены вложения.


Добавьте ссылки на системные сборки: Cubes, Dal, Dimensions, Matrix,
 Metabase.


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

    ExecResult: ICubeExecuteResult;

    Manager: ICubeAttachmentManager;

    Ats: ICubeAttachments;

    At: ICubeAttachment;

    NameAttributeKey: Integer;

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

    Ite := Mat.CreateIterator;

    Ite.Move(IteratorDirection.First);

    While Ite.Valid Do

        //Вложения по текущей координате

        Ats := Manager.ReadAttachments(Ite);

        If Ats <> Null Then

            Debug.WriteLine("Имеется вложение. Количество = " + Ats.Count.ToString);

            NameAttributeKey := Ats.Attributes.FindById("Name").Key;

            For i := 0 To Ats.Count - 1 Do

                At := Ats.Item(i);

                Debug.WriteLine("Key= " + At.Key.ToString + " Name = " + At.AttributeValueByKey(NameAttributeKey) + " Type = " + At.Type.ToString);

            End For;

        Else

            Debug.WriteLine("Нет вложений");

        End If;

        Debug.WriteLine("  ");

        Ite.Move(IteratorDirection.Next);

    End While;

End Sub UserProc;


При выполнении примера будет вычислена результирующая матрица куба и
 получен менеджер для работы с вложениями. Будет создан итератор и осуществлён
 обход всех координат матрицы. Если по координате хранятся вложения, то
 информация о них (ключ, наименование и тип) будет выведены в консоль среды
 разработки.


См. также:


[ICubeAttachmentManager](ICubeAttachmentManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
