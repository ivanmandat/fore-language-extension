# IImageList.SaveToStream2

IImageList.SaveToStream2
-


# IImageList.SaveToStream2


## Синтаксис


SaveToStream2(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm)): Boolean;


## Параметры


Stream. Поток, в который осуществляется сохранение изображений.


## Описание


Метод SaveToStream2 сохраняет изображения в поток с сохранением информации о полупрозрачности.


## Комментарии


При выполнении метода все изображения, загруженные в компонент, будут сохранены в указанный поток в специальном формате. Данный формат поддерживает сохранение информации о полупрозрачности изображений. В дальнейшем изображения из потока могут быть загружены с помощью метода [LoadFromStream2](IImageList.LoadFromStream2.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонента ImageList с наименованием «ImageList1» и каких-либо компонентов, использующих изображения компонента «ImageList1». В «ImageList1» загружены изображения с полупрозрачными частями.


			Class TESTForm: Form

    Button1: Button;

    ImageList1: ImageList;

    Img: ImageList;

    TestToolbar: Toolbar;


    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        Str: IMemoryStream;

    Begin

        Self.BeginUpdate;

        Str := New MemoryStream.Create;

        Img := New ImageList.Create;

        ImageList1.SaveToStream2(Str);

        Img.LoadFromStream2(Str);

        TestToolbar := New Toolbar.Create;

        TestToolbar.Parent := Self;

        TestToolbar.Images := Img;

        TestToolbar.BeginUpdate;

        //...Дальнейшая настройка панели инструментов
        TestToolbar.EndUpdate;

        Self.EndUpdate;

    End Sub Button1OnClick;


End Class TESTForm;


При нажатии на кнопку динамически будет создана панель инструментов. Для хранения изображений, которые будут использовать элементы управления панели, также динамически будет создан компонент ImageList. Изображения в него будут загружены с сохранением информации о полупрозрачности.


См. также:


[IImageList](IImageList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
