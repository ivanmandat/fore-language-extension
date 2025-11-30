# IMenuItem.AdditionalShortCuts

IMenuItem.AdditionalShortCuts
-


# IMenuItem.AdditionalShortCuts


## Синтаксис


AdditionalShortCuts: [IShortCutCollection](../IShortCutCollection/IShortCutCollection.htm);


## Описание


Свойство AdditionalShortCuts
 возвращает коллекцию дополнительных сочетаний горячих клавиш, связанных
 с данным пунктом меню.


## Комментарии


Если пункт меню использует объект [Action](IMenuItem.Action.htm),
 то значение свойства AdditionalShortCuts
 пункта меню автоматически определяется значением свойства [AdditionalShortCuts](../IActionItem/IActionItem.AdditionalShortCuts.htm)
 объекта [Action](IMenuItem.Action.htm).


В [инспекторе
 объектов](UiDevEnv.chm::/01_Development_Environment/03_Windows_of_Development_Environment/Object_Inspector.htm) для данного свойства реализован специальный
 редактор. После установки курсора в редактор автоматически будут отлавливаться
 все нажатия клавиш и сочетания клавиш. Нажатые клавиши и сочетания клавиш
 будут назначены в качестве дополнительных «горячих клавиш» для данного
 пункта меню. В данном редакторе игнорируются следующие клавиши:


	- BACKSPACE - используется для удаления назначенного сочетания
	 «горячих клавиш».


	- Клавиши RIGHT/LEFT - используются для навигации между назначенными
	 «горячими клавишами».


Сочетания «горячих клавиш» в списке разделяются знаком «;».


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента MainMenu, реализующего
 главное меню формы. В меню создано несколько пунктов.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    SCCollect: IShortCutCollection;

Begin

    MenuItem1.Text := "Копировать";

    MenuItem1.ShortCut := Self.MakeShortcut(KeyModifiers.Ctrl, Keys.C);

    SCCollect := MenuItem1.AdditionalShortCuts;

    SCCollect.Add(Self.MakeShortcut(KeyModifiers.Ctrl, Keys.Insert));

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку для пункта главного меню
 MenuItem1 будет изменено наименование и будут назначены два сочетания
 горячих клавиш. Первое сочетание будет задано в основном свойстве ShortCut,
 второе будет добавлено в коллекцию дополнительных сочетаний горячих клавиш.


См. также:


[IMenuItem](IMenuItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
