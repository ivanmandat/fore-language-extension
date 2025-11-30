# IGxGraphics.SaveState

IGxGraphics.SaveState
-


# IGxGraphics.SaveState


## Синтаксис


SaveState: Integer;


## Описание


Метод SaveState сохраняет состояние
 графического объекта в стек.


## Комментарии


Метод SaveState может вызываться
 несколько раз до вызова метода [RestoreState](IGxGraphics.RestoreState.htm),
 при этом будет возвращаться новый индекс состояния графического объекта.
 При передаче одного из индексов состояния методу [RestoreState](IGxGraphics.RestoreState.htm),
 графической объект восстанавливается в соответствии с сохраненными настройками.
 Параметры состояния с данным индексом удаляются из стека, а также удаляются
 все состояния, помещенные в стек после вызова метода SaveState
 с данным индексом.


## Пример


Для выполнения примера предполагается наличие формы, где расположены:
 кнопка с наименованием «Button1», компонент ImageBox с наименованием «ImageBox1».
 Подключите системные сборки: Drawing, Forms.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Img: IGxBitmap;

    ImgFont: IGxFont;

    ImgBrush: IGxBrush;

    Graph: IGxGraphics;

    i: Integer;

Begin

    //Создаём изображение

    Img := GxBitmap.CreateNew(ImageBox1.ClientWidth, ImageBox1.ClientHeight, GxPixelFormat.Format32bppArgb);

    ImgFont := New GxFont.Create("Times New Roman", 16, GxFontStyle.BoldItalic, GxUnit.World);

    ImgBrush := New GxSolidBrush.Create(GxColor.FromName("Red"));

    Graph := GxGraphicsClass.FromImage(Img);

    //Сохраняем состояние

    i := Graph.SaveState;

    Graph.SetScale(2, 2);

    Graph.DrawTextW("Первая надпись", ImgFont, ImgBrush, 0, 10);

    Graph.RestoreState(i);

    Graph.DrawTextW("Вторая надпись", ImgFont, ImgBrush, 0, 0);

    ImageBox1.Image := Img;

End Sub Button1OnClick;


При нажатии на кнопку в компоненте ImageBox отобразится новое битовое
 изображение, параметры состояния которого будут сохранены в стек. Будет
 изменён масштаб изображения и выведено текстовое сообщение с заданными
 настройками. После вывода первого сообщения параметры состояния изображения
 восстановятся и будет выведено второе сообщение.


См. также:


[IGxGraphics](IGxGraphics.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
