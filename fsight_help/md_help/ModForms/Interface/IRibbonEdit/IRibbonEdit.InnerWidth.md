# IRibbonEdit.InnerWidth

IRibbonEdit.InnerWidth
-


# IRibbonEdit.InnerWidth


## Синтаксис


InnerWidth: Integer;


## Описание


Свойство InnerWidth определяет ширину элемента управления.


## Комментарии


Для элементов управления ширина рассчитывается автоматически с учетом количества и параметров соседних элементов управления. Данное свойство позволяет установить фиксированную ширину для текущего элемента управления. Ширина задается в пикселях, по умолчанию редактор текста имеет ширину 100 пикселей.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1» и компонента Ribbon с наименованием «Ribbon1». На ленте компонента «Ribbon1» создана вкладка и панель.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    RPanel: IRibbonPanel;

    REdit: IRibbonEdit;

Begin

    RPanel := Ribbon1.ActiveCategory.Panels.Item(0);

    REdit := New RibbonEdit.Create;

    RPanel.Elements.Add(REdit);

    REdit.ImageIndex := 0;

    REdit.InnerWidth := 170;

    REdit.SearchMode := True;

    REdit.SearchPrompt := "Префикс идентификаторов";

    REdit.TextAlign := TextAlignment.Center;

End Sub Button1OnClick;


При нажатии на кнопку на панели ленты будет создан редактор текста. Для редактора будут настроены основные параметры.


См. также:


[IRibbonEdit](IRibbonEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
