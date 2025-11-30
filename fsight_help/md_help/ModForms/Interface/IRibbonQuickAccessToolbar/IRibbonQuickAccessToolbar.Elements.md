# IRibbonQuickAccessToolbar.Elements

IRibbonQuickAccessToolbar.Elements
-


# IRibbonQuickAccessToolbar.Elements


## Синтаксис


Elements: [IRibbonElementsCollection](../IRibbonElementsCollection/IRibbonElementsCollection.htm);


## Описание


Свойство Elements возвращает
 коллекцию элементов управления, расположенных на панели быстрого доступа.


## Комментарии


В данную коллекцию могут быть добавлены элементы управления, которые
 уже существуют на ленте. Для элементов на панели быстрого доступа автоматически
 будут назначены цифровые горячие клавиши: 1, 2, 3 и так далее.


Примечание.
 Если для категорий также назначены цифровые горячие клавиши, то приоритет
 выполнения останется за ними.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента Ribbon с наименованием
 Ribbon1. На ленте компонента Ribbon1 создана вкладка и панель. На панели
 созданы какие-либо элементы управления.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    QAT: IRibbonQuickAccessToolbar;

	    QATElements: IRibbonElementsCollection;

	    RElements: IBaseRibbonElements;

	    RElement: IBaseRibbonElement;

	Begin

	    QAT := Ribbon1.QuickAccessToolbar;

	    QATElements := QAT.Elements;

	    RElements := Ribbon1.Elements;

	    For Each RElement In RElements Do

	        If RElement.Name.IndexOf("PaletteButton") <> -1 Then

	            QATElements.Add(RElement);

	        End If;

	    End For;

	End Sub Button1OnClick;


При нажатии на кнопку будет настроена панель быстрого доступа ленты.
 На панель будут добавлены все элементы, имеющие в своем наименование текст
 PaletteButton.


См. также:


[IRibbonQuickAccessToolbar](IRibbonQuickAccessToolbar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
