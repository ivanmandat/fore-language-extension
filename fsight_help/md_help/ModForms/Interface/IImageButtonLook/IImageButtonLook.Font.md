# IImageButtonLook.Font

IImageButtonLook.Font
-


# IImageButtonLook.Font


## Синтаксис


Font: [IControlFont](../IControlFont/IControlFont.htm);


## Описание


Свойство Font определяет параметры
 шрифта, используемого для отображения текста при определенном состоянии
 компонента.


## Комментарии


В [инспекторе
 объектов](UiDevEnv.chm::/01_Development_Environment/03_Windows_of_Development_Environment/Object_Inspector.htm) данное свойство отображается в виде составного
 свойства. Для изменения значения данного свойства необходимо изменить
 значение любого из его подсвойств.


Изменение отдельных компонент свойства [Font](../IControl/IControl.Font.htm)
 у самого компонента приведет к смене соответствующих компонент шрифта
 для всех состояний кнопки. Если в определенных состояниях шрифт должен
 иметь какие-либо индивидуальные настройки, то необходимо их устанавливать
 после изменения свойства [Font](../IControl/IControl.Font.htm)
 компонента:


			Var

    ButtonFont: IControlFont;

    PressLook: IImageButtonLook;

Begin

    //Общие параметры шрифта для всех состояний кнопки

    ButtonFont := ImageButton1.Font;

    ButtonFont.Name := "Arial";

    ButtonFont.Underline := True;

    ButtonFont.Color := GxColor.FromName("Red");

    //Индивидуальные параметры шрифта для нажатого состояния

    PressLook := ImageButton1.PressedLook;

    ButtonFont := PressLook.Font;

    ButtonFont.Color := GxColor.FromName("Crimson");


См. также:


[IImageButtonLook](IImageButtonLook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
