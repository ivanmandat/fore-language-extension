# IRibbonColorButton.AutoButtonBorder

IRibbonColorButton.AutoButtonBorder
-


# IRibbonColorButton.AutoButtonBorder


## Синтаксис


AutoButtonBorder: Boolean;


## Описание


Свойство AutoButtonBorder определяет,
 будет ли отображаться рамка вокруг изображения цвета, если цвет выбран
 с помощью кнопки «Авто».


## Комментарии


Если свойству установлено значение True,
 то при выборе цвета с помощью кнопки «Авто», соответствующее изображение
 цвета под [пиктограммой
 кнопки](../IRibbonButton/IRibbonButton.ImageIndex.htm) будет выделено рамкой.


Если свойству установлено значение False,
 то изображение выбранного цвета будет отображаться в виде сплошной линии.


	- ![](IRibbonColorButton_AutoButtonBorder_True.gif)
	 - AutoButtonBorder = True


	- ![](IRibbonColorButton_AutoButtonBorder_False.gif) -
	 AutoButtonBorder = False


Данное свойство актуально, если свойству [ColorVisible](IRibbonColorButton.ColorVisible.htm)
 установлено значение True.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента Ribbon
 с наименованием «Ribbon1». На ленте компонента «Ribbon1» создана вкладка
 и панель.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    RPanel: IRibbonPanel;

    RColorBtn: IRibbonColorButton;

Begin

    RPanel := Ribbon1.ActiveCategory.Panels.Item(0);

    RColorBtn := New RibbonColorButton.Create;

    RPanel.Elements.Add(RColorBtn);

    RColorBtn.Text := "Цвет";

    RColorBtn.SplitButton := False;

    RColorBtn.ImageIndex := 0;

    RColorBtn.AutoButtonBorder := True;

    RColorBtn.AutoButtonCaption := "Авто";

    RColorBtn.AutoButtonColor := GxColor.FromName("Red");

    RColorBtn.AutoButtonOnTop := True;

    RColorBtn.AutoButtonTooltip := "Цвет по умолчанию";

    RColorBtn.ColorVisible := True;

    RColorBtn.OtherButtonCaption := "Все цвета";

    RColorBtn.OtherButtonTooltip := "Выбрать цвет в диалоге";

End Sub Button1OnClick;


При нажатии на кнопку на панели ленты будет создана кнопка для выбора
 цвета. Для кнопки будут настроены основные параметры.


См. также:


[IRibbonColorButton](IRibbonColorButton.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
