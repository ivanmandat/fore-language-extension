# IGxImageFormatClass.Icon

IGxImageFormatClass.Icon
-


# IGxImageFormatClass.Icon


## Синтаксис


Icon: [IGxImageFormat](../IGxImageFormat/IGxImageFormat.htm);


## Описание


Свойство Icon возвращает графический
 объект в формате значков Windows (файлы с расширением Ico).


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

    If Image.RawFormat = GxImageFormats.Icon Then

        s := "Yes";

    Else

        s := "No";

    End If;

End Sub Button1OnClick;


При нажатии на кнопку в переменной s будет содержаться «Yes»,
 если в компоненте ImageBox1 содержится изображение в формате Ico.


См. также:


[IGxImageFormatClass](IGxImageFormatClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
