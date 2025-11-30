# IScene3DCaption.Text

IScene3DCaption.Text
-


# IScene3DCaption.Text


## Синтаксис


Text: String;


## Описание


Свойство Text определяет текст
 заголовка.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента [Chart3DBox](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/Chart3DBox.htm)
 с идентификатором «Chart3DBox1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Scene3D: IScene3D;

	    Caption: IScene3DCaption;

	    CaptionStyle: IScene3DTextStyle;

	Begin

	    Scene3D := Chart3DBox1.Scene;

	    Caption := Scene3D.Caption;

	    Caption.Text := "Заголовок сцены";

	    CaptionStyle := Caption.Style;

	    CaptionStyle.Visible := True;

	End Sub Button1OnClick;


После выполнения примера для трехмерной сцены будет создан заголовок:


![](../IScene3D/IScene3D_Caption.gif)


См. также:


[IScene3DCaption](IScene3DCaption.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
