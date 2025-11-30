# IShortCutCollection.Add

IShortCutCollection.Add
-


# IShortCutCollection.Add


## Синтаксис


Add(Value: Integer);


## Параметры


Value. Сочетание горячих клавиш,
 которое необходимо добавить в коллекцию.


## Описание


Метод Add осуществляет добавление
 сочетания горячих клавиш в коллекцию.


## Комментарии


Для создания сочетания горячих клавиш, указываемого в параметре Value, используйте свойство [MakeShortcut](../IFormClass/IFormClass.MakeShortcut.htm).


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


[IShortCutCollection](IShortCutCollection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
