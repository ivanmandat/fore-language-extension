# IGxImageList.Add

IGxImageList.Add
-


# IGxImageList.Add


## Синтаксис


Add(Image: [IGxBitmap](../IGxBitmap/IGxBitmap.htm);
 [Transparent: [IGxColor](../IGxColor/IGxColor.htm) = Null]);


## Параметры


Image. Изображение, которое
 необходимо добавить в коллекцию.


Transparent. Необязательный
 параметр, определяющий цвет, который будет использоваться как прозрачный.


## Описание


Метод Add добавляет изображение,
 передаваемое посредством входного параметра, в коллекцию изображений.


## Пример


Для выполнения примера предполагается наличие формы, где расположены:
 кнопка с наименованием Button1, невизуальный компонент ImageList с
 наименованием ImageList1, компонент TreeList
 с наименнованием TreeList1. Добавьте в компонент ImageList изображения, а у компонента TreeList установите в свойствах StateImages
 и Images связь с источником коллекции изображений ImageList1. Создайте
 пять элементов в компоненте TreeList
 и назначьте им пиктограммы из коллекции изображений. Так же в файловой
 системе должно быть изображение: «C:\1.bmp». В коллекции и в изображении
 должно находиться минимум пять пиктограмм.


Добавьте ссылки на системные сборки: Drawing, Forms, Io.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ImgList: IGxImageList;

	    Str: IIOStream;

	    Color: IGxColor;

	Begin

	    Color := GxColor.FromKnownColor(GxKnownColor.White);

	    // Создадим коллекцию изображений и добавим пиктограммы из файла

	    ImgList := New GxImageList.Create;

	    ImgList.Add(New GxBitmap.CreateFromFile("C:\1.bmp"), Color);

	    // Через поток заменим пиктограммы в компоненте с коллекцией изображений

	    Str := New MemoryStream.Create;

	    ImgList.SaveToStream(Str, Color);

	    ImageList1.LoadFromStream(Str, Color);

	End Sub Button1OnClick;


При нажатии на кнопку в компоненте TreeList
 добавленные пиктограммы заменятся пиктограммами из заданного файла
 «C:\1.bmp».


См. также:


[IGxImageList](IGxImageList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
