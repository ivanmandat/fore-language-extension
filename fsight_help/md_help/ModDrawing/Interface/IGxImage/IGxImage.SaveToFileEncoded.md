# IGxImage.SaveToFileEncoded

IGxImage.SaveToFileEncoded
-


# IGxImage.SaveToFileEncoded


## Синтаксис


SaveToFileEncoded(FileName: String; Format: [IGxImageFormat](../IGxImageFormat/IGxImageFormat.htm));


## Параметры


FileName. Наименование файла,
 в который будет сохранено изображение.


Format. Формат, в котором должно
 быть сохранено изображение.


## Описание


Метод SaveToFileEncoded осуществляет
 сохранение изображения в файл в указанном формате.


## Комментарии


Данный метод не допускает сохранение изображений в форматы ICO и EMF.


## Пример


Для выполнения примера предполагается наличие в файловой системе изображения
 C:\Map.bmp.


			Sub UserProc;

Var

    Image: IGxImage;

Begin

    Image := GxImage.FromFile("C:\Map.bmp");

    Image.SaveToFileEncoded("C:\Map.jpeg", GxImageFormats.Jpeg);

End Sub UserProc;


При выполнении примера указанное изображение будет сохранено в формате
 Jpeg.


См. также:


[IGxImage](IGxImage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
