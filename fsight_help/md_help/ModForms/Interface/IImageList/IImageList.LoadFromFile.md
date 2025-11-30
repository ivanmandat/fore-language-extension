# IImageList.LoadFromFile

IImageList.LoadFromFile
-


# IImageList.LoadFromFile


## Синтаксис


LoadFromFile(Value: String; [Transparent: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm)
 = Null]);


## Параметры


Value. Параметр, определяющий
 строку, указывающую путь к файлу, который будет загружен в компонент.


Transparent. Параметр, определяющий
 цвет, который будет использоваться как прозрачный.


## Описание


Метод LoadFromFile осуществляет
 загрузку изображения в компонент из файла, путь и наименование которого,
 передаются посредством параметра Value.


## Пример


Для выполнения примера предполагается наличие формы, где расположены:
 кнопка с наименованием «Button1», кнопка с наименованием «Button2», компонент
 TreeList с наименованием «TreeList1»
 с добавленным элементом, компонент ImageList
 с наименованием «ImageList1», компонент FileOpenDialog
 с наименованием «FileOpenDialog1». Подключите системные сборки: Drawing,
 Forms. В файловой системе должно быть изображение с пиктограммами в виде
 горизонтального ряда: «C:\temp\1.bmp».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Node: ITreeListNode;

Begin

    ImageList1.LoadFromFile("C:\temp\1.bmp", GxColor.FromName("White"));

    TreeList1.Images := ImageList1;

    Node := TreeList1.Nodes.FirstNode;

    Node.ImageIndex := 1;

    Text := ImageList1.Count.ToString;

End Sub Button1OnClick;


Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Node: ITreeListNode;

Begin

    If FileOpenDialog1.Execute Then

        ImageList1.LoadFromFile(FileOpenDialog1.FileName, GxColor.FromName("White"));

        TreeList1.Images := ImageList1;

        Node := TreeList1.Nodes.FirstNode;

        Node.ImageIndex := 1;

        Text := ImageList1.Count.ToString;

    End If;

End Sub Button2OnClick;


При нажатии на кнопку «Button1» в компоненте TreeList
 появится вторая пиктограмма заданного изображения и отразится количество
 пиктограмм в наименовании формы. При нажатии на кнопку «Button2» будет
 выведено окно для открытия изображения, после этого в компоненте
 TreeList появится вторая пиктограмма
 этого изображения и отразится количество пиктограмм в наименовании формы.


См. также:


[IImageList](IImageList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
