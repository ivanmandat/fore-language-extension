# IFormClass.MakeShortcut

IFormClass.MakeShortcut
-


# IFormClass.MakeShortcut


## Синтаксис


MakeShortcut(Modifiers: [KeyModifiers](../../Enums/KeyModifiers.htm);
 Key: [Keys](../../Enums/Keys.htm));


## Параметры


Modifiers. Модификатор дополнительных
 клавиш, которые будут использоваться в сочетании. Для использования нескольких
 дополнительных клавиш необходимо указать соответствующие значения с разделителем
 Or.


Key. Клавиша, которая будет
 использоваться в качестве «горячей клавиши».


## Описание


Свойство MakeShortcut возвращает
 значение, соответствующее комбинации «горячих клавиш», которую необходимо
 назначить для какого-либо действия.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента ActionList с наименованием
 ActionList1 и компонента MainMenu с наименованием MainMenu1. Также в коде
 содержится процедура OnSelectAll, сигнатура которой соответствует сигнатуре
 метода, реализующего событие OnExecute действия ActionItem.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    AItem: ActionItem;

    MItem: IMenuItem;

Begin

    AItem := New ActionItem.Create;

    AItem.ActionList := ActionList1;

    AItem.Caption := "Выделить все";

    AItem.Hint := "Выделение всех объектов";

    AItem.ShortCut := Self.MakeShortcut(KeyModifiers.Ctrl Or KeyModifiers.Shift, Keys.A);

    AItem.OnExecute := OnSelectAll;

    MItem := New MenuItem.Create;

    MItem.Action := AItem;

    MainMenu1.Items.Add(MItem);

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку для компонента ActionList
 будет создано новое действие. Заголовок нового действия - "Выделить
 все", при выполнении действия будет вызываться пользовательская процедура
 OnSelectAll. Для вызова действия будет доступно сочетание клавиш SHIFT+CTRL+A.
 Для компонента MenuItem будет создан новый пункт меню. Данный пункт меню
 будет связан с созданным действием.


См. также:


[IFormClass](IFormClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
