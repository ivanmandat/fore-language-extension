# IRibbonGroup.Elements

IRibbonGroup.Elements
-


# IRibbonGroup.Elements


## Синтаксис


Elements: [IRibbonElementsCollection](../IRibbonElementsCollection/IRibbonElementsCollection.htm);


## Описание


Свойство Elements возвращает коллекцию элементов управления, которые объединены в группу.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонента ImageList с наименованием «GrImages» и компонента Ribbon с наименованием «Ribbon1». На ленте компонента «Ribbon1» создана вкладка и панель.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    RPanel: IRibbonPanel;

    RGroup: IRibbonGroup;

    GroupElements: IRibbonElementsCollection;

    GrEdit: IRibbonEdit;

    GrButton: IRibbonButton;

Begin

    RPanel := Ribbon1.ActiveCategory.Panels.Item(0);

    RGroup := New RibbonGroup.Create;

    RPanel.Elements.Add(RGroup);

    RGroup.Images := GrImages;

    GroupElements := RGroup.Elements;

    GrEdit := New RibbonEdit.Create;

    GrButton := New RibbonButton.Create;

    GroupElements.Add(GrEdit);

    GroupElements.Add(GrButton);

    GrEdit.ImageIndex := 0;

    GrButton.Text := "Сохранить";

End Sub Button1OnClick;


При нажатии на кнопку на панели ленты будет создана группа элементов управления. В группу будут включены редактор текста и кнопка.


См. также:


[IRibbonGroup](IRibbonGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
