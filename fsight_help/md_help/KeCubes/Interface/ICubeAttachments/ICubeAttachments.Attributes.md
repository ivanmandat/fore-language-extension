# ICubeAttachments.Attributes

ICubeAttachments.Attributes
-


# ICubeAttachments.Attributes


## Синтаксис


Attributes: [ICubeAttachmentAttributes](../ICubeAttachmentAttributes/ICubeAttachmentAttributes.htm);


## Описание


Свойство Attributes возвращает
 коллекцию атрибутов справочника, в котором хранятся вложения куба.


## Комментарии


Справочник для хранения вложений задаётся в свойстве [IStandardCubeDestination.AttachmentsStorage](../IStandardCubeDestination/IStandardCubeDestination.AttachmentsStorage.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором «STD_CUBE». В кубе настроена привязка фактов для
 хранения вложений, по каким-либо координатам куба сохранены вложения.


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

    Attrs: ICubeAttachmentAttributes;

    Attr: ICubeAttachmentAttribute;

    i, c: Integer;

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

            Attrs := Ats.Attributes;

            c := Attrs.Count;

            For i := 0 To c - 1 Do

                Attr := Attrs.Item(i);

                Debug.WriteLine(Attr.Name +

                    ".Тип данных: " + Attr.DataType.ToString +

                    ".Пустые значения: " + Attr.Nullable.ToString +

                    ".Ссылка на объект репозитория: " + Attr.ObjectLinked.ToString);

            End For;

            Break;

        End If;

        Ite.Move(IteratorDirection.Next);

    End While;

End Sub UserProc;


При выполнении примера будет вычислена результирующая матрица куба и
 получен менеджер для работы с вложениями. В консоль среды разработки будет
 выведена информация по атрибутам справочника, в котором хранятся вложения.


См. также:


[ICubeAttachments](ICubeAttachments.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
