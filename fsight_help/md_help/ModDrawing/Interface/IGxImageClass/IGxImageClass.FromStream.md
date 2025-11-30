# IGxImageClass.FromStream

IGxImageClass.FromStream
-


# IGxImageClass.FromStream


## Синтаксис


FromStream(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm)):
 [IGxImage](../IGxImage/IGxImage.htm);


## Параметры


Stream.
 Поток, содержащий изображение.


## Описание


Метод FromStream возвращает
 изображение, полученное из потока.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки и компонента ImageBox с наименованием ImageBox1. В репозитории
 имеется документ с идентификатором TestImg, в который загружено какое-либо
 графическое изображение.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    Doc: IDocument;

	    Img: IGxImage;

	Begin

	    MB := MetabaseClass.Active;

	    Doc := MB.ItemById("TestImg").Bind As IDocument;

	    Img := GxImage.FromStream(Doc.GetAsStream);

	    Img.RotateFlip(GxRotateFlipType.Rotate90FlipNone);

	    ImageBox1.Image := Img;

	End Sub Button1OnClick;


При нажатии на кнопку в памяти будет создано новое изображение, основанное
 на изображении из указанного документа. Полученное изображение будет развернуто
 на 90 градусов по часовой стрелке и загружено в компонент ImageBox1.


См. также:


[IGxImageClass](IGxImageClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
