# IActionItem.AdditionalShortCuts

IActionItem.AdditionalShortCuts
-


# IActionItem.AdditionalShortCuts


## Синтаксис


AdditionalShortCuts: [IShortCutCollection](../IShortCutCollection/IShortCutCollection.htm);


## Описание


Свойство AdditionalShortCuts
 возвращает коллекцию дополнительных сочетаний горячих клавиш, связанных
 с данным действием.


## Комментарии


В [инспекторе
 объектов](UiDevEnv.chm::/01_Development_Environment/03_Windows_of_Development_Environment/Object_Inspector.htm) для данного свойства реализован специальный
 редактор. После установки курсора в редактор автоматически будут отлавливаться
 все нажатия клавиш и сочетания клавиш. Нажатые клавиши и сочетания клавиш
 будут назначены в качестве дополнительных «горячих клавиш» для данного
 действия. В данном редакторе игнорируются следующие клавиши:


	- BACKSPACE - используется для удаления назначенного сочетания
	 «горячих клавиш».


	- Клавиши RIGHT, LEFT - используются для навигации между назначенными
	 «горячими клавишами».


Сочетания «горячих клавиш» в списке разделяются знаком «;».


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента ActionList, содержащего
 различные действия, связанные с пунктами главного меню и кнопками панелей
 инструментов.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    SCCollect: IShortCutCollection;

Begin

    ActionItem1.ShortCut := MakeShortcut(KeyModifiers.Ctrl, Keys.C);

    SCCollect := ActionItem1.AdditionalShortCuts;

    SCCollect.Add(MakeShortcut(KeyModifiers.Ctrl, Keys.Insert));

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку для действия ActionItem1
 будут назначены два сочетания горячих клавиш. Первое сочетание будет задано
 в основном свойстве ShortCut, второе будет добавлено в коллекцию дополнительных
 сочетаний горячих клавиш.


См. также:


[IActionItem](IActionItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
