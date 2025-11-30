# IToolbarButton.AdditionalShortCuts

IToolbarButton.AdditionalShortCuts
-


# IToolbarButton.AdditionalShortCuts


## Синтаксис


AdditionalShortCuts: [IShortCutCollection](../IShortCutCollection/IShortCutCollection.htm);


## Описание


Свойство AdditionalShortCuts
 возвращает коллекцию дополнительных сочетаний горячих клавиш, связанных
 с данной кнопкой панели инструментов.


## Комментарии


Если кнопка использует объект [Action](IToolbarButton.Action.htm),
 то значение свойства AdditionalShortCuts
 кнопки автоматически определяется значением свойства [AdditionalShortCuts](../IActionItem/IActionItem.AdditionalShortCuts.htm)
 объекта [Action](IToolbarButton.Action.htm).


В [инспекторе
 объектов](UiDevEnv.chm::/01_Development_Environment/03_Windows_of_Development_Environment/Object_Inspector.htm) для данного свойства реализован специальный
 редактор. После установки курсора в редактор автоматически будут отлавливаться
 все нажатия клавиш и сочетаний клавиш. Нажатые клавиши и сочетания клавиш
 будут назначены в качестве дополнительных «горячих клавиш» для данной
 кнопки. В данном редакторе игнорируются следующие клавиши:


	- BACKSPACE - используется для удаления назначенного сочетания
	 «горячих клавиш».


	- Клавиши RIGHT/LEFT - используются для навигации между назначенными
	 «горячими клавишами».


Сочетания «горячих клавиш» в списке разделяются знаком «;».


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента Toolbar, реализующего
 панель инструментов формы. На панели инструментов создано несколько кнопок.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    SCCollect: IShortCutCollection;

Begin

    ToolbarButton1.ShortCut := MakeShortcut(KeyModifiers.Ctrl, Keys.C);

    SCCollect := ToolbarButton1.AdditionalShortCuts;

    SCCollect.Add(MakeShortcut(KeyModifiers.Ctrl, Keys.Insert));

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку для кнопки панели инструментов
 ToolbarButton1 будут назначены два сочетания горячих клавиш. Первое сочетание
 будет задано в основном свойстве ShortCut, второе будет добавлено в коллекцию
 дополнительных сочетаний горячих клавиш.


См. также:


[IToolbarButton](IToolbarButton.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
