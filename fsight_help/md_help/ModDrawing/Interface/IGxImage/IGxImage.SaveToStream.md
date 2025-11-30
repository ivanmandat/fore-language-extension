# IGxImage.SaveToStream

IGxImage.SaveToStream
-


# IGxImage.SaveToStream


## Синтаксис


SaveToStream(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm));


## Параметры


Stream.
 Поток, в который будет сохранено изображение.


## Описание


Метод SaveToStream осуществляет
 сохранение изображения в поток, передаваемый посредством входного параметра.


## Комментарии


Файл сохраняется в исходном формате. Если необходима смена формата,
 то используйте метод [SaveToStreamEncoded](IGxImage.SaveToStreamEncoded.htm).
 Для проверки формата изображения используйте свойство [RawFormat](IGxImage.RawFormat.htm).


## Пример


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Image: IGxImage;

	    Strem1: IIOStream;

	Begin

	    Strem1 := New MemoryStream.Create;

	    Image := ImageBox1.Image;

	    Image.SaveToStream(Strem1);

	End Sub Button1OnClick;


При нажатии на кнопку произойдет сохранение изображения, содержащегося
 в компоненте с наименованием «ImageBox1», в поток «Strem1».


См. также:


[IGxImage](IGxImage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
