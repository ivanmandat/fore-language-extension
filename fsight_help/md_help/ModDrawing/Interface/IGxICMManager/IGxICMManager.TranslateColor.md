# IGxICMManager.TranslateColor

IGxICMManager.TranslateColor
-


# IGxICMManager.TranslateColor


## Синтаксис


TranslateColor(Source: [IGxColor](../IGxColor/IGxColor.htm)):
 [IGxColor](../IGxColor/IGxColor.htm);


## Параметры


Source - преобразуемый цвет.


## Описание


Метод TranslateColor осуществляет
 преобразование указанного цвета в соответствии с палитрой указанного цветового
 профиля.


## Комментарии


Цветовой профиль задается в свойстве [ICMProfile](IGxICMManager.ICMProfile.htm).
 Данный метод возвращает цвет, который будет использоваться устройством
 для отображения цвета, указанного в параметре Source,
 при использовании установленного цветового профиля.


## Пример


Для выполнения примера предполагается наличие в операционной системе
 файла цветового профиля «ProPhoto».


			Sub UserProc;

Var

    ICMMan: IGxICMManager;

    Color1, Color2: IGxColor;

Begin

    ICMMan := New GxICMManager.Create;

    ICMMan.ICMProfile := "ProPhoto";

    Color1 := New GxColor.CreateRGB(100, 22, 33);

    Color2 := ICMMan.TranslateColor(Color1);

    Debug.WriteLine("Исходный цвет: R:" + Color1.R.ToString +

        " G:" + Color1.G.ToString +

        " B:" + Color1.B.ToString);

    Debug.WriteLine("Цвет, после преобразования: R:" + Color2.R.ToString +

        " G:" + Color2.G.ToString +

        " B:" + Color2.B.ToString);

End Sub UserProc;


При выполнении примера будет осуществлено преобразование сформированного
 цвета «Color1» в соответствии с палитрой указанного цветового профиля.
 Значения R, G и B компонент исходного и преобразованного цветов будут
 выведены в консоль среды разработки.


См. также:


[IGxICMManager](IGxICMManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
