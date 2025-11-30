# IGxImage.SaveToStreamEncoded

IGxImage.SaveToStreamEncoded
-


# IGxImage.SaveToStreamEncoded


## Синтаксис


SaveToStreamEncoded(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm);
 Format: [IGxImageFormat](../IGxImageFormat/IGxImageFormat.htm));


## Параметры


Stream. Поток, в который будет
 сохранено изображение.


Format. Формат, в котором должно
 быть сохранено изображение.


## Описание


Метод SaveToStreamEncoded осуществляет
 сохранение изображения в поток в указанном формате.


## Комментарии


Данный метод не допускает сохранение изображений в форматы ICO и EMF.


## Пример


Для выполнения примера предполагается наличие в файловой системе изображения
 C:\Map.bmp.


			Sub UserProc;

Var

    Image: IGxImage;

    Stream1: IIOStream;

Begin

    Strem1 := New MemoryStream.Create;

    Image := GxImage.FromFile("C:\Map.bmp");

    Image.SaveToStreamEncoded(Stream1, GxImageFormats.Jpeg);

End Sub UserProc;


После выполнения примера указанное изображение будет сохранено в формате
 Jpeg в поток Stream1.


См. также:


[IGxImage](IGxImage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
