# IGxImageClass.FromFile

IGxImageClass.FromFile
-


# IGxImageClass.FromFile


## Синтаксис


FromFile(FileName: String): [IGxImage](../IGxImage/IGxImage.htm);


## Параметры


FileName.
 Путь и наименование файла, содержащего изображение.


## Описание


Метод FromFile возвращает изображение,
 полученное из файла.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки и компонента ImageBox с наименованием ImageBox1. В файловой
 системе предполагается наличие файла C:\TestImg.bmp.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Image: IGxImage;

Begin

    Image := GxImage.FromFile("C:\TestImg.bmp");

    ImageBox1.Image := Image;

End Sub Button1OnClick;


При нажатии на кнопку в компонент ImageBox1 будет загружено изображение
 из указанного файла.


См. также:


[IGxImageClass](IGxImageClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
