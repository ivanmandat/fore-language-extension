# ITrackBar.Orientation

ITrackBar.Orientation
-


# ITrackBar.Orientation


## Синтаксис


Orientation: [TrackBarOrientation](../../Enums/TrackBarOrientation.htm);


## Описание


Свойство Orientation определяет
 ориентацию компонента на форме.


## Комментарии


Для определения стиля границы компонента используйте свойство [ITrackBar.BorderStyle](ITrackBar.BorderStyle.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 Button с идентификатором «Button1» и компонент TrackBar с идентификатором
 «TrackBar1». Расположите компонент «TrackBar1» горизонтально.


Пример является обработчиком события OnClick для компонента «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    TrackBar1.Orientation := TrackBarOrientation.Vertical;

End Sub Button1OnClick;


При нажатии на кнопку «Button1» компонент «TrackBar1» будет расположен
 вертикально.


См. также:


[ITrackBar](ITrackBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
