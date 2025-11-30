# IRibbon.Elements

IRibbon.Elements
-


# IRibbon.Elements


## Синтаксис


Elements: [IBaseRibbonElements](../IBaseRibbonElements/IBaseRibbonElements.htm);


## Описание


Свойство Elements возвращает коллекцию элементов управления, расположенных на всех вкладках ленты.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1» и компонента Ribbon с наименованием «Ribbon1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Elements: IBaseRibbonElements;

    Element: IBaseRibbonElement;

Begin

    Elements := Ribbon1.Elements;

    For Each Element In Elements Do

        If Element.Category <> Null Then

            Debug.WriteLine(Element.Name + "(" + Element.Category.Name + ")");

        Else

            Debug.WriteLine(Element.Name);

        End If;

    End For;

End Sub Button1OnClick;


При нажатии на кнопку в консоль среды разработки будут выведены наименования всех элементов управления, имеющихся на ленте. Для элементов управления, которые расположены на вкладках, также будут выведены наименования родительских вкладок.


См. также:


[IRibbon](IRibbon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
