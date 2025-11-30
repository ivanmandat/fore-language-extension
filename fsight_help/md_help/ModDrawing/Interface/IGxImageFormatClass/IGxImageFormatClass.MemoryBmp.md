# IGxImageFormatClass.MemoryBmp

IGxImageFormatClass.MemoryBmp
-


# IGxImageFormatClass.MemoryBmp


## Синтаксис


MemoryBmp: [IGxImageFormat](../IGxImageFormat/IGxImageFormat.htm);


## Описание


Свойство MemoryBmp возвращает
 графический объект в формате точечных рисунков в памяти.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки и компонента ImageBox с наименованием ImageBox1. В ImageBox1
 загружено какое-либо изображение.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Image: IGxImage;

    s: String;

Begin

    Image := ImageBox1.Image;

    If Image.RawFormat = GxImageFormats.Gif Then

        s := "Yes";

    Else

        s := "No";

    End If;

End Sub Button1OnClick;


При нажатии на кнопку в переменной s будет содержаться «Yes»,
 если в компоненте ImageBox1 содержится изображение в формате точечных
 рисунков в памяти.


См. также:


[IGxImageFormatClass](IGxImageFormatClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
