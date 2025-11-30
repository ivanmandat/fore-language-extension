# IScene3DCoordinatePlane.Caption

IScene3DCoordinatePlane.Caption
-


# IScene3DCoordinatePlane.Caption


## Синтаксис


Caption: [IScene3DCaption](../IScene3DCaption/IScene3DCaption.htm);


## Описание


Свойство доступно только для чтения.


Свойство Caption возвращает
 параметры заголовка плоскости системы координат.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента [Chart3DBox](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/Chart3DBox.htm)
 с идентификатором «Chart3DBox1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Scene3D: IScene3D;

	    DisplayedObjects: IScene3DDisplayedObjects;

	    CoordinatePlane: IScene3DCoordinatePlane;

	    Caption: IScene3DCaption;

	    CaptionStyle: IScene3DTextStyle;

	Begin

	    Scene3D := Chart3DBox1.Scene;

	    DisplayedObjects := Scene3D.DisplayedObjects;

	    CoordinatePlane := DisplayedObjects.CoordinatePlanes.SidePlane;

	    Caption := CoordinatePlane.Caption;

	    Caption.Text := "Заголовок оси";

	    CaptionStyle := Caption.Style;

	    CaptionStyle.Visible := True;

	End Sub Button1OnClick;


После выполнения примера для боковой стенки сцены (плоскость YOZ) сцены
 будет создан заголовок:


![](IScene3DCoordinatePlane_Caption.gif)


См. также:


[IScene3DCoordinatePlane](IScene3DCoordinatePlane.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
