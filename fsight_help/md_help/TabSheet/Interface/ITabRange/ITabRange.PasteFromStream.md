# ITabRange.PasteFromStream

ITabRange.PasteFromStream
-


# ITabRange.PasteFromStream


## Синтаксис


PasteFromStream(SrcStream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm));


## Параметры


SrcStream. Поток, из которого
 осуществляется вставка.


## Описание


Метод PasteFromStream вставляет
 в текущий диапазон данные из указанного потока.


## Комментарии


Перед выполнением метода курсор в потоке должен быть установлен в начальную
 позицию: [IIOStream.Position](ModIo.chm::/Interface/IIOStream/IIOStream.Position.htm)=0.
 Данные в поток должны быть скопированы с помощью метода [ITabRange.CopyToStream](ITabRange.CopyToStream.htm).


Используется только в настольном приложении.


## Пример


Для выполнения примера предполагается наличие в репозитории формы, расположенных
 на ней двух кнопок с наименованиями «Button1» и «Button2», компонента
 UiTabSheet с наименованием «UiTabSheet1» и каких-либо визуальных компонентов,
 для которых «UiTabSheet1» установлен в качестве источника данных.


			Class TESTForm: Form

    UiTabSheet1: UiTabSheet;

    TabSheetBox1: TabSheetBox;

    Button1: Button;

    Button2: Button;

    MStream: IMemoryStream;

    TSheet: ITabSheet;


    Sub TESTFormOnCreate(Sender: Object; Args: IEventArgs);

    Begin

        TSheet := UiTabSheet1.TabSheet;

        MStream := New MemoryStream.Create;

    End Sub TESTFormOnCreate;


    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Begin

        MStream.Clear;

        TSheet.View.Selection.Range.CopyToStream(MStream);

    End Sub Button1OnClick;


    Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

    Begin

        If MStream.Size > 0 Then

            MStream.Position := 0;

            TSheet.View.Selection.Range.PasteFromStream(MStream);

        End If;

    End Sub Button2OnClick;

End Class TESTForm;


При запуске формы будет инициализирован поток в памяти, который будет
 использоваться для обмена данными. При нажатии на кнопку «Button1» в поток
 будут скопированы данные выделенного в текущий момент диапазона таблицы.
 При нажатии на кнопку «Button2» в текущий выделенный диапазон осуществляется
 вставка данных из потока.


См. также:


[ITabRange](ITabRange.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
